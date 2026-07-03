# Kirino

Un framework méthodique qui apporte **l'authentification et l'autorisation zero-trust** — pas seulement le RBAC — à l'écosystème Rust.

Kirino implémente ANSI INCITS 359-2004 RBAC dans son intégralité (RBAC0/1/2) : séparation des tâches, limites de cardinalité, contraintes temporelles et hiérarchies de rôles. Il ne demande pas seulement « qui peut faire quoi », mais « sous quelles conditions ».

Par-dessus se pose une couche d'autorisation dynamique — scoring de confiance, détection d'anomalies et niveaux d'autonomie inspirés du DO-178C (L0–L4) — pour que les décisions d'accès s'adaptent au risque plutôt que de se résoudre en un oui/non statique. L'autorisation du monde réel, distillée en modules Rust composables que vous intégrez directement dans votre application.
