export interface Project {
  id: string
  name: string
  tagline: string
  taglineKey: string
  description: string
  descriptionKey: string
  techStack: string[]
  status: 'active' | 'stable' | 'research' | 'legacy'
  repo: string
  color: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'entelecheia',
    name: 'Entelecheia',
    tagline: 'Rust Multi-Agent Collaboration Platform',
    taglineKey: 'entelecheia.tagline',
    description: 'An exec-only microkernel design where the LLM sees only 3 tools, with 12+ agents invoked through ES module imports in an IEPL TypeScript layer. Features TUI, CLI, Cosmos/IEPL runtime, 60+ Rust crates.',
    descriptionKey: 'entelecheia.description',
    techStack: ['Rust', 'TypeScript', 'Axum', 'SeaORM', 'ratatui', 'Boa JS', 'MCP', 'pgvector'],
    status: 'active',
    repo: 'celestia-island/entelecheia',
    color: '#8b5cf6',
    icon: 'i-lucide-bot',
  },
  {
    id: 'shittim-chest',
    name: 'Shittim Chest',
    tagline: 'User-Facing Shell for Entelecheia',
    taglineKey: 'shittim.tagline',
    description: 'Arona (Chat UI with streaming, image generation, remote device viewer) & Plana (Admin panel with RBAC management), plus a Rust+Axum backend. Also scaffolds Tauri desktop & mobile apps and IDE plugins.',
    descriptionKey: 'shittim.description',
    techStack: ['Vue 3', 'TypeScript', 'Rust', 'Axum', 'Pinia', 'UnoCSS', 'Tauri 2', 'vue-i18n'],
    status: 'active',
    repo: 'celestia-island/shittim-chest',
    color: '#06b6d4',
    icon: 'i-lucide-message-square',
  },
  {
    id: 'tairitsu',
    name: 'Tairitsu',
    tagline: 'Full-Stack WASM Component Model Framework',
    taglineKey: 'tairitsu.tagline',
    description: 'A revolutionary Rust web framework targeting WASI (wasm32-wasip2) via the WebAssembly Component Model. Unifies browser & server rendering through WIT interfaces, with VDOM+hooks, SCSS macros, SVG sanitization, and SSR+streaming.',
    descriptionKey: 'tairitsu.description',
    techStack: ['Rust', 'WASI', 'WIT', 'VDOM', 'SSR', 'wasmtime', 'TypeScript', 'Wry/Tao'],
    status: 'active',
    repo: 'celestia-island/tairitsu',
    color: '#ec4899',
    icon: 'i-lucide-boxes',
  },
  {
    id: 'hikari',
    name: 'Hikari',
    tagline: 'The Frontend of Everything — WASI UI Framework',
    taglineKey: 'hikari.tagline',
    description: 'A Rust UI framework blending traditional Chinese aesthetics with futuristic sci-fi design. Features 40+ components, type-safe SCSS, glow effects, GSAP-inspired animation engine, 9-language i18n, and 660+ named colors.',
    descriptionKey: 'hikari.description',
    techStack: ['Rust', 'WASI', 'WIT', 'SCSS', 'Tairitsu vdom', 'VDOM + hooks'],
    status: 'active',
    repo: 'celestia-island/hikari',
    color: '#f59e0b',
    icon: 'i-lucide-palette',
  },
  {
    id: 'aoba',
    name: 'Aoba',
    tagline: 'Multi-Protocol Debugging & Simulation Tool',
    taglineKey: 'aoba.tagline',
    description: 'A Rust CLI/TUI tool for Modbus RTU debugging, supporting physical serial ports, network-forwarded ports, master/slave modes, virtual port creation, and HTTP/MQTT/IPC bridging. Provides a trait-based API for embedding.',
    descriptionKey: 'aoba.description',
    techStack: ['Rust', 'ratatui', 'tokio', 'serialport', 'Modbus RTU', 'CLI', 'TUI'],
    status: 'stable',
    repo: 'celestia-island/aoba',
    color: '#22c55e',
    icon: 'i-lucide-terminal',
  },
  {
    id: 'kirino',
    name: 'Kirino',
    tagline: 'Zero-Trust Authentication & RBAC Framework',
    taglineKey: 'kirino.tagline',
    description: 'A fully generic, trait-based auth library implementing ANSI INCITS 359-2004 RBAC (RBAC0/1/2) with role inheritance, SoD constraints, temporal constraints, and multi-credential support. Published on crates.io.',
    descriptionKey: 'kirino.description',
    techStack: ['Rust', 'Argon2', 'JWT', 'RBAC', 'SQL', 'Redis', 'crates.io'],
    status: 'stable',
    repo: 'celestia-island/kirino',
    color: '#ef4444',
    icon: 'i-lucide-shield-check',
  },
]
