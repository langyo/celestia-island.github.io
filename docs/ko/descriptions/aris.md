# ARIS

**servo에서 파생된 순수 Rust 브라우저 엔진** — 임베디드 가능, 단독 실행 가능.

ARIS는 servo에서 파생된 브라우저 엔진입니다. 임의의 Rust 애플리케이션에 라이브러리로 임베드하거나, 단독 데스크톱 브라우저로 실행할 수 있습니다. 렌더링 파이프라인은 순수 Rust 크레이트——html5ever, stylo, taffy, parley, Vello CPU——로 조립되며, servo 본래의 SpiderMonkey, WebRender, SWGL을 Boa(JS), Vello CPU(래스터화), Wasmtime(WASM)으로 대체합니다.
