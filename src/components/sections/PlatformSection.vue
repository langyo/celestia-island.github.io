<template>
  <section id="projects" class="snap-section" ref="el">
    <div class="section-inner">
      <div class="max-w-5xl mx-auto w-full">
        <div class="text-center mb-6 reveal" :class="{ 'is-visible': visible }">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
            <span class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {{ t('group.amphoreus') }}
            </span>
          </h2>
          <p class="text-xs sm:text-sm font-medium tracking-widest uppercase mt-2 text-tertiary">{{ t('group.platform') }}</p>
          <p class="text-sm mt-3 max-w-lg mx-auto text-secondary">{{ t('group.platformDesc') }}</p>
        </div>
        <div class="card-grid">
          <ProjectCard v-for="(p, i) in items" :key="p.id" :project="p"
            class="reveal" :class="{ 'is-visible': visible }"
            :style="{ transitionDelay: `${0.12 + i * 0.08}s` }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'
import { projects } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()
const { visible, triggerReveal } = useReveal()
const el = ref<HTMLElement>()

const items = projects.filter(p => ['entelecheia', 'shittim-chest', 'evernight', 'aris', 'kei'].includes(p.id))

defineExpose({ el, triggerReveal })
</script>
