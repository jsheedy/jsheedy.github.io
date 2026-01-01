# Collide-O-Scope (WebAssembly/Rust)

A high-performance particle collision system using Z-order spatial partitioning, implemented in Rust and compiled to WebAssembly.

## Prerequisites

- Rust compiler (installed via system package manager)
- `rust-wasm` package (for wasm32-unknown-unknown target)
- `wasm-pack` (Rust → WebAssembly build tool)

### Install Prerequisites (Arch Linux)

```bash
sudo pacman -S rust-wasm
cargo install wasm-pack
```

Ensure `~/.cargo/bin` is in your PATH to use `wasm-pack`.

## Build Process

After editing `particles-wasm/src/lib.rs`, rebuild the WebAssembly module:

```bash
cd particles-wasm
~/.cargo/bin/wasm-pack build --target web
```

This command:
- Compiles Rust code to WebAssembly (`wasm32-unknown-unknown` target)
- Generates JavaScript bindings using `wasm-bindgen`
- Optimizes the WASM binary with `wasm-opt`
- Outputs to `particles-wasm/pkg/`:
  - `particles_wasm.js` - JavaScript glue code
  - `particles_wasm_bg.wasm` - Compiled WebAssembly binary
  - `particles_wasm.d.ts` - TypeScript type definitions

## Development Workflow

```bash
# 1. Edit Rust source
vim particles-wasm/src/lib.rs

# 2. Optional: Quick syntax check (faster than full WASM build)
cd particles-wasm
cargo build

# 3. Build WebAssembly module
~/.cargo/bin/wasm-pack build --target web

# 4. Refresh browser at http://localhost:8000/collide-o-scope-rs/
```

## Running Locally

Start a web server from the `experiments` directory:

```bash
cd /home/velotron/git/jsheedy.github.io/experiments
python -m http.server 8000
```

Open http://localhost:8000/collide-o-scope-rs/ in your browser.

## Project Structure

```
collide-o-scope-rs/
├── index.html              # Main HTML interface
├── settings-persistence.js # LocalStorage persistence utility
├── particles-wasm/         # Rust WASM project
│   ├── Cargo.toml         # Rust package manifest
│   ├── src/
│   │   └── lib.rs         # Main Rust implementation
│   └── pkg/               # Generated WASM output (build artifact)
│       ├── particles_wasm.js
│       └── particles_wasm_bg.wasm
└── README.md              # This file
```

## Features

- **Z-Order Spatial Partitioning**: Efficient collision detection using Morton codes
- **WebAssembly Performance**: Rust compiled to WASM for near-native speed
- **Interactive Controls**: Adjust particle count, size, speed, gravity, elasticity, and more
- **Visual Effects**: Plasma color gradients based on collision temperature
- **Fan Physics**: Upward airflow simulation
- **Trail Rendering**: Configurable motion trails

## Technical Details

The Rust implementation exposes a `Simulation` class to JavaScript via `wasm-bindgen`. The simulation state (particles) is stored in WASM linear memory and accessed directly from JavaScript using typed arrays for maximum performance.

Key optimizations:
- Z-order curve sorting for spatial locality
- Bidirectional neighbor search with configurable range
- Impulse-based collision response
- Direct memory access from JavaScript (zero-copy particle data)
