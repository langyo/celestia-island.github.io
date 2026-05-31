# Ichika

Declare your pipeline, let the macro wire the threads.

The pipe! macro takes a sequence of closures — sync or async, named or anonymous — and generates a complete thread pool with all channel plumbing. Branching via match dispatches data to different pipeline arms. Retry policies with configurable backoff. Error recovery that keeps the pool running. Graceful shutdown on Drop.
