# Entelecheia

A multi-agent platform built on **harness engineering** principles, engineered for safety-critical industrial control.

Instead of giving AI models unrestricted access to tools, Entelecheia constrains each agent to its domain — precisely defining what it can do and what it cannot. The LLM sees only a handful of primitives; every real action runs inside the IEPL TypeScript pipeline and dispatches to a large surface of MCP tools across many agents.

What sets it apart is the industrial lens: cross-vendor protocol support (Modbus, S7comm, OPC UA), multi-layer safety gates from instruction review to human approval, and container-isolated execution. From the control room to the factory floor, Entelecheia orchestrates the coordination so agents act within their boundaries — and never beyond.
