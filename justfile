import "./celestia-devtools.just"

set shell := ["bash", "-c"]

default:
    @just --list

install:
    just prefetch

dev:
    pnpm dev

build:
    pnpm build

fmt:
    just fmt-markdown .
