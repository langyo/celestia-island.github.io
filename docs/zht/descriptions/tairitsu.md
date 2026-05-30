# Tairitsu

**WASI 原生**的全端 Web 框架。用 Rust 編寫完整應用——前端介面與後端邏輯——編譯為 WASI 組件，部署到瀏覽器、伺服器或邊緣端。

與依賴 JavaScript 膠水程式碼和 `wasm-bindgen` 的傳統 WebAssembly 方案不同，Tairitsu 透過 WebAssembly Component Model 直接面向 WASI。前後端共享同一套可移植執行時，以型別化介面通訊。一個執行時，一種語言，一套程式碼。
