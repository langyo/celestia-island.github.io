<template>
  <div ref="snapContainer" class="snap-container">
    <!-- Page 1: Hero -->
    <section class="snap-section">
      <div class="h-full flex items-center justify-center px-4 pt-16">
        <div class="text-center max-w-3xl mx-auto">
          <div
            v-for="(item, i) in heroItems"
            :key="i"
            class="reveal"
            :class="{ 'is-visible': heroVisible }"
            :style="{ transitionDelay: `${0.1 + i * 0.15}s` }"
            v-html="item"
          />
        </div>
      </div>
    </section>

    <!-- Page 2: Amphoreus — Core Platform -->
    <section id="projects" class="snap-section" ref="platformSection">
      <div class="h-full flex flex-col items-center justify-center px-4 pt-16 pb-8">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-6 reveal" :class="{ 'is-visible': platformVisible }">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
              <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {{ t('group.amphoreus') }}
              </span>
            </h2>
            <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2" :style="{ color: 'var(--text-tertiary)' }">{{ t('group.platform') }}</p>
            <p class="text-sm mt-3 max-w-lg mx-auto" :style="{ color: 'var(--text-secondary)' }">{{ t('group.platformDesc') }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard v-for="(p, i) in platformProjects" :key="p.id" :project="p"
              class="reveal" :class="{ 'is-visible': platformVisible }"
              :style="{ transitionDelay: `${0.12 + i * 0.08}s` }"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Page 3: Arcaea — Application Frameworks -->
    <section id="framework" class="snap-section" ref="frameworkSection">
      <div class="h-full flex flex-col items-center justify-center px-4 pt-16 pb-8">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-6 reveal" :class="{ 'is-visible': frameworkVisible }">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
              <span class="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                {{ t('group.arcaea') }}
              </span>
            </h2>
            <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2" :style="{ color: 'var(--text-tertiary)' }">{{ t('group.framework') }}</p>
            <p class="text-sm mt-3 max-w-lg mx-auto" :style="{ color: 'var(--text-secondary)' }">{{ t('group.frameworkDesc') }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard v-for="(p, i) in frameworkProjects" :key="p.id" :project="p"
              class="reveal" :class="{ 'is-visible': frameworkVisible }"
              :style="{ transitionDelay: `${0.12 + i * 0.08}s` }"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Page 4: Decagrammaton — Tools & Libraries -->
    <section id="tools" class="snap-section" ref="toolsSection">
      <div class="h-full flex flex-col items-center justify-center px-4 pt-16 pb-8">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-6 reveal" :class="{ 'is-visible': toolsVisible }">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
              <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {{ t('group.decagrammaton') }}
              </span>
            </h2>
            <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2" :style="{ color: 'var(--text-tertiary)' }">{{ t('group.tools') }}</p>
            <p class="text-sm mt-3 max-w-lg mx-auto" :style="{ color: 'var(--text-secondary)' }">{{ t('group.toolsDesc') }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard v-for="(p, i) in toolProjects" :key="p.id" :project="p"
              class="reveal" :class="{ 'is-visible': toolsVisible }"
              :style="{ transitionDelay: `${0.12 + i * 0.08}s` }"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Page 5: About + Footer -->
    <section id="about" class="snap-start min-h-screen flex flex-col" ref="aboutSection">
      <div class="flex-1 flex items-center justify-center px-4 py-8">
        <div
          class="glass-card text-center p-6 sm:p-8 max-w-3xl mx-auto reveal"
          :class="{ 'is-visible': aboutVisible }"
        >
          <div class="mb-4 flex justify-center">
            <img
              :src="celestiaLogo"
              alt="Celestia Island Logo"
              class="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-2xl animate-glow"
              draggable="false"
            />
          </div>
          <h2 class="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {{ t('site.nav.about') }}
          </h2>
          <div
            class="leading-relaxed max-w-2xl mx-auto about-content prose prose-zinc dark:prose-invert"
            :style="{ color: 'var(--text-secondary)' }"
            v-html="renderedAboutText"
          ></div>
        </div>
      </div>

      <footer
        class="border-t backdrop-blur-md reveal py-6"
        :class="{ 'is-visible': aboutVisible }"
        :style="{ borderColor: 'var(--border-subtle)', background: 'var(--footer-bg)', transitionDelay: '0.3s' }"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-3 text-sm" :style="{ color: 'var(--text-muted)' }">
          <a href="https://github.com/celestia-island" target="_blank" class="nav-icon-btn no-underline group" title="GitHub">
            <div class="i-lucide-github w-5 h-5 group-hover:text-[var(--text-primary)] transition-colors" />
          </a>
          <span class="text-lg font-bold tracking-wider" :style="{ color: 'var(--text-tertiary)' }">
            「{{ t('site.slogan') }}」
          </span>
          <span>{{ t('site.footer.copyright', { year: new Date().getFullYear() }) }}</span>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import { projects } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'
import celestiaLogo from '@res/logos/celestia.webp'

const aboutDocs = import.meta.glob('../../docs/**/about.md', { query: '?raw', import: 'default', eager: true })

const { t, locale } = useI18n()

const renderedAboutText = computed(() => {
  const currentLang = locale.value
  const fallbackLang = 'en'
  const docPath = `../../docs/${currentLang}/about.md`
  const fallbackPath = `../../docs/${fallbackLang}/about.md`

  const mdContent = (aboutDocs[docPath] as string) || (aboutDocs[fallbackPath] as string) || ''
  return marked.parse(mdContent)
})

const snapContainer = ref<HTMLDivElement>()
const platformSection = ref<HTMLElement>()
const frameworkSection = ref<HTMLElement>()
const toolsSection = ref<HTMLElement>()
const aboutSection = ref<HTMLElement>()

const heroVisible = ref(false)
const platformVisible = ref(false)
const frameworkVisible = ref(false)
const toolsVisible = ref(false)
const aboutVisible = ref(false)

const platformProjects = computed(() => projects.filter(p => ['entelecheia', 'shittim-chest'].includes(p.id)))
const frameworkProjects = computed(() => projects.filter(p => ['tairitsu', 'hikari'].includes(p.id)))
const toolProjects = computed(() => projects.filter(p => ['aoba', 'kirino'].includes(p.id)))

const heroItems = computed(() => [
  `<div class="text-6xl sm:text-8xl font-bold tracking-tight mb-4"><span class="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Celestia Island</span></div>`,
  `<p class="text-base max-w-xl mx-auto" style="color: var(--text-tertiary)">${t('site.description')}</p>`,
  `<div class="flex flex-wrap items-center justify-center gap-4 mt-8"><button class="btn-primary" onclick="document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})">${t('site.nav.projects')} <span class="i-lucide-chevron-down w-4 h-4 ml-1"></span></button><a href="https://github.com/celestia-island" target="_blank" class="btn-ghost no-underline group"><span class="i-lucide-github w-4 h-4 mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity"></span> GitHub</a></div>`,
  `<div class="mt-10 animate-float opacity-20"><span class="i-lucide-chevrons-down inline-block w-6 h-6" style="color: var(--text-primary)"></span></div>`,
])

let observer: IntersectionObserver

onMounted(() => {
  heroVisible.value = true

  const sectionMap: Record<string, () => void> = {}
  if (platformSection.value) sectionMap[platformSection.value.id || 'platform'] = () => { platformVisible.value = true }
  if (frameworkSection.value) sectionMap[frameworkSection.value.id || 'framework'] = () => { frameworkVisible.value = true }
  if (toolsSection.value) sectionMap[toolsSection.value.id || 'tools'] = () => { toolsVisible.value = true }
  if (aboutSection.value) sectionMap[aboutSection.value.id || 'about'] = () => { aboutVisible.value = true }

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const fn = sectionMap[entry.target.id]
      if (fn) fn()
    }
  }, { root: snapContainer.value, threshold: 0.25 })

  for (const el of [platformSection.value, frameworkSection.value, toolsSection.value, aboutSection.value]) {
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.snap-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.snap-section {
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
}

.reveal {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.about-content {
  font-size: 1.125rem;
  line-height: 1.75;
  text-align: center;
}
.about-content :deep(p) {
  margin-bottom: 1.2em;
  color: var(--text-secondary);
}
.about-content :deep(p:last-child) {
  margin-bottom: 0;
}
.about-content :deep(a) {
  color: var(--text-primary);
  text-decoration: underline;
  text-decoration-color: var(--border-subtle);
  text-underline-offset: 4px;
  transition: all 0.3s ease;
}
.about-content :deep(a:hover) {
  color: #a78bfa;
  text-decoration-color: #a78bfa;
}
.about-content :deep(strong) {
  color: var(--text-primary);
  font-weight: 600;
}
</style>
