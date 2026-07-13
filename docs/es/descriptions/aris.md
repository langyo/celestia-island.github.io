# ARIS

**Un motor de navegador en Rust puro derivado de servo** — embebible e independiente.

ARIS es un motor de navegador derivado de servo. Incástalo como biblioteca en cualquier aplicación Rust, o ejecútalo como navegador de escritorio independiente. El pipeline de renderizado se ensambla con crates puramente en Rust — html5ever, stylo, taffy, parley, Vello CPU — reemplazando el SpiderMonkey, WebRender y SWGL originales de servo por Boa (JS), Vello CPU (rasterización) y Wasmtime (WASM).
