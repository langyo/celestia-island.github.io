# Shirabe

輕量的 **Rust 原生瀏覽器自動化**函式庫與除錯伺服器。

shirabe 透過一個手寫的 CDP 引擎驅動任何會說 Chrome DevTools Protocol 的瀏覽器——Chrome、Chromium、Edge。一個固定版本的 Chrome for Testing 建置會被拉取進共享快取並被透明地定位，讓你永遠不必手動安裝瀏覽器。可以把它理解為 ONNX Runtime 的 ort，只不過對象是無頭瀏覽器。
