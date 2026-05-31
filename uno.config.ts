import { defineConfig, presetWind, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetTypography(),
    presetIcons(),
  ],
  shortcuts: {
    'btn': 'rounded-xl font-medium transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-1.5 active:scale-95 hover:-translate-y-0.5 select-none',
    'btn-primary': 'btn px-5 py-2.5 bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/35 border-none',
    'btn-ghost': 'btn px-5 py-2.5 bg-[var(--bg-glass)] hover:bg-[var(--bg-glass-hover)] backdrop-blur-md border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-primary)] shadow-sm hover:shadow-md',
    'nav-icon-btn': 'btn w-9 h-9 rounded-xl bg-transparent hover:bg-[var(--bg-glass-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:shadow-md active:scale-95 hover:-translate-y-0.5 border-none',
    'nav-lang-btn': 'btn h-9 px-3 rounded-xl text-sm bg-transparent hover:bg-[var(--bg-glass-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:shadow-md active:scale-95 hover:-translate-y-0.5 border-none',
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
