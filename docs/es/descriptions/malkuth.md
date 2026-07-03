# Malkuth

Un **kit de herramientas de supervisión de servicios** componible para programas Rust de larga duración.

Malkuth se ocupa de las partes ingratas pero vitales de los servicios en producción — apagado graceful, sondas de salud, cerraduras de coordinación y actualizaciones en continuo — mediante un transporte conectable (JSON-RPC sobre TCP, WebSocket o IPC). Workers supervisados, hooks de drain, y un CLI watchdog que envuelve cualquier programa con vigilancia de archivos y un proxy inverso persistente llevan la supervisión a todo lo que sepas ejecutar.
