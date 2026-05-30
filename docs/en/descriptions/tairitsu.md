# Tairitsu

A **WASI-native** full-stack web framework. Write your entire application — frontend UI and backend logic — in Rust, compile to WASI components, and deploy to browser, server, or edge.

Unlike traditional WebAssembly approaches that rely on JavaScript glue code and `wasm-bindgen`, Tairitsu targets WASI directly through the WebAssembly Component Model. Frontend and backend share a single, portable runtime with typed interfaces. One runtime, one language, one codebase.
