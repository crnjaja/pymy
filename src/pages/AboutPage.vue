<template>
  <section class="stack bon-shell">
    <header class="hero">
      <div class="hero__top">
        <div class="hero__brand">
          <img class="hero__logo" src="/files/logo.png" alt="Logo" />
          <div>
            <div class="kicker">Document</div>
            <h1>Le Bon</h1>
          </div>
        </div>
      </div>

      <div class="chips" aria-label="Informations rapides">
        <span class="chip">🔒 Hautement sécurisé</span>
        <span class="chip">📄 Format PDF</span>
        <span class="chip">⬇️ Téléchargeable</span>
      </div>
    </header>

    <div class="bon-grid">
      <!-- Accès -->
      <article class="card card--accent stack" aria-label="Accès au document">
        <div class="section-title">
          <h2>Déverrouiller</h2>
        </div>

        <form class="stack" @submit.prevent="unlock">
          <label class="field">
            <span>Mot de passe</span>

            <div class="pw-row">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model.trim="password"
                autocomplete="current-password"
                placeholder="Saisir le mot de passe"
                required
                :disabled="loading"
                aria-label="Mot de passe du PDF"
              />

              <button
                class="btn btn--ghost"
                type="button"
                @click="showPassword = !showPassword"
                :disabled="loading"
                :aria-pressed="showPassword"
              >
                {{ showPassword ? 'Masquer' : 'Afficher' }}
              </button>
            </div>
          </label>

          <div class="row" style="gap: 10px">
            <button class="btn btn--ember" type="submit" :disabled="loading || !password">
              {{ loading ? 'Déverrouillage...' : 'Déverrouiller' }}
            </button>

            <a
              v-if="unlocked"
              class="btn btn--ghost"
              :href="pdfUrl"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir dans un nouvel onglet
            </a>

            <a v-if="unlocked" class="btn btn--ghost" :href="pdfUrl" download> Télécharger </a>
          </div>

          <p v-if="status" class="muted" role="status">{{ status }}</p>

          <div class="hint">
            <p class="muted" style="margin: 0">
              Note : cette page ne “protège” pas l’URL. La vraie protection vient du
              <strong>chiffrement du PDF</strong> (mot de passe à l’ouverture).
            </p>
          </div>
        </form>
      </article>

      <!-- Viewer -->
      <article class="card card--accent stack" aria-label="Aperçu du PDF">
        <div class="viewer-head">
          <div class="section-title" style="margin: 0">
            <h2>Aperçu</h2>
            <span class="muted">
              <template v-if="unlocked && numPages"> Page {{ pageNum }} / {{ numPages }} </template>
              <template v-else>Verrouillé</template>
            </span>
          </div>

          <div v-if="unlocked" class="row" style="gap: 8px">
            <button
              class="btn btn--ghost"
              type="button"
              @click="prevPage"
              :disabled="loading || pageNum <= 1"
            >
              ←
            </button>
            <button
              class="btn btn--ghost"
              type="button"
              @click="nextPage"
              :disabled="loading || pageNum >= numPages"
            >
              →
            </button>
            <button
              class="btn btn--ghost"
              type="button"
              @click="zoomOut"
              :disabled="loading || scale <= 0.7"
            >
              −
            </button>
            <button
              class="btn btn--ghost"
              type="button"
              @click="zoomIn"
              :disabled="loading || scale >= 2.2"
            >
              +
            </button>
          </div>
        </div>

        <div v-if="!unlocked" class="locked">
          <div class="lock">🔒</div>
          <p class="muted" style="margin: 0">
            Déverrouille le document pour afficher l’aperçu du PDF.
          </p>
        </div>

        <div v-else class="canvas-wrap" :aria-busy="loading ? 'true' : 'false'">
          <canvas ref="canvasEl"></canvas>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min?url'
;(pdfjsLib as any).GlobalWorkerOptions.workerSrc = workerSrc

const pdfUrl = '/files/bon.pdf'

const password = ref('')
const showPassword = ref(false)
const status = ref<string | null>(null)
const loading = ref(false)
const unlocked = ref(false)

const canvasEl = ref<HTMLCanvasElement | null>(null)

const pageNum = ref(1)
const numPages = ref(0)
const scale = ref(1.2)

let pdfDoc: any = null
let renderTask: any = null

async function unlock() {
  status.value = null
  loading.value = true

  await cleanupPdf()

  try {
    const task = (pdfjsLib as any).getDocument({
      url: pdfUrl,
      password: password.value,
      disableRange: true,
      disableStream: true,
    })

    pdfDoc = await task.promise

    numPages.value = pdfDoc.numPages || 0
    pageNum.value = 1
    unlocked.value = true

    await nextTick()
    await renderPage()
    status.value = 'OK — document déverrouillé.'
  } catch (e: any) {
    unlocked.value = false
    numPages.value = 0
    pageNum.value = 1

    const msg = String(e?.message || '').toLowerCase()
    if (msg.includes('password')) status.value = 'Mot de passe incorrect.'
    else if (msg.includes('missing') && msg.includes('pdf'))
      status.value = 'PDF introuvable. Vérifie public/files/bon.pdf'
    else status.value = 'Impossible d’ouvrir le PDF (vérifie le chiffrement).'
  } finally {
    loading.value = false
  }
}

async function renderPage() {
  if (!pdfDoc || !canvasEl.value) return

  if (renderTask?.cancel) {
    try {
      renderTask.cancel()
    } catch (_) {}
  }

  loading.value = true

  const page = await pdfDoc.getPage(pageNum.value)
  const viewport = page.getViewport({ scale: scale.value })
  const canvas = canvasEl.value
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    loading.value = false
    return
  }

  canvas.width = Math.floor(viewport.width)
  canvas.height = Math.floor(viewport.height)

  renderTask = page.render({ canvasContext: ctx, viewport })
  try {
    await renderTask.promise
  } finally {
    loading.value = false
  }
}

function prevPage() {
  if (pageNum.value <= 1) return
  pageNum.value -= 1
  renderPage()
}

function nextPage() {
  if (pageNum.value >= numPages.value) return
  pageNum.value += 1
  renderPage()
}

function zoomIn() {
  if (scale.value >= 2.2) return
  scale.value = Math.round((scale.value + 0.1) * 10) / 10
  renderPage()
}

function zoomOut() {
  if (scale.value <= 0.7) return
  scale.value = Math.round((scale.value - 0.1) * 10) / 10
  renderPage()
}

async function cleanupPdf() {
  if (renderTask?.cancel) {
    try {
      renderTask.cancel()
    } catch (_) {}
  }
  renderTask = null

  if (pdfDoc?.destroy) {
    try {
      await pdfDoc.destroy()
    } catch (_) {}
  }
  pdfDoc = null
}

onBeforeUnmount(() => {
  cleanupPdf()
})
</script>

<style scoped src="@/styles/bon.css"></style>
