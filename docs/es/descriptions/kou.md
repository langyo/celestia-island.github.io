# kou

Un **motor de terminal virtual** autónomo — gestión de PTY, emulador de pantalla VT100/ANSI y renderizado de glifos en una sola biblioteca.

Extraído y reforzado desde el empaquetador tairitsu, kou pasa el flujo de bytes por un analizador `vte` real: los movimientos de cursor CSI, el borrado, el desplazamiento y la paleta SGR se respetan en lugar de descartarse. Es el núcleo vtty que convierte un PTY en bruto en un terminal de verdad que se puede leer y renderizar.
