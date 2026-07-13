# ARIS

**A pure-Rust browser engine derived from servo** — embed it, run it standalone.

ARIS is a browser engine derived from servo. Embed it as a library in any Rust application, or run it as a standalone desktop browser. The render pipeline is assembled from pure-Rust crates — html5ever, stylo, taffy, parley, Vello CPU — with servo's SpiderMonkey, WebRender, and SWGL replaced by Boa (JS), Vello CPU (rasterization), and Wasmtime (WASM).
