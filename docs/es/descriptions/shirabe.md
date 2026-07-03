# shirabe

Una biblioteca ligera de **automatización de navegador nativa de Rust** y un servidor de depuración.

shirabe conduce cualquier navegador que hable el Chrome DevTools Protocol — Chrome, Chromium, Edge — mediante un motor hecho a mano. Un build fijado de Chrome for Testing se obtiene en una caché compartida y se localiza de forma transparente, para que nunca instales un navegador a mano. Piensa en ort para ONNX Runtime, pero para un navegador headless.
