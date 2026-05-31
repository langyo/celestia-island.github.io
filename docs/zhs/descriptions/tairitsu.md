# Tairitsu

**WASI 原生**的全栈 Web 框架。用 Rust 编写完整应用——前端界面与后端逻辑——编译为 WASI 组件，部署到浏览器、服务器或边缘端。

与依赖 JavaScript 胶水代码和 `wasm-bindgen` 的传统 WebAssembly 方案不同，Tairitsu 通过 WebAssembly Component Model 直接面向 WASI。前后端共享同一套可移植运行时，以类型化接口通信。一个运行时，一种语言，一套代码。
