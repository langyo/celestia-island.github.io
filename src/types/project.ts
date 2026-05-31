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
  repo?: string
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
    description: 'A Rust-based multi-agent collaboration platform with an exec-only microkernel design. Agents interact through ES module imports in an IEPL TypeScript layer, keeping the LLM surface minimal and composable.',
    descriptionKey: 'entelecheia.description',
    techStack: ['Rust', 'TypeScript', 'Boa JS', 'SQL', 'MCP'],
    status: 'preview',
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
    techStack: ['Vue 3', 'TypeScript', 'Rust', 'CSS'],
    status: 'preview',
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
    techStack: ['Rust', 'WASI', 'TypeScript', 'CSS', 'WIT'],
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
    techStack: ['Rust', 'WASI', 'SCSS', 'CSS', 'WIT'],
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
    techStack: ['Rust', 'Shell', 'SCSS'],
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
    description: 'Customizable zero-trust authentication & RBAC framework in Rust. Supports ANSI INCITS 359-2004 role hierarchies, separation of duties, and temporal constraints.',
    descriptionKey: 'kirino.description',
    techStack: ['Rust', 'SQL'],
    status: 'stable',
    repo: 'celestia-island/kirino',
    color: '#ef4444',
    icon: 'i-lucide-shield-check',
  },
]
