# Yuuka

一次巨集呼叫，生成整個型別層級。

一個 proc-macro 程式庫，透過緊湊的 DSL 生成複雜深層巢狀的 struct 與 enum。內聯子結構和列舉會自動展平為正確型別的 Rust 定義，並整合 serde。配套的 auto! 巨集生成符合 derive_struct! 形狀的實例化語法——不再需要逐欄位手動建構深層巢狀型別。
