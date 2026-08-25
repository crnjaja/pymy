<template>
  <header class="site-header" :class="{ 'site-header--solid': isSolid }">
    <div class="container header-inner">
      <RouterLink to="/" class="brand brand--logo-only">
        <img
          class="brand-logo"
          :class="{ 'brand-logo--top': !isSolid }"
          src="/files/HEL.png"
          alt="Logo"
        />
      </RouterLink>

      <nav class="top-nav" aria-label="Navigation principale">
        <RouterLink class="top-nav-link" to="/">Home</RouterLink>

        <!-- ABOUT -->
        <div
          ref="aboutEl"
          class="nav-dropdown"
          :class="{ 'nav-dropdown--open': aboutOpen }"
          @mouseenter="onAboutEnter"
          @mouseleave="onAboutLeave"
        >
          <button
            type="button"
            class="top-nav-link top-nav-link--dropdown"
            :class="{ 'is-active': isAboutActive }"
            aria-haspopup="menu"
            :aria-expanded="aboutOpen ? 'true' : 'false'"
            @click="toggleAbout"
            @keydown.enter.prevent="toggleAbout"
            @keydown.space.prevent="toggleAbout"
            @keydown.escape.prevent="closeAbout"
            @keydown.down.prevent="focusFirstItem('about')"
          >
            About

            <span class="dropdown-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </span>
          </button>

          <div class="nav-dropdown-panel" role="menu" aria-label="About submenu" @click.stop>
            <RouterLink
              class="nav-dropdown-item"
              to="/projects/hel"
              role="menuitem"
              tabindex="-1"
              @click="closeAbout"
            >
              Resisting Human Erosion
              <span class="nav-dropdown-hint">Learn about the project</span>
            </RouterLink>

            <RouterLink
              class="nav-dropdown-item"
              to="/projects/network"
              role="menuitem"
              tabindex="-1"
              @click="closeAbout"
            >
              Our Network
              <span class="nav-dropdown-hint">Explore our network members</span>
            </RouterLink>

            <RouterLink
              class="nav-dropdown-item"
              to="/projects/team"
              role="menuitem"
              tabindex="-1"
              @click="closeAbout"
            >
              Our Team
              <span class="nav-dropdown-hint">Meet our team members</span>
            </RouterLink>

            <!-- TOOLS : DÉSACTIVÉ -->
            <div ref="toolsSubEl" class="nav-subdropdown">
              <button
                type="button"
                class="nav-dropdown-item nav-dropdown-item--submenu is-disabled"
                role="menuitem"
                tabindex="-1"
                aria-disabled="true"
                disabled
              >
                Tools

                <span class="nav-dropdown-hint"> Infographics, database &amp; map </span>

                <span class="dropdown-icon dropdown-icon--right" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" />
                  </svg>
                </span>
              </button>

              <!--
                Sous-menu conservé pour pouvoir le réactiver facilement.
              -->
              <div class="nav-subdropdown-panel" role="menu" aria-label="Tools submenu" @click.stop>
                <RouterLink
                  class="nav-dropdown-item"
                  to="/tools/infographics"
                  role="menuitem"
                  tabindex="-1"
                  @click="closeAll"
                >
                  Infographics
                  <span class="nav-dropdown-hint">Visual summaries</span>
                </RouterLink>

                <RouterLink
                  class="nav-dropdown-item"
                  to="/tools/database"
                  role="menuitem"
                  tabindex="-1"
                  @click="closeAll"
                >
                  Database
                  <span class="nav-dropdown-hint">Browse &amp; search data</span>
                </RouterLink>

                <RouterLink
                  class="nav-dropdown-item"
                  to="/tools/map"
                  role="menuitem"
                  tabindex="-1"
                  @click="closeAll"
                >
                  Interactive Map
                  <span class="nav-dropdown-hint"> Explore cases geographically </span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <RouterLink class="top-nav-link" to="/publications"> Publications </RouterLink>

        <RouterLink class="top-nav-link" to="/events"> Events </RouterLink>

        <!-- ARCHIVED PROJECTS -->
        <div
          ref="projectsEl"
          class="nav-dropdown"
          :class="{ 'nav-dropdown--open': projectsOpen }"
          @mouseenter="onProjectsEnter"
          @mouseleave="onProjectsLeave"
        >
          <button
            type="button"
            class="top-nav-link top-nav-link--dropdown"
            :class="{ 'is-active': isProjectsActive }"
            aria-haspopup="menu"
            :aria-expanded="projectsOpen ? 'true' : 'false'"
            @click="toggleProjects"
            @keydown.enter.prevent="toggleProjects"
            @keydown.space.prevent="toggleProjects"
            @keydown.escape.prevent="closeProjects"
            @keydown.down.prevent="focusFirstItem('projects')"
          >
            Archived Projects

            <span class="dropdown-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </span>
          </button>

          <div class="nav-dropdown-panel" role="menu" aria-label="Projects submenu" @click.stop>
            <RouterLink
              class="nav-dropdown-item"
              to="/projects/hrjust"
              role="menuitem"
              tabindex="-1"
              @click="closeProjects"
            >
              HRJust
              <span class="nav-dropdown-hint"> Human Rights Justification </span>
            </RouterLink>

            <!-- DÉSACTIVÉ -->
            <RouterLink
              class="nav-dropdown-item is-disabled"
              to="/projects/gem"
              role="menuitem"
              tabindex="-1"
              aria-disabled="true"
              @click.prevent
            >
              GEM
              <span class="nav-dropdown-hint"> Data to be imported </span>
            </RouterLink>

            <!-- DÉSACTIVÉ -->
            <RouterLink
              class="nav-dropdown-item is-disabled"
              to="/projects/cli-m-co2"
              role="menuitem"
              tabindex="-1"
              aria-disabled="true"
              @click.prevent
            >
              CLI-M-CO2
              <span class="nav-dropdown-hint"> Data to be imported </span>
            </RouterLink>

            <!-- DÉSACTIVÉ -->
            <RouterLink
              class="nav-dropdown-item is-disabled"
              to="/projects/clisel"
              role="menuitem"
              tabindex="-1"
              aria-disabled="true"
              @click.prevent
            >
              CLISEL
              <span class="nav-dropdown-hint"> Data to be imported </span>
            </RouterLink>
          </div>
        </div>

        <RouterLink class="top-nav-link" to="/contact"> Contact </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isSolid = ref(false)
const route = useRoute()

const onScroll = () => {
  isSolid.value = window.scrollY > 16
}

const aboutEl = ref<HTMLElement | null>(null)
const toolsSubEl = ref<HTMLElement | null>(null)
const projectsEl = ref<HTMLElement | null>(null)

const aboutOpen = ref(false)
const toolsSubOpen = ref(false)
const projectsOpen = ref(false)

const ABOUT_ALIASES = new Set(['/projects/network', '/projects/hel', '/projects/team'])

const TOOLS_ALIASES = new Set(['/tools/infographics', '/tools/database', '/tools/interactive-map'])

const isAboutActive = computed(() => ABOUT_ALIASES.has(route.path) || TOOLS_ALIASES.has(route.path))

const isProjectsActive = computed(
  () => route.path.startsWith('/projects/') && !ABOUT_ALIASES.has(route.path),
)

const canHover = () => globalThis.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches

function closeAll() {
  aboutOpen.value = false
  toolsSubOpen.value = false
  projectsOpen.value = false
}

function openAbout() {
  projectsOpen.value = false
  aboutOpen.value = true
}

function closeAbout() {
  aboutOpen.value = false
  toolsSubOpen.value = false
}

function toggleAbout() {
  projectsOpen.value = false
  aboutOpen.value = !aboutOpen.value

  if (!aboutOpen.value) {
    toolsSubOpen.value = false
  }
}

function openProjects() {
  closeAbout()
  projectsOpen.value = true
}

function closeProjects() {
  projectsOpen.value = false
}

function toggleProjects() {
  closeAbout()
  projectsOpen.value = !projectsOpen.value
}

function openToolsSub() {
  toolsSubOpen.value = true
}

function closeToolsSub() {
  toolsSubOpen.value = false
}

function toggleToolsSub() {
  toolsSubOpen.value = !toolsSubOpen.value
}

function onAboutEnter() {
  if (canHover()) openAbout()
}

function onAboutLeave() {
  if (canHover()) closeAbout()
}

function onProjectsEnter() {
  if (canHover()) openProjects()
}

function onProjectsLeave() {
  if (canHover()) closeProjects()
}

/*
 * Tools est temporairement désactivé.
 * On garde les fonctions afin de pouvoir le réactiver facilement.
 */
function onToolsSubEnter() {
  // if (canHover()) openToolsSub()
}

function onToolsSubLeave() {
  // if (canHover()) closeToolsSub()
}

function focusFirstItem(which: 'about' | 'toolsSub' | 'projects') {
  requestAnimationFrame(() => {
    const root =
      which === 'about' ? aboutEl.value : which === 'toolsSub' ? toolsSubEl.value : projectsEl.value

    const first = root?.querySelector(
      '.nav-dropdown-panel .nav-dropdown-item, .nav-subdropdown-panel .nav-dropdown-item',
    ) as HTMLElement | null

    first?.focus()
  })
}

function openToolsSubAndFocusFirst() {
  openToolsSub()

  requestAnimationFrame(() => {
    const first = toolsSubEl.value?.querySelector(
      '.nav-subdropdown-panel .nav-dropdown-item',
    ) as HTMLElement | null

    first?.focus()
  })
}

function onDocClick(e: MouseEvent) {
  const t = e.target as Node

  if (aboutOpen.value && aboutEl.value && !aboutEl.value.contains(t)) {
    closeAbout()
  }

  if (toolsSubOpen.value && toolsSubEl.value && !toolsSubEl.value.contains(t)) {
    closeToolsSub()
  }

  if (projectsOpen.value && projectsEl.value && !projectsEl.value.contains(t)) {
    closeProjects()
  }
}

function onDocKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeAll()
}

watch(() => route.fullPath, closeAll)

onMounted(() => {
  onScroll()

  window.addEventListener('scroll', onScroll, {
    passive: true,
  })

  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onDocKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onDocKeydown)
})
</script>

<style scoped>
/*
 * LIENS / BOUTONS TEMPORAIREMENT DÉSACTIVÉS
 *
 * Pour les réactiver :
 * retire simplement la classe "is-disabled"
 * ainsi que @click.prevent / disabled si présents.
 */
.is-disabled {
  opacity: 0.4;
  cursor: not-allowed !important;
  pointer-events: none;
}
</style>
