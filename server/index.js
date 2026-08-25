import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
)

app.use(compression())

// Healthcheck
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    timestamp: new Date().toISOString(),
  })
})

// Dossier dist généré par Vite
const distPath = path.resolve(__dirname, '../dist')

// Assets statiques
app.use(
  express.static(distPath, {
    index: false,
    maxAge: '1h',
  }),
)

// 404 pour les routes API inconnues
app.use('/api', (_req, res) => {
  res.status(404).json({
    error: 'API route not found',
  })
})

// Fallback SPA
app.use((_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
