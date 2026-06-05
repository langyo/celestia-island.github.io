# Noa

Système de contrôle de version distribué natif pour l'IA — git pour le code source, noa pour les données d'itération des agents IA.

Coexiste avec `.git` dans le même arbre de travail. Les journaux JSONL en ajout seul par agent, sans verrou, permettent à des centaines d'agents d'écrire simultanément. Historique immuable basé sur des snapshots préservant la trace complète des itérations. Fusion à trois voies entre espaces de travail avec détection de conflits au niveau des fichiers. Compatibilité totale avec le protocole git via le pont CLI système `git`. Multiplateforme (Linux, macOS), publié sur crates.io sous le nom `libnoa`.
