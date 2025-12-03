<template>
  <section class="full-bleed">
    <div class="container stack">
      <header class="hero">
        <div class="hero__top">
          <div class="hero__brand">
            <img class="hero__logo" src="/files/logo.png" alt="Logo" />
            <div>
              <div class="kicker">Expérience en plusieurs étapes</div>
              <h1>Repas complet + accès aux bains</h1>
            </div>
          </div>

          <div class="row">
            <a class="btn btn--terra" href="#etapes">🧭 Voir les étapes</a>
            <a class="btn btn--ember" href="mailto:contact@monsite.ch?subject=Réservation%20Expérience">📅 Réserver</a>
          </div>
        </div>

        <p class="lead" style="margin-top: 10px;">
          Un parcours simple : on commence par un menu complet, puis on prolonge avec un moment de détente aux bains.
        </p>

        <div class="chips" aria-label="Informations rapides">
          <span class="chip">⏱️ Durée : ~3h</span>
          <span class="chip">🍽️ Menu complet</span>
          <span class="chip">🛁 Accès bains</span>
          <span class="chip">📍 Sur réservation</span>
        </div>
      </header>

      <div class="section-title" id="etapes">
        <h2>Les étapes</h2>
        <span class="muted">Claires, visuelles, ergonomiques</span>
      </div>

      <div class="steps" role="list">
        <article class="card card--accent step" role="listitem">
          <div class="step__meta">
            <div class="step__badge">
              <span class="step__num" aria-hidden="true">1</span>
              <span class="muted">Entrée • Plat • Dessert</span>
            </div>

            <h3 class="step__title">Repas — menu complet</h3>
            <p class="step__subtitle">
              Un service fluide et un menu complet, pensé pour enchaîner sans stress sur la détente.
            </p>

            <ul class="step__bullets">
              <li>Entrée + plat + dessert (selon saison)</li>
              <li>Option végétarienne possible</li>
              <li>Rythme optimisé pour la suite</li>
            </ul>

            <div class="cta-row">
              <a class="btn btn--ember" href="mailto:contact@monsite.ch?subject=Réservation%20Expérience">📅 Réserver</a>
              <a class="btn btn--ghost" href="/contact">📍 Nous trouver</a>
            </div>
          </div>

          <figure class="media" aria-label="Image étape 1 - repas">
            <img
              src="/files/2.webp"
              alt="Repas complet : entrée, plat et dessert"
              loading="lazy"
            />
          </figure>
        </article>

        <article class="card card--accent step" role="listitem">
          <div class="step__meta">
            <div class="step__badge">
              <span class="step__num" aria-hidden="true">2</span>
              <span class="muted">Pause • chaleur • calme</span>
            </div>

            <h3 class="step__title">Bains — accès détente</h3>
            <p class="step__subtitle">
              Un espace chaleureux et calme pour terminer l’expérience en douceur.
            </p>

            <ul class="step__bullets">
              <li>Accès aux bains sur créneau</li>
              <li>Vestiaires sur place</li>
              <li>Ambiance tamisée, relax</li>
            </ul>
          </div>

          <figure class="media" aria-label="Image étape 2 - bains">
            <img
              src="/files/1.webp"
              alt="Bains : ambiance chaude et détente"
              loading="lazy"
            />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
