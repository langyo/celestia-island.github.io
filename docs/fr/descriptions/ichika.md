# Ichika

Déclarez votre pipeline, laissez la macro câbler les threads.

La macro pipe! prend une séquence de closures — sync ou async, nommées ou anonymes — et génère un pool de threads complet avec tout le câblage de canaux. Le branching via match dispatche les données vers différentes branches du pipeline. Politiques de retry avec backoff configurable. Récupération d'erreurs maintenant le pool en fonctionnement. Arrêt gracieux au Drop.
