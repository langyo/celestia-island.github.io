# Yuuka

一次宏调用，生成整个类型层级。

一个 proc-macro 库，通过紧凑的 DSL 生成复杂深层嵌套的 struct 和 enum。内联子结构和枚举会自动展平为正确类型的 Rust 定义，并集成 serde。配套的 auto! 宏生成符合 derive_struct! 形状的实例化语法——不再需要逐字段手动构造深层嵌套类型。
