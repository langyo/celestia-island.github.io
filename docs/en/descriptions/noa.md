# Noa

AI-native distributed version control system — git for source code, noa for AI agent iteration data.

Coexists with `.git` in the same working tree. Per-agent zero-lock JSONL append-only logs enable hundreds of agents to write concurrently. Snapshot-based immutable history preserves full iteration trace. Three-way workspace merge with file-level conflict detection. Full git protocol compatibility via system `git` CLI bridge. Cross-platform (Linux, macOS), published on crates.io as `libnoa`.
