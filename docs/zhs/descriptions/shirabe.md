# Shirabe

轻量的 **Rust 原生浏览器自动化**库与调试服务器。

shirabe 通过一个手写的 CDP 引擎驱动任何会说 Chrome DevTools Protocol 的浏览器——Chrome、Chromium、Edge。一个固定版本的 Chrome for Testing 构建会被拉取进共享缓存并被透明地定位，让你永远不必手动安装浏览器。可以把它理解为 ONNX Runtime 的 ort，只不过对象是无头浏览器。
