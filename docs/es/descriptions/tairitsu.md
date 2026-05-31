# Tairitsu

Un framework web full-stack **nativo WASI**. Escribe tu aplicación completa — interfaz de usuario y lógica del servidor — en Rust, compílala a componentes WASI y despliégala en el navegador, servidor o edge.

A diferencia de los enfoques tradicionales de WebAssembly que dependen de código glue JavaScript y `wasm-bindgen`, Tairitsu apunta directamente a WASI a través del Modelo de Componentes WebAssembly. El frontend y el backend comparten un único runtime portable con interfaces tipadas. Un runtime, un lenguaje, un código base.
