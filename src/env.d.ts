
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vert?raw' {
  const value: string
  export default value
}

declare module '*.frag?raw' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}
