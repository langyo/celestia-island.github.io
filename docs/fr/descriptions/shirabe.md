# Shirabe

Une bibliothèque légère d'**automatisation de navigateur native Rust** et un serveur de débogage.

shirabe pilote tout navigateur parlant le Chrome DevTools Protocol — Chrome, Chromium, Edge — via un moteur écrit à la main. Un build épinglé de Chrome for Testing est récupéré dans un cache partagé et localisé de façon transparente, pour que vous n'installiez jamais un navigateur à la main. Pensez à ort pour ONNX Runtime, mais pour un navigateur headless.
