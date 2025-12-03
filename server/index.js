import express from "express";
import compression from "compression";
import helmet from "helmet";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Sécurité basique; CSP désactivé pour éviter de casser selon les cas (tu peux la configurer ensuite).
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(compression());

// Healthcheck (pratique pour tests / monitoring)
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// Dossier dist (généré par `npm run build`)
const distPath = path.resolve(__dirname, "../dist");

// Sert les assets statiques
app.use(
  express.static(distPath, {
    index: false,
    maxAge: "1h",
  })
);

// Fallback SPA: toutes les routes non-API renvoient index.html
app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(distPath, "index.html"));
});


const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
