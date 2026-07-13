# ARIS

**Un moteur de navigateur en Rust pur dérivé de servo** — embarquable et autonome.

ARIS est un moteur de navigateur dérivé de servo. Embarquez-le comme bibliothèque dans n'importe quelle application Rust, ou exécutez-le comme navigateur de bureau autonome. Le pipeline de rendu est assemblé à partir de crates en Rust pur — html5ever, stylo, taffy, parley, Vello CPU — remplaçant le SpiderMonkey, WebRender et SWGL d'origine de servo par Boa (JS), Vello CPU (rastérisation) et Wasmtime (WASM).
