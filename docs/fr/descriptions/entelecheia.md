# Entelecheia

Une plateforme multi-agent fondée sur les principes du **harness engineering**, conçue pour le contrôle industriel critique en matière de sécurité.

Au lieu de donner aux modèles d'IA un accès illimité aux outils, Entelecheia contraint chaque agent à son domaine — en définissant précisément ce qu'il peut et ne peut pas faire. Le LLM ne voit qu'une poignée de primitives ; chaque action réelle s'exécute dans le pipeline IEPL TypeScript et dispatche vers une vaste surface d'outils MCP répartie sur de nombreux agents.

Ce qui la distingue, c'est l'optique industrielle : support multi-fournisseurs de protocoles (Modbus, S7comm, OPC UA), portes de sécurité multi-niveaux de la revue d'instructions à l'approbation humaine, et exécution isolée en conteneurs. De la salle de contrôle à l'atelier, Entelecheia orchestre la coordination pour que les agents agissent dans leurs limites — et jamais au-delà.
