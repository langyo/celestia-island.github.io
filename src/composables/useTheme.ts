import { ref, onMounted } from 'vue'

type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')
const listeners: Array<(t: Theme) => void> = []

export function useTheme() {
  const isDark = () => typeof window !== 'undefined' && document.documentElement.classList.contains('dark')

  function apply(t: Theme) {
    document.documentElement.classList.toggle('dark', t === 'dark')
    document.documentElement.setAttribute('data-theme', t)
    try { localStorage.setItem('celestia-theme', t) } catch { /* quota / private-browsing */ }
  }

  function setTheme(t: Theme) {
    theme.value = t
    apply(t)
    listeners.forEach(fn => fn(t))
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  function onChange(fn: (t: Theme) => void) {
    listeners.push(fn)
  }

  onMounted(() => {
    let stored: Theme | null = null
    try { stored = localStorage.getItem('celestia-theme') as Theme | null } catch { /* guard */ }
    if (stored) {
      theme.value = stored
      apply(stored)
    } else {
      apply('dark')
    }
  })

  return { theme, isDark, setTheme, toggleTheme, onChange }
}
