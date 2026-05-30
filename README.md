<!-- markdownlint-disable MD033 MD041 MD036 -->
<div align="center">

<img src="res/logos/celestia.webp" alt="Celestia Island logo" width="200"/>

# Celestia Island

**A Constellation of Open-Source Rust Projects**

[![License](https://img.shields.io/badge/license-Apache--2.0%20%2F%20MIT-blue.svg)](LICENSE)
[![Vue](https://img.shields.io/badge/vue-3.5-42b883.svg)](https://vuejs.org/)
[![GitHub](https://img.shields.io/badge/github-celestia--island-blue.svg)](https://github.com/celestia-island)
[![Version](https://img.shields.io/badge/version-0.1.0-lightgrey.svg)]()

</div>
<!-- markdownlint-enable MD033 MD041 MD036 -->

> **Version 0.1.0** — Early development. Homepage with Vue 3 + Three.js animated starfield. All six sub-projects are in active preparation.

## What is Celestia Island

Celestia Island is a constellation of open-source Rust projects exploring the frontiers of multi-agent orchestration, WebAssembly component models, and zero-trust authentication. Each project is crafted with care, pushing the boundaries of what modern systems software can achieve.

This repository contains the **homepage** — a single-page application built with Vue 3, Three.js, and UnoCSS, featuring a procedural GLSL-animated logo, glass-morphism UI, dark/light theme, and 8-language i18n.

## Projects

### Core Platform

| Project | Description | Status |
|---------|-------------|--------|
| [**Entelecheia**](https://github.com/celestia-island/entelecheia) | Rust multi-agent collaboration platform — exec-only microkernel with 12+ agents, TUI, CLI, IEPL runtime, 60+ crates | Active |
| [**Shittim Chest**](https://github.com/celestia-island/shittim-chest) | User-facing shell for Entelecheia — Arona (chat UI), Plana (admin panel), Rust+Axum backend, Tauri apps & IDE plugins | Active |

### WASM / UI Framework

| Project | Description | Status |
|---------|-------------|--------|
| [**Tairitsu**](https://github.com/celestia-island/tairitsu) | Full-stack WASM component model framework — targets WASI via WIT interfaces, VDOM+hooks, SSR+streaming | Active |
| [**Hikari**](https://github.com/celestia-island/hikari) | WASI UI framework — Chinese aesthetics meets sci-fi design, 40+ components, type-safe SCSS, 660+ named colors | Active |

### Tools & Libraries

| Project | Description | Status |
|---------|-------------|--------|
| [**Aoba**](https://github.com/celestia-island/aoba) | Multi-protocol debugging & simulation tool — Modbus RTU CLI/TUI, virtual ports, HTTP/MQTT bridging | Stable |
| [**Kirino**](https://github.com/celestia-island/kirino) | Zero-trust authentication & RBAC framework — ANSI INCITS 359-2004 RBAC, role inheritance, SoD constraints | Stable |

## Tech Stack

- **Frontend**: Vue 3 + TypeScript + UnoCSS
- **3D / Animation**: Three.js + custom GLSL shaders
- **State**: Pinia + vue-i18n (8 languages)
- **Build**: Vite + pnpm

## Quick Start

```bash
pnpm install
pnpm dev
```

Open <http://localhost:4173> in your browser.

**Production build:**

```bash
python3 scripts/build.py
```

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Licensed under either of Apache License, Version 2.0 or MIT license at your option.
