<template>
  <section id="tools" class="snap-section" ref="el">
    <div class="section-inner">
      <div class="max-w-6xl mx-auto w-full">
        <div class="text-center mb-6 reveal" :class="{ 'is-visible': visible }">
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
            :class="{ 'is-hidden': !canScrollLeft }"
            @click="scrollBy(-1)"
            aria-label="Scroll left"
          >
            <div class="i-lucide-chevron-left w-5 h-5" />
          </button>
          <div class="tools-scroll-container" ref="scrollRef" @wheel="onWheel">
            <div class="tools-scroll-track">
              <div
                v-for="(p, i) in items"
                :key="p.id"
                class="tool-card-wrapper reveal"
                :class="{ 'is-visible': visible }"
                :style="{ width: cardWidth, minWidth: cardWidth, transitionDelay: `${0.08 + i * 0.06}s` }"
              >
                <ProjectCard :project="p" />
              </div>
            </div>
          </div>
          <button
            class="tools-scroll-arrow tools-scroll-arrow-right"
            :class="{ 'is-hidden': !canScrollRight }"
            @click="scrollBy(1)"
            aria-label="Scroll right"
          >
            <div class="i-lucide-chevron-right w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useReveal'
import { projects } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()
const { visible, triggerReveal } = useReveal()
const el = ref<HTMLElement>()

const items = projects.filter(p => ['aoba', 'kirino', 'ratatui-markdown', 'yuuka', 'ichika', 'hifumi', 'noa'].includes(p.id))

const scrollRef = ref<HTMLDivElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const cardWidth = ref('280px')

function updateCardWidth() {
  const el = scrollRef.value
  if (!el) return
  const gap = 16
  const isMobile = window.innerWidth < 640
  const visibleCount = isMobile ? 1.2 : 3.2
  const w = (el.clientWidth - Math.ceil(visibleCount - 1) * gap) / visibleCount
  cardWidth.value = `${w}px`
}

function updateScrollState() {
  const el = scrollRef.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 2
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 2
}

function scrollBy(direction: number) {
  const el = scrollRef.value
  if (!el) return
  el.scrollBy({ left: direction * parseFloat(cardWidth.value) * 1.1, behavior: 'smooth' })
}

let _wheelAccum = 0
let _wheelRaf = 0

function onWheel(e: WheelEvent) {
  const el = scrollRef.value
  if (!el) return

  const delta = e.deltaY || e.deltaX
  if (delta === 0) return

  const atStart = el.scrollLeft <= 0 && delta < 0
  const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && delta > 0

  if (atStart || atEnd) {
    _wheelAccum = 0
    return
  }

  e.preventDefault()

  _wheelAccum += delta

  if (!_wheelRaf) {
    _wheelRaf = requestAnimationFrame(function step() {
      if (Math.abs(_wheelAccum) < 0.5) {
        _wheelRaf = 0
        updateScrollState()
        return
      }
      const consume = _wheelAccum * 0.25
      _wheelAccum -= consume
      el.scrollLeft += consume
      _wheelRaf = requestAnimationFrame(step)
    })
  }
}

function onResize() {
  updateCardWidth()
  updateScrollState()
}

onMounted(() => {
  nextTick(() => {
    updateCardWidth()
    updateScrollState()
    scrollRef.value?.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', onResize)
  })
})

onBeforeUnmount(() => {
  scrollRef.value?.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('resize', onResize)
  if (_wheelRaf) cancelAnimationFrame(_wheelRaf)
})

defineExpose({ el, triggerReveal })
</script>

<style scoped>
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
  overscroll-behavior-x: contain;
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
  height: 280px;
}

.tool-card-wrapper :deep(> *) {
  height: 100%;
}

@media (max-width: 639px) {
  .tools-scroll-arrow {
    display: none;
  }

  .tools-scroll-track {
    gap: 12px;
  }

  .tool-card-wrapper {
    height: 220px;
  }
}

@media (max-width: 639px) and (max-height: 500px) {
  .tool-card-wrapper {
    height: min(180px, 50dvh);
  }
}
</style>
