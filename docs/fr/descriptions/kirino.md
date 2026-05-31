# Kirino

Une tentative méthodique d'apporter un **RBAC de qualité production** à l'écosystème Rust.

Kirino implémente le standard ANSI INCITS 359-2004 RBAC avec tout son appareil de contraintes : séparation des tâches, limites de cardinalité, contraintes temporelles et hiérarchies de rôles. Il ne demande pas seulement « qui peut faire quoi », mais « sous quelles conditions ». Des contraintes d'autorisation du monde réel, distillées en modules Rust composables — intégrez-les directement dans votre application et concentrez-vous sur votre logique métier.
