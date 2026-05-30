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
    'btn-ghost': 'btn text-white/70 hover:text-white hover:bg-white/10',
    'glass': 'backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl',
    'glass-card': 'glass p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10',
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
