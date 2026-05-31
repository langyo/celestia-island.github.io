# Yuuka

하나의 매크로 호출로 전체 타입 계층 생성.

간결한 DSL에서 복잡하고 깊게 중첩된 struct와 enum을 생성하는 proc-macro 라이브러리. 인라인 서브 struct와 enum이 자동으로 올바르게 타입이 지정된 Rust 정의로 평탄화되고 serde와 통합됩니다. companion auto! 매크로는 derive_struct! 형태에 맞는 인스턴스화 구문을 생성——더 이상 필드별로 수동으로 깊게 중첩된 타입을 구성할 필요가 없습니다.
