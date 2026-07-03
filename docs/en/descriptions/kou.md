# Kou

A standalone **virtual-terminal engine** — PTY management, a VT100/ANSI screen emulator, and glyph rendering in one library.

Extracted and hardened from the tairitsu packager, kou runs the byte stream through a real `vte` parser: CSI cursor moves, erase, scroll, and the SGR colour palette are honoured rather than dropped on the floor. It is the vtty core that turns a bare PTY into a proper terminal you can read and render.
