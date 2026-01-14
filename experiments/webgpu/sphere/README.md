# WebGPU Sphere

An interactive 3D icosphere renderer built with Rust, WebAssembly, and WebGPU. Renders sphere vertices as a point cloud with full orbit camera controls.

## Features

- **Icosphere Generation**: Recursive subdivision of a base icosahedron for uniform vertex distribution
- **Point Cloud Rendering**: Renders vertices as individual points using WebGPU's PointList topology
- **Full Orbit Controls**:
  - Left-click drag to rotate camera around sphere
  - Scroll to zoom in/out
  - Right-click drag to pan view
- **Adjustable Subdivisions**: 0-5 levels (12 to 10,242 vertices)
- **Auto-Rotation**: Configurable automatic rotation speed
- **Terminal Aesthetic**: Matrix-style green on black with scanline effects
- **Real-time Stats**: Displays vertex count, FPS, and subdivision level

## Building

### Prerequisites

- Rust toolchain (rustup recommended)
- wasm-pack: `cargo install wasm-pack`
- WebGPU-compatible browser (Chrome/Edge recommended)

### Build Commands

```bash
# Development build
wasm-pack build --target web --dev

# Production build (optimized)
wasm-pack build --target web --release
```

### Running Locally

After building, serve the directory with any HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js http-server
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## Architecture

### Rust Components

- **sphere.rs**: Icosphere generation algorithm with recursive edge subdivision
- **camera.rs**: Orbit camera using spherical coordinates with matrix transformations
- **renderer.rs**: WebGPU pipeline setup, buffer management, and render loop
- **shader.wgsl**: Vertex/fragment shaders with camera uniforms and gradient coloring
- **lib.rs**: WASM exports for JavaScript interop

### JavaScript Interface

- Mouse event handlers for orbit/zoom/pan controls
- Slider event handlers for parameter adjustments
- requestAnimationFrame loop with FPS tracking
- Stats display updates

### WebGPU Pipeline

- **Topology**: PointList for rendering individual vertices
- **Buffers**:
  - Vertex buffer (dynamic, rebuilt on subdivision change)
  - Camera uniform buffer (updated per frame)
- **Shaders**: WGSL vertex/fragment with view-projection matrix transformation
- **Color**: Terminal green gradient based on vertex height (#00ff41)

## Controls

- **Left Mouse Drag**: Orbit camera around sphere
- **Scroll Wheel**: Zoom in/out (distance: 2-50 units)
- **Right Mouse Drag**: Pan camera target
- **Subdivisions Slider**: Adjust mesh detail (0-5)
- **Rotation Speed Slider**: Control auto-rotation
- **Reset Camera**: Return to default view
- **Pause Rotation**: Toggle auto-rotation on/off

## Performance

Expected performance on integrated GPU:
- **60 FPS**: Subdivision level 3 (642 vertices)
- **30+ FPS**: Subdivision level 4 (2,562 vertices)
- **15+ FPS**: Subdivision level 5 (10,242 vertices)

WASM size: ~203KB uncompressed, ~60-80KB gzipped

## Browser Compatibility

Requires WebGPU support:
- ✅ Chrome/Edge 113+ (stable)
- ⚠️ Firefox (behind flag: `dom.webgpu.enabled`)
- ❌ Safari (experimental)

## Implementation Details

### Icosphere Algorithm

1. Start with golden ratio icosahedron (12 vertices, 20 faces)
2. For each subdivision:
   - Find midpoint of each edge
   - Normalize midpoint to sphere surface
   - Create 4 new triangles from each original triangle
3. Scale vertices to desired radius

### Orbit Camera

Uses spherical coordinates (distance, azimuth, elevation):
- Prevents gimbal lock by clamping elevation
- Computes view-projection matrix using cgmath
- Supports pan by moving target point in camera space

### WebGPU Setup (Web-Only)

Unlike desktop WebGPU examples using winit, this implementation:
- Uses `web_sys::HtmlCanvasElement` to get canvas
- Creates surface with `wgpu::SurfaceTarget::Canvas`
- Configures for WebGL2 downlevel limits for compatibility

## License

Part of jsheedy.github.io experiments collection.
