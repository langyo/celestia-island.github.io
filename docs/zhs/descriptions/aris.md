# ARIS

**基于 servo 派生的纯 Rust 浏览器引擎**——可嵌入、可独立运行。

ARIS 是一款由 servo 派生的浏览器引擎。可作为库嵌入任意 Rust 应用，也可作为独立桌面浏览器运行。渲染管线由纯 Rust crate 组装而成——html5ever、stylo、taffy、parley、Vello CPU——并以 Boa（JS）、Vello CPU（光栅化）、Wasmtime（WASM）替换 servo 原本的 SpiderMonkey、WebRender 与 SWGL。
