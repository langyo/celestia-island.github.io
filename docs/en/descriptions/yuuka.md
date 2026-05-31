# Yuuka

One macro invocation, an entire type hierarchy.

A proc-macro library that generates complex, deeply nested structs and enums from a compact DSL. Inline sub-structs and enums are automatically flattened into properly typed Rust definitions with serde integration. The companion auto! macro produces ergonomic instantiation syntax that matches the derive_struct! shape — no more manually constructing deeply nested types field by field.
