# Hifumi

Migra datos entre versiones de structs sin boilerplate.

Anota la versión actual de tu struct con #[version] y expresa cambios de campos vía #[migration("0.1" => "0.2" { ... })] — Hifumi auto-genera todos los structs de versiones anteriores y las impl From<Old> for New. El CLI complementario compara definiciones de structs entre commits de git y emite anotaciones de migración listas para pegar.
