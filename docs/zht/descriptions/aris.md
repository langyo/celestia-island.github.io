# ARIS

**由 servo 派生的純 Rust 瀏覽器引擎**——可嵌入、可獨立運行。

ARIS 是一款由 servo 派生的瀏覽器引擎。可作為函式庫嵌入任意 Rust 應用，也可作為獨立桌面瀏覽器執行。渲染管線由純 Rust crate 組裝而成——html5ever、stylo、taffy、parley、Vello CPU——並以 Boa（JS）、Vello CPU（光柵化）、Wasmtime（WASM）替換 servo 原本的 SpiderMonkey、WebRender 與 SWGL。
