<template>
  <div class="network-page">
    <section class="stage stage--top stage--top--compact stage--top--flat full-bleed">
      <div class="container stage-inner">
        <div class="hero">
          <div class="hero-kicker">
            <span class="kicker-dot" aria-hidden="true"></span>
            CURRENT PROJECT
          </div>

          <h1 class="hero-title hero-title--words" ref="heroTitleEl">
            Explore <span class="accent">our Network</span>
          </h1>

          <p class="hero-subtitle">
            Partner institutions and advisors supporting the Human Erosion Lab.
          </p>

          <div class="hero-actions">
            <RouterLink class="btn btn--primary" to="/contact">Any Questions?</RouterLink>
            <RouterLink class="btn btn--ghost" to="/">Back to Home</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="content-block full-bleed">
      <div class="container">
        <div class="network-hero-offset">
          <section class="network-section" aria-labelledby="partners-title">
            <div class="section-topline">
              <div>
                <h2 id="partners-title" class="section-heading">Partners</h2>
              </div>
            </div>

            <ul class="partner-grid" aria-label="Partner institutions">
              <li v-for="partner in partners" :key="partner.key" class="partner-card">
                <a
                  class="partner-link"
                  :href="partner.url"
                  target="_blank"
                  rel="noopener"
                  :aria-label="`Visit ${partner.name}`"
                >
                  <div class="partner-logo-wrap">
                    <img
                      class="partner-logo"
                      :class="partner.logoClass"
                      :src="partner.logo"
                      :alt="`${partner.name} logo`"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div class="partner-content">
                    <span class="partner-eyebrow">{{ partner.type }}</span>
                    <h3 class="partner-name">{{ partner.name }}</h3>
                    <p class="partner-text">{{ partner.description }}</p>
                  </div>

                  <span class="partner-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </section>

          <div class="spacer" aria-hidden="true"></div>

          <section class="network-section" aria-labelledby="advisory-title">
            <div class="section-topline">
              <div>
                <h2 id="advisory-title" class="section-heading">Advisors</h2>
              </div>
            </div>

            <div class="advisor-showcase" aria-label="Advisory board profiles">
              <aside class="advisor-bio-stage" aria-live="polite">
                <div class="advisor-bio-card" :key="selectedAdvisor.key">
                  <span class="advisor-bio-kicker">Advisor profile</span>

                  <div class="advisor-bio-top">
                    <div class="advisor-bio-avatar" :data-initials="initials(selectedAdvisor.name)">
                      <img
                        v-if="selectedAdvisor.photo"
                        :src="selectedAdvisor.photo"
                        :alt="portraitAlt(selectedAdvisor)"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div class="advisor-bio-heading">
                      <h3 class="advisor-bio-name">{{ selectedAdvisor.name }}</h3>

                      <div class="advisor-bio-actions" aria-label="Advisor contact links">
                        <a
                          class="advisor-bio-action"
                          :class="{ 'is-disabled': !selectedAdvisor.email }"
                          :href="selectedAdvisor.email ? mailto(selectedAdvisor.email) : undefined"
                          :aria-label="
                            selectedAdvisor.email
                              ? emailAriaLabel(selectedAdvisor)
                              : `${selectedAdvisor.name} has no email listed`
                          "
                          :aria-disabled="!selectedAdvisor.email"
                          :title="selectedAdvisor.email || 'No email listed'"
                          @click="guardMissingLink"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              d="M4 6h16v12H4z"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linejoin="round"
                            />
                            <path
                              d="m4 7 8 6 8-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>

                        <a
                          class="advisor-bio-action"
                          :class="{ 'is-disabled': !hasLinkedIn(selectedAdvisor) }"
                          :href="
                            hasLinkedIn(selectedAdvisor) ? selectedAdvisor.linkedin : undefined
                          "
                          :target="hasLinkedIn(selectedAdvisor) ? '_blank' : undefined"
                          :rel="hasLinkedIn(selectedAdvisor) ? 'noopener' : undefined"
                          :aria-label="
                            hasLinkedIn(selectedAdvisor)
                              ? linkedinAriaLabel(selectedAdvisor)
                              : `${selectedAdvisor.name} has no LinkedIn listed`
                          "
                          :aria-disabled="!hasLinkedIn(selectedAdvisor)"
                          :title="
                            hasLinkedIn(selectedAdvisor) ? 'LinkedIn profile' : 'No LinkedIn listed'
                          "
                          @click="guardMissingLink"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              d="M6.5 9.5V19M6.5 6.4v.1M10.5 19v-9.5M10.5 13.2c0-2.2 1.35-3.9 3.65-3.9 2.1 0 3.35 1.35 3.35 3.85V19"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <p class="advisor-bio-text">{{ selectedAdvisor.bio }}</p>

                  <div class="advisor-bio-institution">
                    <span class="advisor-bio-logo-wrap">
                      <img
                        class="advisor-bio-logo"
                        :src="advisorLogo(selectedAdvisor)"
                        :alt="`${advisorInstitutionName(selectedAdvisor)} logo`"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span class="advisor-bio-institution-copy">
                      <span class="advisor-bio-institution-label">Institution</span>
                      <span class="advisor-bio-institution-name">
                        {{ advisorInstitutionName(selectedAdvisor) }}
                      </span>
                      <span
                        v-if="advisorInstitutionPlace(selectedAdvisor)"
                        class="advisor-bio-institution-place"
                      >
                        {{ advisorInstitutionPlace(selectedAdvisor) }}
                      </span>
                    </span>
                  </div>
                </div>
              </aside>

              <ul class="advisor-profile-grid" aria-label="Advisory board members">
                <li v-for="member in advisoryBoard" :key="member.key" class="advisor-profile-item">
                  <button
                    class="advisor-profile-button"
                    type="button"
                    :class="{ 'is-active': selectedAdvisor.key === member.key }"
                    :aria-pressed="selectedAdvisor.key === member.key"
                    @click="selectAdvisor(member)"
                  >
                    <span class="advisor-avatar" :data-initials="initials(member.name)">
                      <img
                        v-if="member.photo"
                        :src="member.photo"
                        :alt="portraitAlt(member)"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>

                    <span class="advisor-name" :title="member.name">{{ member.name }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useWordReveal } from '@/composables/useWordReveal'
import { advisoryBoard as advisoryBoardData } from '@/data/team.data'
import { TeamService } from '@/services/TeamService'
import '@/assets/pages/network.css'

const { el: heroTitleEl } = useWordReveal({
  stagger: 140,
  duration: 1300,
})

const partners = [
  {
    key: 'university-of-bern',
    name: 'GQUAL',
    type: 'Global Advocacy Campaign',
    description:
      'GQUAL is a global campaign dedicated to advancing gender parity in international representation. It works to promote transparent and inclusive selection processes, ensuring that women have equal opportunities to serve in international courts, monitoring bodies, and other global decision-making institutions.',
    logo: '/images/logos/network/GQUAL.png',
    url: 'https://gqualcampaign.org/',
  },
  {
    key: 'partner-two',
    name: 'International Gender Champions (IGC)',
    type: 'Leadership Network',
    description:
      'International Gender Champions is a leadership network that brings together decision-makers committed to breaking down gender barriers. Through concrete commitments and collaborative action, the network helps leaders make gender equality a reality within their institutions and spheres of influence.',
    logo: '/images/logos/network/IGC.png',
    url: 'https://genderchampions.com/hub/geneva',
  },
  {
    key: 'partner-three',
    name: 'World Trade Organization (WTO)',
    type: 'Intergovernmental Organization',
    description:
      'The World Trade Organization (WTO) is the international organization responsible for the global rules of trade between nations. It provides a forum for negotiating trade agreements, resolving trade disputes, and supporting a predictable, open, and inclusive multilateral trading system.',
    logo: '/images/logos/network/wto.png',
    logoClass: 'partner-logo--large',
    url: 'https://www.wto.org/',
  },
]

const advisoryBoard = computed(() =>
  TeamService.normalizeMembers(advisoryBoardData).map((member, index) => ({
    ...member,
    institutionLogo: advisoryBoardData[index]?.institutionLogo,
  })),
)
const selectedAdvisorKey = ref(advisoryBoard.value[0]?.key || '')
const selectedAdvisor = computed(
  () =>
    advisoryBoard.value.find((member) => member.key === selectedAdvisorKey.value) ||
    advisoryBoard.value[0] ||
    {},
)

const selectAdvisor = (member) => {
  selectedAdvisorKey.value = member.key
}

const DEFAULT_ADVISOR_LOGO = '/images/logos/unibe.png'

const advisorInstitution = (member) =>
  member.university ||
  member.institution ||
  member.affiliation ||
  member.location ||
  'University of Bern'

const advisorInstitutionParts = (member) => {
  const value = advisorInstitution(member)
  const [name, ...placeParts] = value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)

  return {
    name: name || value,
    place: placeParts.join(', '),
  }
}

const advisorInstitutionName = (member) => advisorInstitutionParts(member).name
const advisorInstitutionPlace = (member) => advisorInstitutionParts(member).place

const advisorLogo = (member) =>
  member.institutionLogo || member.universityLogo || DEFAULT_ADVISOR_LOGO

const hasLinkedIn = (member) => Boolean(member.linkedin && member.linkedin !== '#')
const guardMissingLink = (event) => {
  if (!event.currentTarget.getAttribute('href')) event.preventDefault()
}

const initials = TeamService.initials
const mailto = TeamService.mailto
const portraitAlt = TeamService.portraitAlt
const emailAriaLabel = TeamService.emailAriaLabel
const linkedinAriaLabel = TeamService.linkedinAriaLabel
</script>
