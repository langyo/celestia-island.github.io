# Ichika

Declara tu pipeline, deja que la macro conecte los hilos.

La macro pipe! toma una secuencia de closures — sync o async, nombrados o anónimos — y genera un pool de hilos completo con todo el cableado de canales. Branching vía match despacha datos a diferentes ramas del pipeline. Políticas de reintento con backoff configurable. Recuperación de errores que mantiene el pool en ejecución. Apagado graceful en Drop.
