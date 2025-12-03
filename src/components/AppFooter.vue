<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span>© {{ year }} Le Dodu</span>
      <span class="muted">Hébergé sur Infomaniak</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
