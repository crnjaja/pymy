<template>
  <section class="stack">
    <header class="hero">
      <div class="hero__top">
        <div class="hero__brand">
          <img class="hero__logo" src="/files/logo.png" alt="Logo" />
          <div>
            <div class="kicker">Noël • 2025 • Pour Py & My </div>
            <h1>Un site simple, premium, prêt prod</h1>
          </div>
        </div>

        <div class="row">
          <a class="btn" href="/experience">✨ Voir l’expérience</a>
          <a class="btn btn--ghost" href="/contact">📍 Contact</a>
        </div>
      </div>

      <p class="lead" style="margin-top: 10px;">
        Design terre moderne, coins carrés, composants réutilisables, et pages claires.
      </p>

      <div class="chips" aria-label="Infos rapides">
        <span class="chip">⚡ Rapide</span>
        <span class="chip">🧱 Structuré</span>
        <span class="chip">🚀 Déployable</span>
        <span class="chip">🎨 Terracotta UI</span>
      </div>
    </header>

    <div class="spotlight">
      <article class="card card--accent spotlight__panel">
        <div class="section-title">
          <h2>Ce que tu gagnes</h2>
          <span class="muted">Lisible • robuste • évolutif</span>
        </div>

        <div class="grid">
          <div class="card card--soft card-span-4">
            <h3>Architecture claire</h3>
            <p class="muted" style="margin: 8px 0 0;">
              Pages simples, styles cohérents, composants UI réutilisables.
            </p>
          </div>

          <div class="card card--soft card-span-4">
            <h3>Look premium terre</h3>
            <p class="muted" style="margin: 8px 0 0;">
              Brand sable clair + accents terre battue / ember / brique.
            </p>
          </div>

          <div class="card card--soft card-span-4">
            <h3>Prêt pour la prod</h3>
            <p class="muted" style="margin: 8px 0 0;">
              Build → dist, puis Node/Express côté prod (Infomaniak).
            </p>
          </div>
        </div>
      </article>

      <aside class="card card--accent spotlight__side">
        <div class="section-title">
          <h2>En bref</h2>
          <span class="muted">Focus UX</span>
        </div>

        <div class="stat">
          <div class="stat__k">Design system</div>
          <div class="stat__v">Tokens + variants</div>
        </div>

        <div class="stat">
          <div class="stat__k">Ergonomie</div>
          <div class="stat__v">Grilles & hiérarchie</div>
        </div>

        <div class="stat">
          <div class="stat__k">Style</div>
          <div class="stat__v">Terre moderne</div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
