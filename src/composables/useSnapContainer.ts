import type { InjectionKey, App, Ref } from 'vue'
import { ref, provide } from 'vue'

export const SNAP_CONTAINER_KEY: InjectionKey<HTMLDivElement | null> = Symbol('snap-container')

const snapContainerRef = ref<HTMLDivElement | null>(null)

export function provideSnapContainer(app: App) {
  app.provide(SNAP_CONTAINER_KEY, snapContainerRef)
}

export function setSnapContainer(el: HTMLDivElement | null) {
  snapContainerRef.value = el
}
