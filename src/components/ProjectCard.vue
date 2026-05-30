<template>
  <div
    class="glass-card group cursor-pointer"
    :style="{ '--card-color': project.color }"
  >
    <div class="flex items-start gap-4 mb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        :style="{ background: `${project.color}15`, color: project.color }"
      >
        <div :class="`${project.icon} w-6 h-6`" />
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-lg font-semibold text-white mb-1 truncate">{{ project.name }}</h3>
        <p class="text-sm font-medium" :style="{ color: project.color }">
          {{ t(project.taglineKey) || project.tagline }}
        </p>
      </div>
    </div>

    <p class="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
      {{ t(project.descriptionKey, { en: project.description }) }}
    </p>

    <div class="flex flex-wrap gap-1.5 mb-4">
      <span
        v-for="tech in project.techStack"
        :key="tech"
        class="px-2 py-0.5 rounded-md text-xs font-medium"
        :style="{
          background: `${project.color}10`,
          color: project.color,
          border: `1px solid ${project.color}20`,
        }"
      >
        {{ tech }}
      </span>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-white/5">
      <span
        class="text-xs px-2 py-0.5 rounded-full"
        :style="{
          background: statusBg,
          color: statusColor,
        }"
      >
        {{ t(`site.status.${project.status}`) }}
      </span>
      <a
        :href="`https://github.com/${project.repo}`"
        target="_blank"
        class="text-white/30 hover:text-white/70 transition-colors text-sm flex items-center gap-1 no-underline"
      >
        <div class="i-lucide-external-link w-3.5 h-3.5" />
        GitHub
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types/project'

const props = defineProps<{
  project: Project
}>()

const { t } = useI18n()

const statusMap: Record<string, { bg: string; color: string }> = {
  active: { bg: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' },
  stable: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
  research: { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' },
  legacy: { bg: 'rgba(156, 163, 175, 0.1)', color: '#9ca3af' },
}

const statusStyle = computed(() => statusMap[props.project.status] || statusMap.stable)
const statusBg = computed(() => statusStyle.value.bg)
const statusColor = computed(() => statusStyle.value.color)
</script>
