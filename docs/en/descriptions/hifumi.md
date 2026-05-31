# Hifumi

Migrate data between struct versions without the boilerplate.

Annotate the current version of your struct with #[version] and express field changes via #[migration("0.1" => "0.2" { ... })] — Hifumi auto-generates all older-version structs and From<Old> for New impls. The companion CLI diffs struct definitions across git commits and emits ready-to-paste migration annotations.
