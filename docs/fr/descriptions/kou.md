# kou

Un **moteur de terminal virtuel** autonome — gestion PTY, émulateur d'écran VT100/ANSI et rendu de glyphes dans une seule bibliothèque.

Extrait et durci depuis le packager tairitsu, kou passe le flux d'octets dans un vrai parseur `vte` : déplacements de curseur CSI, effacement, défilement et palette SGR sont respectés au lieu d'être jetés par terre. C'est le cœur vtty qui transforme un PTY brut en un véritable terminal qu'on peut lire et afficher.
