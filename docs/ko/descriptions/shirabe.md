# shirabe

가벼운 **Rust 네이티브 브라우저 자동화** 라이브러리와 디버그 서버.

shirabe는 CDP(Chrome DevTools Protocol)를 말하는 모든 브라우저 — Chrome, Chromium, Edge — 를 하나의 수제 엔진으로 구동합니다. 고정 버전의 Chrome for Testing 빌드가 공유 캐시로 가져와지고 투명하게 배치되므로, 브라우저를 직접 설치할 필요가 없습니다. ONNX Runtime의 ort 같은 존재 — 단, 대상은 헤드리스 브라우저입니다.
