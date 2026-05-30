<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--border-subtle)]" :style="{ background: 'var(--nav-bg)' }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="flex items-center gap-3 no-underline group" :style="{ color: 'var(--text-primary)' }" @click.prevent="scrollToTop">
          <img :src="celestiaLogo" alt="Celestia Island" class="w-8 h-8 object-contain rounded-lg animate-glow" draggable="false" />
          <span class="text-lg font-semibold tracking-wide bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {{ t('site.title') }}
          </span>
        </a>

        <div class="flex items-center gap-2">
          <a href="https://github.com/celestia-island" target="_blank" class="btn-ghost text-sm" :style="{ color: 'var(--text-secondary)' }">
            <div class="i-lucide-github w-4 h-4" />
            GitHub
          </a>

          <button @click="toggleTheme" class="btn-ghost text-sm px-2.5 rounded-lg hover:bg-[var(--bg-secondary)]" :style="{ color: 'var(--text-secondary)' }" :title="theme === 'dark' ? 'Light mode' : 'Dark mode'">
            <div v-if="theme === 'dark'" class="i-lucide-sun w-4 h-4" />
            <div v-else class="i-lucide-moon w-4 h-4" />
          </button>

          <div class="relative ml-1">
            <button @click.stop="showLangMenu = !showLangMenu" class="btn-ghost text-sm px-3" :style="{ color: 'var(--text-secondary)' }">
              <div class="i-lucide-globe w-4 h-4" />
              <span class="hidden sm:inline ml-1">{{ currentLangLabel }}</span>
            </button>
            <transition name="fade">
              <div
                v-if="showLangMenu"
                class="absolute right-0 top-full mt-2 glass p-2 rounded-xl min-w-36 shadow-xl z-50"
                style="background: var(--bg-glass); border-color: var(--border-subtle);"
              >
                <button
                  v-for="lang in langs"
                  :key="lang.code"
                  @click="switchLang(lang.code)"
                  class="w-full text-left px-4 py-2 rounded-lg text-sm transition-colors duration-150 hover:bg-[var(--bg-glass-hover)]"
                  :class="{ 'text-violet-400 bg-[var(--bg-secondary)]': locale === lang.code }"
                  :style="{ color: locale === lang.code ? '' : 'var(--text-secondary)' }"
                >
                  {{ lang.label }}
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import celestiaLogo from '@res/logos/celestia.webp'

const { t, locale } = useI18n()
const { theme, toggleTheme } = useTheme()
const showLangMenu = ref(false)

const langs = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
]

const currentLangLabel = computed(() => {
  const l = langs.find(l => l.code === locale.value)
  return l?.label ?? 'English'
})

function switchLang(code: string) {
  locale.value = code
  localStorage.setItem('celestia-locale', code)
  showLangMenu.value = false
}

function getSnapContainer(): HTMLDivElement | null {
  return document.querySelector('.snap-container')
}

function scrollToTop() {
  getSnapContainer()?.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToProjects() {
  const el = document.querySelector('#projects')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function onClickOutside(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('.relative')) {
    showLangMenu.value = false
  }
}

onMounted(() => window.addEventListener('click', onClickOutside))
onBeforeUnmount(() => window.removeEventListener('click', onClickOutside))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
