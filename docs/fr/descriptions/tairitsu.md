# Tairitsu

Un framework web full-stack **natif WASI**. Écrivez votre application complète — interface utilisateur et logique serveur — en Rust, compilez-la en composants WASI et déployez-la sur navigateur, serveur ou edge.

Contrairement aux approches WebAssembly traditionnelles qui reposent sur du code glue JavaScript et `wasm-bindgen`, Tairitsu cible directement WASI via le Modèle de Composants WebAssembly. Le frontend et le backend partagent un unique runtime portable avec des interfaces typées. Un runtime, un langage, une base de code.
