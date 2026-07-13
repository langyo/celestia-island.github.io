# ARIS

**Чисто-Rust браузерный движок на базе servo** — встраиваемый и автономный.

ARIS — браузерный движок, производный от servo. Встраивайте его как библиотеку в любое Rust-приложение или запускайте как самостоятельный десктоп-браузер. Конвейер рендеринга собран из чисто-Rust крейтов — html5ever, stylo, taffy, parley, Vello CPU — с заменой исходных SpiderMonkey, WebRender и SWGL от servo на Boa (JS), Vello CPU (растеризация) и Wasmtime (WASM).
