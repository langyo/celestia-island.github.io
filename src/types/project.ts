export interface Project {
  id: string
  name: string
  nameKey: string
  shortLabel: string
  shortLabelKey: string
  tagline: string
  taglineKey: string
  description: string
  descriptionKey: string
  techStack: string[]
  status: 'active' | 'stable' | 'research' | 'legacy' | 'preview'
  repo: string
  color: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'entelecheia',
    name: 'Entelecheia',
    nameKey: 'entelecheia.name',
    shortLabel: 'Multi-Agent Platform',
    shortLabelKey: 'entelecheia.shortLabel',
    tagline: 'Multi-Agent Collaboration Platform',
    taglineKey: 'entelecheia.tagline',
    description: 'Assemble teams of AI agents that divide tasks, collaborate, and deliver results. Harness engineering in practice — constrain agents to their domains, and they excel. From research and analysis to code generation and workflow automation — describe your goal, and specialized agents work together to achieve it.',
    descriptionKey: 'entelecheia.description',
    techStack: ['Rust', 'TypeScript', 'Axum', 'SeaORM', 'ratatui', 'Boa JS', 'MCP', 'pgvector'],
    status: 'preview',
    repo: 'celestia-island/entelecheia',
    color: '#8b5cf6',
    icon: 'i-lucide-bot',
  },
  {
    id: 'shittim-chest',
    name: 'Shittim Chest',
    nameKey: 'shittim.name',
    shortLabel: 'Agent Chat & Control Panel',
    shortLabelKey: 'shittim.shortLabel',
    tagline: 'Chat With Your AI Agents',
    taglineKey: 'shittim.tagline',
    description: 'The interactive face of Entelecheia — a streaming chat interface to converse with AI agents, a control panel to configure systems and manage permissions, plus desktop and mobile apps. Everything the user sees and touches.',
    descriptionKey: 'shittim.description',
    techStack: ['Vue 3', 'TypeScript', 'Rust', 'Axum', 'Pinia', 'UnoCSS', 'Tauri 2', 'vue-i18n'],
    status: 'preview',
    repo: 'celestia-island/shittim-chest',
    color: '#06b6d4',
    icon: 'i-lucide-message-square',
  },
  {
    id: 'tairitsu',
    name: 'Tairitsu',
    nameKey: 'tairitsu.name',
    shortLabel: 'WASI Full-Stack Framework',
    shortLabelKey: 'tairitsu.shortLabel',
    tagline: 'Full-Stack, WASI-Native',
    taglineKey: 'tairitsu.tagline',
    description: 'Build complete web applications that target WASI — a single, portable runtime for both frontend and backend. Write your UI and server logic in Rust, compile to WASI components, and deploy to browser, server, or edge. One runtime, one language, one codebase.',
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
    nameKey: 'hikari.name',
    shortLabel: 'WASI UI Component Library',
    shortLabelKey: 'hikari.shortLabel',
    tagline: 'WASI-Native UI Framework',
    taglineKey: 'hikari.tagline',
    description: 'A UI component library purpose-built for WASI. Polished, ready-made components that run on the same WASI runtime as your backend — no wasm-bindgen, no JavaScript glue. Build interfaces once, render them anywhere.',
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
    nameKey: 'aoba.name',
    shortLabel: 'Modbus Debugging Tool',
    shortLabelKey: 'aoba.shortLabel',
    tagline: 'Industrial Protocol Debugging, Made Effortless',
    taglineKey: 'aoba.tagline',
    description: 'Inspect, test, and simulate Modbus industrial devices right from your terminal. Connect to real hardware, spin up virtual devices for testing, and bridge data between protocols — an indispensable companion for automation engineers on the factory floor and in CI pipelines.',
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
    nameKey: 'kirino.name',
    shortLabel: 'RBAC Library',
    shortLabelKey: 'kirino.shortLabel',
    tagline: 'Production-Grade RBAC, Constrained by Design',
    taglineKey: 'kirino.tagline',
    description: 'An ambitious attempt to bring ANSI INCITS 359-2004 RBAC — with its full constraint apparatus: separation of duties, cardinality enforcement, temporal bounds, and role hierarchies — into a reusable Rust library. Not just who can do what, but under what conditions. Real-world authorization, made composable.',
    descriptionKey: 'kirino.description',
    techStack: ['Rust', 'Argon2', 'JWT', 'RBAC', 'SQL', 'Redis', 'crates.io'],
    status: 'stable',
    repo: 'celestia-island/kirino',
    color: '#ef4444',
    icon: 'i-lucide-shield-check',
  },
]
