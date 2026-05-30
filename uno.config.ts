import { defineConfig, presetWind, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetTypography(),
    presetIcons(),
  ],
  shortcuts: {
    'btn': 'px-6 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer inline-flex items-center gap-2',
    'btn-primary': 'btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25',
    'btn-ghost': 'btn hover:bg-[var(--bg-glass-hover)] transition-colors duration-200',
    'glass': 'backdrop-blur-xl bg-[var(--bg-glass)] border border-[var(--border-subtle)] rounded-2xl',
    'glass-card': 'glass p-6 transition-all duration-300 ease-out hover:bg-[var(--bg-glass-hover)] hover:border-[var(--border-hover)] hover:shadow-xl hover:shadow-[var(--shadow-card)]',
  },
  theme: {
    colors: {
      brand: {
        violet: '#8b5cf6',
        indigo: '#6366f1',
        cyan: '#06b6d4',
        pink: '#ec4899',
        amber: '#f59e0b',
      },
    },
  },
})
