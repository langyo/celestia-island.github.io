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
    tagline: 'Multi-Agent Collaboration Platform',
    taglineKey: 'entelecheia.tagline',
    description: 'Assemble teams of AI agents that divide tasks, collaborate, and deliver results. From research and analysis to code generation and workflow automation — describe your goal, and specialized agents work together to achieve it.',
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
    tagline: 'Chat With Your AI Agents',
    taglineKey: 'shittim.tagline',
    description: 'The interactive face of Entelecheia — a streaming chat interface to converse with AI agents, a control panel to configure systems and manage permissions, plus desktop and mobile apps. Everything the user sees and touches.',
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
    tagline: 'Build Full-Stack Apps, Entirely in Rust',
    taglineKey: 'tairitsu.tagline',
    description: 'A web framework that lets you build complete applications — frontend UI, server logic, and everything in between — using only Rust. Your app compiles into portable components that run in the browser, on the server, or at the edge. One language, one codebase.',
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
    tagline: 'Beautiful UI, Crafted in Rust',
    taglineKey: 'hikari.tagline',
    description: 'A design-first UI component library with a distinctive visual identity — Eastern aesthetics meet futuristic style. Drop in polished, ready-made components and spend your energy on what your app does, not how it looks.',
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
    tagline: 'Authentication & Access Control, Ready to Use',
    taglineKey: 'kirino.tagline',
    description: 'Add battle-tested login, role-based permissions, and security auditing to your Rust application in minutes. From simple password authentication to complex permission hierarchies with separation of duties — focus on your business logic and leave the security plumbing to Kirino.',
    descriptionKey: 'kirino.description',
    techStack: ['Rust', 'Argon2', 'JWT', 'RBAC', 'SQL', 'Redis', 'crates.io'],
    status: 'stable',
    repo: 'celestia-island/kirino',
    color: '#ef4444',
    icon: 'i-lucide-shield-check',
  },
]
