import "./celestia-devtools.just"

# `which()` from the vendored celestia-devtools recipes is still an unstable
# just builtin, so the whole file must opt in (`set lists` gates `which()`
# itself on current just releases).
set unstable
set lists := true
set shell := ["bash", "-c"]

default:
    @just --list

# Bootstrap celestia-devtools, install JS deps (pnpm) and Python build deps (Pillow).
install:
    just ensure
    just prefetch
    pip3 install Pillow

# Type-check the whole project with vue-tsc.
lint:
    npx vue-tsc -b --noEmit

# Build the static site into dist/ (delegates to scripts/build.py).
build:
    pnpm build

# Start the Vite dev server.
dev:
    pnpm dev

# Format Markdown documentation in place (celestia-devtools).
fmt:
    just fmt-markdown .

# Check Markdown formatting without writing (used by CI).
fmt-check:
    just fmt-markdown . --check
