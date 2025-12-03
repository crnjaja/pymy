<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink class="brand" to="/">Mon site</RouterLink>

      <nav class="nav">
        <RouterLink class="nav__link" to="/">Accueil</RouterLink>
        <RouterLink class="nav__link" to="/a-propos">À propos</RouterLink>
        <RouterLink class="nav__link" to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
