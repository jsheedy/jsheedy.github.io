# TODO: WebGPU Sphere Future Enhancements

## Rendering Features

### Wireframe Mode
- [ ] Add line rendering pipeline alongside point rendering
- [ ] Toggle between point cloud, wireframe, and hybrid modes
- [ ] Use index buffer to define edges between vertices
- [ ] Add wireframe color controls (separate from point color)

### Point Size Control
- [ ] Investigate WebGPU point size options (@builtin(point_size) or instancing)
- [ ] Add point size slider if supported
- [ ] Fallback to instanced quads for variable point sizes
- [ ] Add point size based on distance (depth-based scaling)

### Color Modes
- [ ] Implement multiple color schemes:
  - [x] Height gradient (current)
  - [ ] Solid color picker
  - [ ] Depth-based gradient
  - [ ] Normal-based coloring
  - [ ] Distance from center
  - [ ] Custom RGB controls
- [ ] Add color mode dropdown in UI
- [ ] Smooth color transitions between modes

### Lighting & Shading
- [ ] Add basic Phong lighting model
- [ ] Implement directional light controls
- [ ] Add ambient/diffuse/specular component sliders
- [ ] Toggle lighting on/off for comparison
- [ ] Add light position visualization

## Geometry Features

### Multiple Primitives
- [ ] Implement UV sphere generation (compare with icosphere)
- [ ] Add cube/box primitive
- [ ] Add torus generator
- [ ] Add cylinder primitive
- [ ] Add cone primitive
- [ ] Add primitive selector dropdown
- [ ] Show visual differences in vertex distribution

### Mesh Manipulation
- [ ] Add noise/perturbation to vertices
- [ ] Implement vertex displacement controls
- [ ] Add mesh deformation (squash/stretch)
- [ ] Implement fractal subdivision options
- [ ] Add mesh morphing between shapes

### Texture Mapping
- [ ] Generate UV coordinates for sphere
- [ ] Add texture loading from file
- [ ] Implement basic texture mapping in shader
- [ ] Add texture controls (scale, offset, rotation)
- [ ] Support for multiple texture channels

## Performance & Optimization

### Level of Detail (LOD)
- [ ] Implement distance-based LOD system
- [ ] Automatically adjust subdivision based on distance
- [ ] Add LOD visualization mode
- [ ] Performance metrics for LOD switching

### Frustum Culling
- [ ] Implement view frustum calculation
- [ ] Cull vertices outside camera view
- [ ] Add culling stats to UI
- [ ] Performance comparison with/without culling

### Instancing
- [ ] Render multiple spheres efficiently
- [ ] Add instance count control
- [ ] Implement instance position grid/random
- [ ] Per-instance color/size variation

## Interaction Features

### Advanced Camera
- [ ] Camera animation/interpolation
- [ ] Preset camera positions (front, top, side, etc.)
- [ ] Camera path recording/playback
- [ ] First-person mode (camera inside sphere)
- [ ] Orthographic projection toggle

### Selection & Picking
- [ ] Implement ray-casting for vertex selection
- [ ] Highlight selected vertices
- [ ] Display vertex information on click
- [ ] Multi-vertex selection (shift-click)
- [ ] Vertex manipulation (drag to move)

### Settings Persistence
- [ ] Save/load settings to localStorage
- [ ] Export settings as JSON
- [ ] Import settings from JSON
- [ ] Preset configurations (low/medium/high detail)
- [ ] URL parameter support for sharing configurations

## Export & Import

### Mesh Export
- [ ] Export sphere as .obj file
- [ ] Export as .ply format
- [ ] Export as .stl for 3D printing
- [ ] Export with vertex colors
- [ ] Export animation frames

### Screenshot/Recording
- [ ] Capture canvas as PNG image
- [ ] Record rotation as animated GIF
- [ ] Record to WebM video format
- [ ] Configurable capture resolution
- [ ] Timestamp overlays on captures

## Visual Effects

### Post-Processing
- [ ] Add bloom effect for points
- [ ] Implement motion blur
- [ ] Add depth of field effect
- [ ] Screen-space ambient occlusion (SSAO)
- [ ] Anti-aliasing options (MSAA, FXAA)

### Particle Effects
- [ ] Animate vertices along surface
- [ ] Pulsating sphere (radius animation)
- [ ] Vertex explosion/implosion effect
- [ ] Particle trails
- [ ] Energy field visualization

### Background
- [ ] Skybox/environment map support
- [ ] Gradient background options
- [ ] Grid floor for spatial reference
- [ ] Axis indicator (XYZ arrows)

## Educational Features

### Debug Visualization
- [ ] Show vertex normals as lines
- [ ] Display triangle edges
- [ ] Highlight subdivision levels with colors
- [ ] Show camera frustum wireframe
- [ ] Display coordinate system axes

### Information Overlays
- [ ] Explain icosphere algorithm step-by-step
- [ ] Show subdivision math formulas
- [ ] Display vertex position on hover
- [ ] Tutorial mode with guided tour
- [ ] Performance profiling overlay

### Comparison Tools
- [ ] Side-by-side icosphere vs UV sphere
- [ ] Performance comparison graphs
- [ ] Vertex distribution heatmap
- [ ] Interactive algorithm explanation

## Technical Improvements

### Code Quality
- [ ] Add comprehensive unit tests
- [ ] Implement integration tests
- [ ] Add benchmarks for sphere generation
- [ ] Profile and optimize hot paths
- [ ] Add error recovery/graceful degradation

### Browser Compatibility
- [ ] Add WebGPU feature detection
- [ ] Show helpful error messages for unsupported browsers
- [ ] Implement WebGL2 fallback renderer
- [ ] Test on Firefox with WebGPU flag
- [ ] Test on Safari Technology Preview

### Accessibility
- [ ] Add keyboard controls (arrow keys for orbit)
- [ ] Screen reader support for controls
- [ ] High contrast mode
- [ ] Reduced motion support
- [ ] Keyboard shortcuts reference

## Advanced Features

### Physics Integration
- [ ] Add gravity simulation
- [ ] Bounce/collision detection
- [ ] Multiple interactive spheres
- [ ] Spring constraints between vertices
- [ ] Soft body dynamics

### Compute Shaders
- [ ] Move sphere generation to GPU (compute shader)
- [ ] GPU-based collision detection
- [ ] Parallel vertex manipulation
- [ ] Real-time mesh optimization

### VR/XR Support
- [ ] WebXR support for VR headsets
- [ ] Stereoscopic rendering
- [ ] Hand tracking for manipulation
- [ ] Room-scale experience
- [ ] VR controller support

## Documentation

### Tutorials
- [ ] Write icosphere algorithm tutorial
- [ ] Create WebGPU pipeline guide
- [ ] Document camera system implementation
- [ ] Explain WASM integration patterns
- [ ] Performance optimization guide

### Examples
- [ ] Add code examples to README
- [ ] Create minimal reproduction examples
- [ ] Build API documentation
- [ ] Record video demonstrations
- [ ] Create interactive playground

## Integration

### Other Experiments
- [ ] Port spatial partitioning from other experiments
- [ ] Add collision detection (Z-order/quadtree)
- [ ] Integrate with boids simulation
- [ ] Create multi-sphere physics demo
- [ ] Connect to other WebGPU experiments

### External Tools
- [ ] Integration with Blender via .obj export
- [ ] Three.js comparison demo
- [ ] Babylon.js port
- [ ] Unity WebGPU comparison
- [ ] Godot 4 WebGPU comparison

---

## Priority Legend
- 🔥 High priority / Quick win
- 💡 Medium priority / Interesting feature
- 🎨 Low priority / Nice to have
- 🔬 Experimental / Research needed

## Suggested Next Steps
1. 🔥 Implement wireframe mode (builds on existing pipeline)
2. 🔥 Add color mode selector (easy shader modification)
3. 💡 Settings persistence (improves UX)
4. 💡 Mesh export (.obj file) (useful utility)
5. 🎨 Multiple primitives (expands scope)
