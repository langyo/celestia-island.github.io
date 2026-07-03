# Kirino

Un framework fundamentado que aporta **autenticación y autorización zero-trust** — no solo RBAC — al ecosistema Rust.

Kirino implementa ANSI INCITS 359-2004 RBAC en su totalidad (RBAC0/1/2): separación de funciones, límites de cardinalidad, restricciones temporales y jerarquías de roles. No pregunta solo "quién puede hacer qué", sino "bajo qué condiciones".

Encima se apoya una capa de autorización dinámica — puntuación de confianza, detección de anomalías y niveles de autonomía inspirados en DO-178C (L0–L4) — para que las decisiones de acceso se adapten al riesgo en lugar de resolverse en un sí/no estático. Autorización del mundo real, destilada en módulos Rust componibles que integras directamente en tu aplicación.
