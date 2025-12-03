<template>
  <section class="stack">
    <h1>Contact</h1>
    <p class="lead">Formulaire local (exemple). Pour envoyer vraiment, ajoute un endpoint /api.</p>

    <form class="card stack" @submit.prevent="submit">
      <label class="field">
        <span>Nom</span>
        <input v-model.trim="name" type="text" placeholder="Ton nom" autocomplete="name" />
      </label>

      <label class="field">
        <span>Email</span>
        <input v-model.trim="email" type="email" placeholder="toi@exemple.com" autocomplete="email" />
      </label>

      <label class="field">
        <span>Message</span>
        <textarea v-model.trim="message" rows="5" placeholder="Ton message..." />
      </label>

      <div class="row">
        <button class="btn" type="submit">Simuler l’envoi</button>
        <a class="btn btn--ghost" :href="mailto" target="_blank" rel="noreferrer">Ouvrir mail</a>
      </div>

      <p v-if="status" class="muted">{{ status }}</p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const status = ref<string | null>(null);

const mailto = computed(() => {
  const subject = encodeURIComponent(`Contact - ${name.value || "Sans nom"}`);
  const body = encodeURIComponent(
    `Nom: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}\n`
  );
  return `mailto:contact@ton-domaine.tld?subject=${subject}&body=${body}`;
});

function submit() {
  status.value = "OK — ici tu appellerais une API /api/contact (à ajouter si besoin).";
}
</script>
