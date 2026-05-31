<template>
  <div ref="snapContainer" class="snap-container">
    <!-- Page 1: Hero -->
    <section ref="heroSection" class="snap-section">
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
      <div class="h-full flex flex-col items-center justify-center px-4 pt-16 pb-8 -mt-16">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-6 reveal" :class="{ 'is-visible': platformVisible }">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
              <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {{ t('group.amphoreus') }}
              </span>
            </h2>
            <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2 text-tertiary">{{ t('group.platform') }}</p>
            <p class="text-sm mt-3 max-w-lg mx-auto text-secondary">{{ t('group.platformDesc') }}</p>
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
      <div class="h-full flex flex-col items-center justify-center px-4 pt-16 pb-8 -mt-16">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-6 reveal" :class="{ 'is-visible': frameworkVisible }">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
              <span class="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                {{ t('group.arcaea') }}
              </span>
            </h2>
            <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2 text-tertiary">{{ t('group.framework') }}</p>
            <p class="text-sm mt-3 max-w-lg mx-auto text-secondary">{{ t('group.frameworkDesc') }}</p>
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
      <div class="h-full flex flex-col items-center justify-center px-4 pt-16 pb-8 -mt-16">
        <div class="max-w-6xl mx-auto w-full">
          <div class="text-center mb-6 reveal" :class="{ 'is-visible': toolsVisible }">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
              <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {{ t('group.decagrammaton') }}
              </span>
            </h2>
            <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2 text-tertiary">{{ t('group.tools') }}</p>
            <p class="text-sm mt-3 max-w-lg mx-auto text-secondary">{{ t('group.toolsDesc') }}</p>
          </div>
          <div class="tools-scroll-outer">
            <button
              class="tools-scroll-arrow tools-scroll-arrow-left"
              :class="{ 'is-hidden': !toolsCanScrollLeft }"
              @click="scrollToolsBy(-1)"
              aria-label="Scroll left"
            >
              <div class="i-lucide-chevron-left w-5 h-5" />
            </button>
            <div class="tools-scroll-container" ref="toolsScrollRef" @wheel.prevent="onToolsWheel">
              <div class="tools-scroll-track">
                <div
                  v-for="(p, i) in toolProjects"
                  :key="p.id"
                  class="tool-card-wrapper reveal"
                  :class="{ 'is-visible': toolsVisible }"
                  :style="{ width: toolsCardWidth, minWidth: toolsCardWidth, transitionDelay: `${0.08 + i * 0.06}s` }"
                >
                  <ProjectCard :project="p" />
                </div>
              </div>
            </div>
            <button
              class="tools-scroll-arrow tools-scroll-arrow-right"
              :class="{ 'is-hidden': !toolsCanScrollRight }"
              @click="scrollToolsBy(1)"
              aria-label="Scroll right"
            >
              <div class="i-lucide-chevron-right w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Page 5: About + Footer -->
    <section id="about" class="snap-start min-h-screen flex flex-col" ref="aboutSection">
      <div class="flex-1 flex items-center justify-center px-4 py-8">
        <div
          class="glass-card-static text-center p-5 sm:p-6 max-w-xl mx-auto reveal"
          :class="{ 'is-visible': aboutVisible }"
        >
          <div class="mb-2 flex justify-center">
            <img
              :src="celestiaLogo"
              alt="Celestia Island Logo"
              class="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl animate-glow"
              draggable="false"
            />
          </div>
          <div
            class="about-text leading-normal max-w-lg mx-auto about-content prose prose-sm prose-zinc dark:prose-invert text-secondary"
            v-html="renderedAboutText"
          ></div>
        </div>
      </div>

      <footer
        class="border-t backdrop-blur-md reveal py-6 border-subtle bg-footer delay-300"
        :class="{ 'is-visible': aboutVisible }"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-3 text-sm text-muted">
          <a href="https://github.com/celestia-island" target="_blank" class="nav-icon-btn no-underline group" title="GitHub">
            <div class="i-lucide-github w-5 h-5 group-hover:text-[var(--text-primary)] transition-colors" />
          </a>
          <span class="text-tertiary">
            「{{ t('site.slogan') }}」
          </span>
          <span>{{ t('site.footer.copyright', { year: new Date().getFullYear() }) }}</span>
        </div>
      </footer>
    </section>
  </div>

  <!-- Scroll Indicator -->
  <nav class="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
    <button
      v-for="i in 5"
      :key="i"
      class="w-1 rounded-full transition-all duration-300 cursor-pointer border-none p-0"
      :style="{
        height: currentPage === i - 1 ? '2rem' : '1.5rem',
        background: currentPage === i - 1 ? '#a78bfa' : 'var(--text-muted)',
      }"
      :title="pageLabels[i - 1]"
      @click="scrollToPage(i - 1)"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
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
const heroSection = ref<HTMLElement>()
const platformSection = ref<HTMLElement>()
const frameworkSection = ref<HTMLElement>()
const toolsSection = ref<HTMLElement>()
const aboutSection = ref<HTMLElement>()

const currentPage = ref(0)

const pageLabels = computed(() => [
  t('site.nav.home'),
  t('group.amphoreus'),
  t('group.arcaea'),
  t('group.decagrammaton'),
  t('site.nav.about'),
])

const sections = computed(() => [
  heroSection.value,
  platformSection.value,
  frameworkSection.value,
  toolsSection.value,
  aboutSection.value,
])

function scrollToPage(index: number) {
  const el = sections.value[index]
  if (el) snapContainer.value?.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}

const heroVisible = ref(false)
const platformVisible = ref(false)
const frameworkVisible = ref(false)
const toolsVisible = ref(false)
const aboutVisible = ref(false)

const platformProjects = computed(() => projects.filter(p => ['entelecheia', 'shittim-chest'].includes(p.id)))
const frameworkProjects = computed(() => projects.filter(p => ['tairitsu', 'hikari'].includes(p.id)))
const toolProjects = computed(() => projects.filter(p => ['aoba', 'kirino', 'ratatui-markdown', 'yuuka', 'ichika', 'hifumi', 'noa'].includes(p.id)))

const toolsScrollRef = ref<HTMLDivElement>()
const toolsCanScrollLeft = ref(false)
const toolsCanScrollRight = ref(false)
const toolsCardWidth = ref('280px')

function updateToolsCardWidth() {
  const el = toolsScrollRef.value
  if (!el) return
  const gap = 16
  const visible = 3.2
  const w = (el.clientWidth - Math.ceil(visible - 1) * gap) / visible
  toolsCardWidth.value = `${w}px`
}

function updateToolsScrollState() {
  const el = toolsScrollRef.value
  if (!el) return
  toolsCanScrollLeft.value = el.scrollLeft > 2
  toolsCanScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 2
}

function scrollToolsBy(direction: number) {
  const el = toolsScrollRef.value
  if (!el) return
  el.scrollBy({ left: direction * parseFloat(toolsCardWidth.value) * 1.1, behavior: 'smooth' })
}

function onToolsWheel(e: WheelEvent) {
  const el = toolsScrollRef.value
  if (!el) return
  el.scrollBy({ left: e.deltaY || e.deltaX, behavior: 'smooth' })
  requestAnimationFrame(updateToolsScrollState)
}

const heroItems = computed(() => [
  `<div class="text-6xl sm:text-8xl font-bold tracking-tight mb-4"><span class="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Celestia Island</span></div>`,
  `<p class="text-base max-w-xl mx-auto" style="color: var(--text-tertiary)">${t('site.description')}</p>`,
  `<div class="flex flex-wrap items-center justify-center gap-4 mt-8"><a href="https://github.com/celestia-island" target="_blank" class="btn-ghost no-underline group"><span class="i-lucide-github w-4 h-4 mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity"></span> GitHub</a></div>`,
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
      if (entry.isIntersecting) {
        const fn = sectionMap[entry.target.id]
        if (fn) fn()
        const idx = sections.value.indexOf(entry.target as HTMLElement)
        if (idx !== -1) currentPage.value = idx
      }
    }
  }, { root: snapContainer.value, threshold: 0.25 })

  for (const el of sections.value) {
    if (el) observer.observe(el)
  }

  nextTick(() => {
    updateToolsCardWidth()
    updateToolsScrollState()
    toolsScrollRef.value?.addEventListener('scroll', updateToolsScrollState, { passive: true })
    window.addEventListener('resize', onToolsResize)
  })
})

function onToolsResize() {
  updateToolsCardWidth()
  updateToolsScrollState()
}

onBeforeUnmount(() => {
  observer?.disconnect()
  toolsScrollRef.value?.removeEventListener('scroll', updateToolsScrollState)
  window.removeEventListener('resize', onToolsResize)
})
</script>

<style scoped>
.snap-container {
  position: relative;
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

.about-text {
  font-size: 0.8125rem;
}

.delay-300 {
  transition-delay: 0.3s;
}

.tools-scroll-outer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tools-scroll-arrow {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
}
.tools-scroll-arrow:hover {
  color: var(--text-primary);
  border-color: var(--text-secondary);
}
.tools-scroll-arrow.is-hidden {
  opacity: 0;
  pointer-events: none;
}

.tools-scroll-container {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex: 1;
  min-width: 0;
}

.tools-scroll-container::-webkit-scrollbar {
  display: none;
}

.tools-scroll-track {
  display: flex;
  gap: 16px;
  width: max-content;
}

.tool-card-wrapper {
  flex-shrink: 0;
}
</style>
