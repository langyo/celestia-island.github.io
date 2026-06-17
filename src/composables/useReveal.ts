import { ref } from 'vue'

export function useReveal() {
  const visible = ref(false)

  function triggerReveal() {
    visible.value = true
  }

  return { visible, triggerReveal }
}
