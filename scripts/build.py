#!/usr/bin/env python3
"""Build celestia-island.github.io — install deps, typecheck, bundle, copy assets."""

import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
RES = ROOT / "res"


def run(cmd: list[str], *, cwd: Path | None = None) -> None:
    print(f"> {' '.join(cmd)}")
    r = subprocess.run(cmd, cwd=cwd or ROOT)
    if r.returncode != 0:
        sys.exit(r.returncode)


def main() -> None:
    print("=== Installing dependencies ===")
    run(["pnpm", "install", "--ignore-scripts"])

    print("\n=== Type checking ===")
    run(["npx", "vue-tsc", "-b", "--noEmit"])

    print("\n=== Building ===")
    run(["npx", "vite", "build"])

    print("\n=== Copying static assets ===")
    static_files = [
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "favicon-48x48.png",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "site.webmanifest",
    ]
    for f in static_files:
        src = RES / f
        dst = DIST / f
        if src.exists():
            shutil.copy2(src, dst)
            print(f"  {f}")

    print("\n=== Copying CNAME ===")
    cname = ROOT / "CNAME"
    if cname.exists():
        shutil.copy2(cname, DIST / "CNAME")
        print("  CNAME")

    print("\n=== Copying .nojekyll ===")
    (DIST / ".nojekyll").write_text("\n")

    print(f"\n✓ Build complete → {DIST}")


if __name__ == "__main__":
    main()
