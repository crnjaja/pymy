<template>
  <div class="privacy-page">
    <!-- HERO -->
    <section class="stage stage--top stage--top--compact stage--top--flat full-bleed">
      <div class="container stage-inner">
        <div class="hero hero--privacy">
          <div class="hero-kicker">
            <span class="kicker-dot" aria-hidden="true"></span>
            Legal
          </div>

          <h1 class="hero-title hero-title--words" ref="heroTitleEl">
            PRIVACY <span class="accent">policy</span>
          </h1>

          <p class="hero-subtitle">
            Learn how we collect, use and protect personal data when you use our website.
          </p>

          <div class="hero-actions">
            <RouterLink class="btn btn--primary" to="/contact"> Any Questions? </RouterLink>

            <RouterLink class="btn btn--ghost" to="/"> Back to Home </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="content-block full-bleed">
      <div class="container">
        <section class="privacy-section-main" aria-labelledby="privacy-title">
          <!-- LARGE SECTION TITLE -->
          <div class="section-head">
            <h2 id="privacy-title" class="section-heading">Privacy Policy</h2>

            <div class="privacy-update">
              <span class="privacy-update-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                  <path d="M8 14h3M8 17h6" />
                </svg>
              </span>

              <div class="privacy-update-content">
                <span class="privacy-update-label"> Last updated </span>

                <strong class="privacy-update-date">
                  {{ privacyMeta.lastUpdated }}
                </strong>
              </div>
            </div>
          </div>

          <!-- POLICY LAYOUT -->
          <div class="privacy-layout">
            <!-- NAVIGATION -->
            <aside class="privacy-nav">
              <div class="privacy-nav-inner">
                <div class="privacy-nav-head">
                  <span class="privacy-nav-index" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>

                  <div>
                    <span class="privacy-nav-label"> On this page </span>

                    <h3>Topics</h3>
                  </div>
                </div>

                <nav aria-label="Privacy Policy sections">
                  <a
                    v-for="(section, index) in privacySections"
                    :key="section.id"
                    class="privacy-nav-link"
                    :class="{ active: activeSection === section.id }"
                    :href="`#${section.id}`"
                    @click="setActive(section.id)"
                  >
                    <span class="privacy-nav-number">
                      {{ number(index + 1) }}
                    </span>

                    <span>
                      {{ section.title }}
                    </span>

                    <span class="privacy-nav-arrow" aria-hidden="true"> → </span>
                  </a>
                </nav>
              </div>
            </aside>

            <!-- POLICY CONTENT -->
            <main class="privacy-content">
              <article
                v-for="(section, index) in privacySections"
                :id="section.id"
                :key="section.id"
                class="policy-section"
                :data-section="section.id"
              >
                <header class="policy-section-head">
                  <span class="policy-number">
                    {{ number(index + 1) }}
                  </span>

                  <h2>
                    {{ section.title }}
                  </h2>
                </header>

                <div class="policy-section-body">
                  <template
                    v-for="(block, blockIndex) in section.content"
                    :key="`${section.id}-${blockIndex}`"
                  >
                    <!-- PARAGRAPH -->
                    <p v-if="block.type === 'paragraph'" class="policy-text">
                      {{ block.text }}
                    </p>

                    <!-- SUBTITLE -->
                    <h3 v-else-if="block.type === 'subtitle'" class="policy-subtitle">
                      {{ block.text }}
                    </h3>

                    <!-- SIMPLE LIST -->
                    <ul v-else-if="block.type === 'list'" class="policy-list">
                      <li v-for="item in block.items" :key="item">
                        <span class="policy-list-marker" aria-hidden="true"></span>

                        <span>{{ item }}</span>
                      </li>
                    </ul>

                    <!-- RICH LIST -->
                    <ul
                      v-else-if="block.type === 'rich-list'"
                      class="policy-list policy-list--rich"
                    >
                      <li v-for="item in block.items" :key="item.title">
                        <span class="policy-list-marker" aria-hidden="true"></span>

                        <span>
                          <strong>{{ item.title }}</strong>
                          <span> — {{ item.text }}</span>
                        </span>
                      </li>
                    </ul>

                    <!-- LINK -->
                    <p v-else-if="block.type === 'link'" class="policy-text">
                      {{ block.prefix || '' }}

                      <a :href="block.href" target="_blank" rel="noopener noreferrer">
                        {{ block.label }}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </p>

                    <!-- EMAIL -->
                    <p v-else-if="block.type === 'email'" class="policy-text">
                      {{ block.prefix || '' }}

                      <a :href="block.href">
                        {{ block.label }}
                      </a>
                    </p>

                    <!-- HTML -->
                    <p
                      v-else-if="block.type === 'html'"
                      class="policy-text"
                      v-html="block.html"
                    ></p>
                  </template>
                </div>
              </article>
            </main>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { RouterLink } from 'vue-router'
import { useWordReveal } from '@/composables/useWordReveal'

import { privacyMeta, privacySections } from '@/data/privacy.data'

import '@/assets/pages/privacy-policy.css'

const { el: heroTitleEl } = useWordReveal({
  stagger: 140,
  duration: 1300,
})

const activeSection = ref(privacySections[0]?.id || '')

let observer = null

function number(value) {
  return String(value).padStart(2, '0')
}

function setActive(id) {
  activeSection.value = id
}

onMounted(() => {
  const sections = document.querySelectorAll('.policy-section[data-section]')

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length) {
        activeSection.value = visible[0].target.dataset.section
      }
    },
    {
      rootMargin: '-20% 0px -65% 0px',
      threshold: [0.05, 0.2, 0.5],
    },
  )

  sections.forEach((section) => {
    observer.observe(section)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
