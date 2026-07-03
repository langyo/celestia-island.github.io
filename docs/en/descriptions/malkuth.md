# Malkuth

A composable **service-supervision toolkit** for long-running Rust programs.

Malkuth handles the unglamorous essentials of production services — graceful shutdown, health probes, coordination locks, and rolling updates — over a pluggable transport (JSON-RPC on TCP, WebSocket, or IPC). Supervised workers, drain hooks, and a watchdog CLI that wraps any program with file watching and a sticky reverse proxy bring supervision to anything you can run.
