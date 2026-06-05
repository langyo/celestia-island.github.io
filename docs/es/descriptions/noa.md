# Noa

Sistema de control de versiones distribuido nativo para IA — git para el código fuente, noa para los datos de iteración de agentes IA.

Coexiste con `.git` en el mismo árbol de trabajo. Los registros JSONL de solo anexado por agente, sin bloqueos, permiten que cientos de agentes escriban simultáneamente. Historial inmutable basado en snapshots que preserva la traza completa de iteraciones. Fusión de tres vías entre espacios de trabajo con detección de conflictos a nivel de archivo. Compatibilidad total con el protocolo git mediante puente CLI del sistema `git`. Multiplataforma (Linux, macOS), publicado en crates.io como `libnoa`.
