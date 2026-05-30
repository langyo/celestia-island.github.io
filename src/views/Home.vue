<template>
  <div ref="snapContainer" class="snap-container">
    <!-- Page 1: Hero -->
    <section class="snap-section">
      <div class="h-full flex items-center justify-center px-4 pt-16">
        <div class="text-center max-w-3xl mx-auto">
          <div
            v-for="(item, i) in heroItems" :key="i"
            class="reveal"
            :class="{ 'is-visible': heroVisible }"
            :style="{ transitionDelay: `${0.1 + i * 0.15}s` }"
            v-html="item"
          />
        </div>
      </div>
    </section>

    <!-- Page 2: Projects -->
    <section id="projects" class="snap-section" ref="projectsSection">
      <div class="h-full flex flex-col justify-center px-4 pt-16 pb-8">
        <div class="max-w-7xl mx-auto w-full">
          <div class="text-center mb-10">
            <h2
              class="text-3xl sm:text-4xl font-bold mb-3 reveal"
              :class="{ 'is-visible': projectsVisible }"
            >
              <span class="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {{ t('site.nav.projects') }}
              </span>
            </h2>
            <p
              class="text-white/30 text-sm reveal"
              :class="{ 'is-visible': projectsVisible }"
              style="transition-delay: 0.1s"
            >
              {{ projects.length }} core projects · All in Rust · Open source
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="reveal"
              :class="{ 'is-visible': projectsVisible }"
              :style="{ transitionDelay: `${0.15 + index * 0.08}s` }"
            >
              <ProjectCard :project="project" />
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
          <p class="text-white/40 leading-relaxed max-w-2xl mx-auto">
            Celestia Island is a constellation of open-source Rust projects exploring the frontiers of multi-agent orchestration,
            WebAssembly component models, and zero-trust authentication.
            Each project is crafted with care, pushing the boundaries of what modern systems software can achieve.
          </p>
          <p class="text-white/20 mt-4 text-sm">
            All projects are in active preparation · <code class="text-violet-400/60">celestia.world</code>
          </p>
        </div>
      </div>

      <footer
        class="border-t border-white/5 backdrop-blur-md bg-black/30 reveal"
        :class="{ 'is-visible': aboutVisible }"
        style="transition-delay: 0.3s; height: 30vh"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center gap-3 text-white/40 text-sm">
          <div class="flex items-center gap-3">
            <a href="https://github.com/celestia-island" target="_blank" class="text-white/40 hover:text-white/70 transition-colors">
              <div class="i-lucide-github w-4 h-4" />
            </a>
            <span class="text-white/20">|</span>
            <span class="font-mono text-white/30">{{ t('site.footer.domain') }}</span>
            <span class="text-white/20">|</span>
            <span class="font-mono text-white/20">celestia-island.github.io</span>
          </div>
          <span>{{ t('site.footer.copyright') }}</span>
          <span class="text-white/15 text-xs">{{ t('site.footer.icp') }}</span>
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

const heroItems = computed(() => [
  `<div class="text-6xl sm:text-8xl font-bold tracking-tight mb-4"><span class="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Celestia Island</span></div>`,
  `<p class="text-xl sm:text-2xl text-white/40 font-light mb-2">${t('site.subtitle')}</p>`,
  `<p class="text-base text-white/25 max-w-xl mx-auto">${t('site.description')}</p>`,
  `<div class="flex items-center justify-center gap-4 mt-8"><button class="btn-primary" onclick="document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})">${t('site.nav.projects')} <span class="i-lucide-chevron-down inline-block w-4 h-4"></span></button><a href="https://github.com/celestia-island" target="_blank" class="btn-ghost"><span class="i-lucide-github inline-block w-4 h-4"></span> GitHub</a></div>`,
  `<div class="mt-14 animate-float opacity-20"><span class="i-lucide-chevrons-down inline-block w-6 h-6 text-white"></span></div>`,
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
  }, { root: snapContainer.value, threshold: 0.35 })

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
