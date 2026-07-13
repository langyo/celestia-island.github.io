# ARIS

**servo 派生の純 Rust ブラウザエンジン**——組込み可能、単体実行可能。

ARIS は servo から派生したブラウザエンジンです。任意の Rust アプリにライブラリとして組み込むことも、単体のデスクトップブラウザとして実行することもできます。レンダリングパイプラインは純 Rust クレート——html5ever、stylo、taffy、parley、Vello CPU——で構成され、servo 本来の SpiderMonkey、WebRender、SWGL を Boa（JS）、Vello CPU（ラスタライズ）、Wasmtime（WASM）に置き換えています。
