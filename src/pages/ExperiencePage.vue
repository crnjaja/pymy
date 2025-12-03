<template>
  <section class="full-bleed">
    <div class="container stack">
      <header class="hero">
        <div class="hero__top">
          <div class="hero__brand">
            <img class="hero__logo" src="/files/logo.png" alt="Logo" />
            <div>
              <div class="kicker">Expérience en plusieurs étapes</div>
              <h1>Repas complet & accès aux bains</h1>
            </div>
          </div>
        </div>

        <div class="chips" aria-label="Informations rapides">
          <span class="chip">⏱️ Durée : ~3h</span>
          <span class="chip">🍽️ Menu complet</span>
          <span class="chip">🛁 Accès bains</span>
          <span class="chip">📍 Sur réservation</span>
        </div>
      </header>


      <div class="steps" role="list">
        <article class="card card--accent step" role="listitem">
          <div class="step__meta">
            <div class="step__badge">
              <span class="step__num" aria-hidden="true">1</span>
              <span class="muted">Entrée • Plat • Dessert</span>
            </div>

            <h3 class="step__title">Repas</h3>
            <p class="step__subtitle">
              Un service fluide et un menu complet, pensé pour enchaîner sans stress sur la détente.
            </p>

            <ul class="step__bullets">
              <li>Apéro et planchette</li>
              <li>Repas 3 plats à la carte</li>
              <li>Rythme optimisé pour la suite</li>
            </ul>
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
