# Hifumi

Migrez les données entre versions de structs sans boilerplate.

Annotez la version actuelle de votre struct avec #[version] et exprimez les changements de champs via #[migration("0.1" => "0.2" { ... })] — Hifumi auto-génère tous les structs des versions antérieures et les impl From<Old> for New. Le CLI companion compare les définitions de structs entre les commits git et émet des annotations de migration prêtes à coller.
