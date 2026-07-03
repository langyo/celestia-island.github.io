# Kirino

A principled framework bringing **zero-trust authentication and authorization** — not just RBAC — to the Rust ecosystem.

Kirino implements ANSI INCITS 359-2004 RBAC in full (RBAC0/1/2): separation of duties, cardinality enforcement, temporal bounds, and role hierarchies. It asks not just "who can do what," but "under what conditions."

On top of that sits a dynamic authorization layer — trust scoring, anomaly detection, and DO-178C-inspired autonomy levels (L0–L4) — so access decisions adapt to risk rather than resolving to a static yes/no. Real-world authorization, distilled into composable Rust modules you embed directly into your application.
