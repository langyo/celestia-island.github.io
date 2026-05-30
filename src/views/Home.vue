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

    <!-- Page 2: Entelecheia + Shittim Chest (Core Platform) -->
    <section id="projects" class="snap-section" ref="projectsSection">
      <div class="h-full flex flex-col justify-center px-4 pt-16 pb-8 overflow-y-auto">
        <div class="max-w-5xl mx-auto w-full">
          <div class="text-center mb-8">
            <h2
              class="text-3xl sm:text-4xl font-bold mb-2 reveal"
              :class="{ 'is-visible': projectsVisible }"
            >
              <span class="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {{ t('site.nav.projects') }}
              </span>
            </h2>
            <p
              class="text-sm reveal"
              :class="{ 'is-visible': projectsVisible }"
              :style="{ color: 'var(--text-muted)', transitionDelay: '0.1s' }"
            >
              {{ projects.length }} core projects · All in Rust · Open source
            </p>
          </div>

          <!-- Group 1: Core Platform -->
          <div class="mb-10 reveal" :class="{ 'is-visible': projectsVisible }" style="transition-delay: 0.15s">
            <div class="flex items-center gap-2 mb-4 px-1">
              <span class="w-1.5 h-6 rounded-full bg-gradient-to-b from-violet-500 to-purple-600"></span>
              <h3 class="text-base font-semibold tracking-wide uppercase" :style="{ color: 'var(--text-secondary)' }">{{ t('group.platform') }}</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ProjectCard v-for="p in platformProjects" :key="p.id" :project="p" />
            </div>
          </div>

          <!-- Group 2: WASM / UI Framework -->
          <div class="mb-10 reveal" :class="{ 'is-visible': projectsVisible }" style="transition-delay: 0.25s">
            <div class="flex items-center gap-2 mb-4 px-1">
              <span class="w-1.5 h-6 rounded-full bg-gradient-to-b from-pink-500 to-rose-600"></span>
              <h3 class="text-base font-semibold tracking-wide uppercase" :style="{ color: 'var(--text-secondary)' }">{{ t('group.framework') }}</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ProjectCard v-for="p in frameworkProjects" :key="p.id" :project="p" />
            </div>
          </div>

          <!-- Group 3: Tools & Libraries -->
          <div class="reveal" :class="{ 'is-visible': projectsVisible }" style="transition-delay: 0.35s">
            <div class="flex items-center gap-2 mb-4 px-1">
              <span class="w-1.5 h-6 rounded-full bg-gradient-to-b from-emerald-500 to-teal-600"></span>
              <h3 class="text-base font-semibold tracking-wide uppercase" :style="{ color: 'var(--text-secondary)' }">{{ t('group.tools') }}</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ProjectCard v-for="p in toolProjects" :key="p.id" :project="p" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Page 3: About + Footer -->
    <section class="snap-start h-screen flex flex-col" ref="aboutSection">
      <div class="flex-1 flex items-center justify-center px-4">
        <div
          class="glass-card text-center p-10 max-w-3xl mx-auto reveal"
          :class="{ 'is-visible': aboutVisible }"
        >
          <div class="text-4xl mb-6 animate-glow">✦</div>
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {{ t('site.nav.about') }}
          </h2>
          <p class="leading-relaxed max-w-2xl mx-auto" :style="{ color: 'var(--text-secondary)' }">
            Celestia Island is a constellation of open-source Rust projects exploring the frontiers of multi-agent orchestration,
            WebAssembly component models, and zero-trust authentication.
            Each project is crafted with care, pushing the boundaries of what modern systems software can achieve.
          </p>
          <p class="mt-4 text-sm" :style="{ color: 'var(--text-muted)' }">
            All projects are in active preparation · <code class="text-violet-400/60">celestia.world</code>
          </p>
        </div>
      </div>

      <footer
        class="border-t backdrop-blur-md reveal"
        :class="{ 'is-visible': aboutVisible }"
        :style="{ borderColor: 'var(--border-subtle)', background: 'var(--footer-bg)', transitionDelay: '0.3s', height: '30vh' }"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-3 text-sm" :style="{ color: 'var(--text-muted)' }">
          <div class="flex items-center gap-3">
            <a href="https://github.com/celestia-island" target="_blank" class="transition-colors duration-200 no-underline" :style="{ color: 'var(--text-muted)' }"             @mouseenter="(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-secondary)' }" @mouseleave="(e) => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-muted)' }">
              <div class="i-lucide-github w-4 h-4" />
            </a>
            <span :style="{ color: 'var(--text-muted)' }">|</span>
            <span class="font-mono" :style="{ color: 'var(--text-tertiary)' }">{{ t('site.footer.domain') }}</span>
            <span :style="{ color: 'var(--text-muted)' }">|</span>
            <span class="font-mono" :style="{ color: 'var(--text-muted)' }">celestia-island.github.io</span>
          </div>
          <span>{{ t('site.footer.copyright') }}</span>
          <span class="text-xs" :style="{ color: 'var(--text-muted)', opacity: 0.6 }">{{ t('site.footer.icp') }}</span>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()

const snapContainer = ref<HTMLDivElement>()
const projectsSection = ref<HTMLElement>()
const aboutSection = ref<HTMLElement>()

const heroVisible = ref(false)
const projectsVisible = ref(false)
const aboutVisible = ref(false)

const platformProjects = computed(() => projects.filter(p => ['entelecheia', 'shittim-chest'].includes(p.id)))
const frameworkProjects = computed(() => projects.filter(p => ['tairitsu', 'hikari'].includes(p.id)))
const toolProjects = computed(() => projects.filter(p => ['aoba', 'kirino'].includes(p.id)))

const heroItems = computed(() => [
  `<div class="text-6xl sm:text-8xl font-bold tracking-tight mb-4"><span class="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Celestia Island</span></div>`,
  `<p class="text-xl sm:text-2xl font-light mb-2" style="color: var(--text-secondary)">${t('site.subtitle')}</p>`,
  `<p class="text-base max-w-xl mx-auto" style="color: var(--text-tertiary)">${t('site.description')}</p>`,
  `<div class="flex items-center justify-center gap-4 mt-8"><button class="btn-primary" onclick="document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})">${t('site.nav.projects')} <span class="i-lucide-chevron-down inline-block w-4 h-4"></span></button><a href="https://github.com/celestia-island" target="_blank" class="btn-ghost" style="color: var(--text-secondary)"><span class="i-lucide-github inline-block w-4 h-4"></span> GitHub</a></div>`,
  `<div class="mt-14 animate-float opacity-20"><span class="i-lucide-chevrons-down inline-block w-6 h-6" style="color: var(--text-primary)"></span></div>`,
])

let observer: IntersectionObserver

onMounted(() => {
  heroVisible.value = true

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      if (entry.target === projectsSection.value) projectsVisible.value = true
      if (entry.target === aboutSection.value) aboutVisible.value = true
    }
  }, { root: snapContainer.value, threshold: 0.25 })

  if (projectsSection.value) observer.observe(projectsSection.value)
  if (aboutSection.value) observer.observe(aboutSection.value)
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
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
