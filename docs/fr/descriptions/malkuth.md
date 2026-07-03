# Malkuth

Une **boîte à outils de supervision de services** composable pour les programmes Rust longue durée.

Malkuth prend en charge les parties ingrates mais vitales des services en production — arrêt gracieux, sondes de santé, verrous de coordination et mises à jour en continu — via un transport enfichable (JSON-RPC sur TCP, WebSocket ou IPC). Workers supervisés, hooks de drain, et un CLI watchdog qui enveloppe n'importe quel programme avec veille de fichiers et proxy inverse persistant apportent la supervision à tout ce que vous savez lancer.
