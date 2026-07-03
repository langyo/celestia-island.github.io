# Shirabe

軽量な**Rustネイティブのブラウザ自動化**ライブラリとデバッグサーバ。

shirabeはCDP（Chrome DevTools Protocol）を話す任意のブラウザ——Chrome、Chromium、Edge——を一つの手作りエンジンで駆動します。固定バージョンのChrome for Testingビルドが共有キャッシュに取得され透過的に配置されるため、ブラウザを手動でインストールする必要はありません。ONNX Runtimeのortのようなもの——ただし対象はヘッドレスブラウザです。
