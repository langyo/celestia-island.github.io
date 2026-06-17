<template>
  <div ref="snapContainer" class="snap-container">
    <HeroSection ref="heroRef" />
    <PlatformSection ref="platformRef" />
    <FrameworkSection ref="frameworkRef" />
    <ToolsSection ref="toolsRef" />
    <AboutSection ref="aboutRef" />
  </div>

  <nav class="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3" role="navigation" :aria-label="t('site.nav.home')">
    <button
      v-for="i in 5"
      :key="i"
      class="w-1 rounded-full transition-all duration-300 cursor-pointer border-none p-0"
      :style="{
        height: currentPage === i - 1 ? '2rem' : '1.5rem',
        background: currentPage === i - 1 ? '#a78bfa' : 'var(--text-muted)',
      }"
      :title="pageLabels[i - 1]"
      :aria-label="pageLabels[i - 1]"
      @click="scrollToPage(i - 1)"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { setSnapContainer } from '@/composables/useSnapContainer'
import HeroSection from '@/components/sections/HeroSection.vue'
import PlatformSection from '@/components/sections/PlatformSection.vue'
import FrameworkSection from '@/components/sections/FrameworkSection.vue'
import ToolsSection from '@/components/sections/ToolsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'

import '@/assets/styles/snap.scss'

const { t } = useI18n()

const snapContainer = ref<HTMLDivElement>()
const heroRef = ref<InstanceType<typeof HeroSection>>()
const platformRef = ref<InstanceType<typeof PlatformSection>>()
const frameworkRef = ref<InstanceType<typeof FrameworkSection>>()
const toolsRef = ref<InstanceType<typeof ToolsSection>>()
const aboutRef = ref<InstanceType<typeof AboutSection>>()

const currentPage = ref(0)

const pageLabels = computed(() => [
  t('site.nav.home'),
  t('group.amphoreus'),
  t('group.arcaea'),
  t('group.decagrammaton'),
  t('site.nav.about'),
])

const sectionRefs = computed(() => [
  heroRef.value?.$el as HTMLElement | undefined,
  platformRef.value?.$el as HTMLElement | undefined,
  frameworkRef.value?.$el as HTMLElement | undefined,
  toolsRef.value?.$el as HTMLElement | undefined,
  aboutRef.value?.$el as HTMLElement | undefined,
])

const sectionTriggers = computed(() => [
  null,
  platformRef.value?.triggerReveal,
  frameworkRef.value?.triggerReveal,
  toolsRef.value?.triggerReveal,
  aboutRef.value?.triggerReveal,
])

function scrollToPage(index: number) {
  const el = sectionRefs.value[index]
  if (el) snapContainer.value?.scrollTo({ top: (el as HTMLElement).offsetTop, behavior: 'smooth' })
}

let observer: IntersectionObserver

onMounted(() => {
  setSnapContainer(snapContainer.value ?? null)

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const idx = sectionRefs.value.indexOf(entry.target as HTMLElement)
        if (idx !== -1) {
          currentPage.value = idx
          const trigger = sectionTriggers.value[idx]
          if (trigger) trigger()
        }
      }
    }
  }, { root: snapContainer.value, threshold: 0.25 })

  for (const el of sectionRefs.value) {
    if (el) observer.observe(el as HTMLElement)
  }
})

onBeforeUnmount(() => {
  setSnapContainer(null)
  observer?.disconnect()
})
</script>
