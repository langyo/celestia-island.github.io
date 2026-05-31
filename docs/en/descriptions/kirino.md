# Kirino

A principled attempt to bring **production-grade RBAC** to the Rust ecosystem.

Kirino implements ANSI INCITS 359-2004 RBAC with its full constraint apparatus: separation of duties, cardinality enforcement, temporal bounds, and role hierarchies. It asks not just "who can do what," but "under what conditions." Real-world authorization constraints, distilled into composable Rust modules — embed them directly into your application and focus on your business logic.
