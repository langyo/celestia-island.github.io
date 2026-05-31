# Tairitsu

**WASI 네이티브** 풀스택 웹 프레임워크. 전체 애플리케이션 — 프론트엔드 UI와 백엔드 로직 — 을 Rust로 작성하고, WASI 컴포넌트로 컴파일하여 브라우저, 서버 또는 엣지에 배포하세요.

JavaScript 글루 코드와 `wasm-bindgen`에 의존하는 기존 WebAssembly 접근 방식과 달리, Tairitsu는 WebAssembly Component Model을 통해 WASI를 직접 대상으로 합니다. 프론트엔드와 백엔드는 타입 인터페이스를 가진 단일 이식 가능한 런타임을 공유합니다. 하나의 런타임, 하나의 언어, 하나의 코드베이스.
