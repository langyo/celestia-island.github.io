<template>
  <section ref="el" class="snap-section">
    <div class="section-inner">
      <div class="text-center max-w-3xl mx-auto">
        <div
          class="reveal hero-item"
          :class="{ 'is-visible': visible }"
        >
          <div class="text-6xl sm:text-8xl font-bold tracking-tight mb-4">
            <span class="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Celestia Island</span>
          </div>
        </div>

        <div
          class="reveal hero-item"
          :class="{ 'is-visible': visible }"
        >
          <p class="text-base max-w-xl mx-auto text-tertiary">{{ t('site.description') }}</p>
        </div>

        <div
          class="reveal hero-item"
          :class="{ 'is-visible': visible }"
        >
          <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="https://github.com/celestia-island" target="_blank" class="btn-ghost no-underline group">
              <span class="i-lucide-github w-4 h-4 mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity"></span> GitHub
            </a>
          </div>
        </div>

        <div
          class="reveal hero-item"
          :class="{ 'is-visible': visible }"
        >
          <div class="mt-10 animate-float opacity-20">
            <span class="i-lucide-chevrons-down inline-block w-6 h-6 text-primary"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'

const { t } = useI18n()
const { visible, triggerReveal } = useReveal()
const el = ref<HTMLElement>()

onMounted(() => {
  triggerReveal()
})

defineExpose({ el, triggerReveal })
</script>

<style scoped>
.hero-item:nth-child(1) { transition-delay: 0.1s; }
.hero-item:nth-child(2) { transition-delay: 0.25s; }
.hero-item:nth-child(3) { transition-delay: 0.4s; }
.hero-item:nth-child(4) { transition-delay: 0.55s; }
</style>
