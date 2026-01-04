# Ray Marching & Signed Distance Fields

## Overview
Real-time 3D rendering using ray marching and signed distance fields (SDFs) - a technique popularized by ShaderToy. Create complex 3D scenes with smooth blending, infinite detail, and minimal geometry.

## Algorithm Details

**Ray Marching**:
- Cast rays from camera through each pixel
- March along ray in steps
- Step size = distance to nearest surface (SDF)
- Safe to jump without missing geometry
- Stop when close enough to surface
- Typical max 64-128 steps per ray

**Signed Distance Fields**:
- Function returns distance to nearest surface
- Negative inside, positive outside, zero on surface
- Primitives: sphere, box, torus, cylinder, cone
- Operations: union, intersection, subtraction
- Smooth blending with polynomial interpolation

**Lighting**:
- Normal estimation via gradient: finite differences of SDF
- Phong/Blinn-Phong shading
- Shadows via secondary ray marching
- Ambient occlusion from march step count
- Reflections via recursive marching

## Use Cases
- **Procedural Graphics**: Infinite detail without polygons
- **Creative Coding**: ShaderToy-style demos and art
- **Game Development**: Dynamic geometry, signed distance rendering
- **Visualization**: Mathematical surfaces, fractals
- **Education**: Teaching rendering, ray tracing fundamentals

## Interactive Features
- **Camera controls**: Click-drag to rotate, scroll to zoom
- **Object selector**: Choose primitive shapes
- **Boolean operations**: Add, subtract, intersect shapes
- **Smooth blend slider**: Adjust smoothmin parameter
- **Material properties**: Adjust color, shininess, reflectivity
- **Light position**: Drag light source in 3D space
- **Preset scenes**: Gallery of interesting compositions
- **Animation**: Rotate, pulse, morph objects

## Visual Elements
- **3D rendered scene**: Full ray marched output
- **Ambient occlusion**: Soft shadowing in crevices
- **Hard shadows**: Sharp shadows from light source
- **Reflections**: Mirror-like surfaces (optional)
- **Fog/atmosphere**: Distance-based fading
- **Debug modes**:
  - Show step count (performance heatmap)
  - Show normals (colorful surface directions)
  - Show distance field (isosurfaces)

## SDF Primitives
- Sphere, box, rounded box
- Torus, cone, cylinder
- Capsule, octahedron
- Infinite plane
- Custom combinations

## SDF Operations
- **Union**: min(d1, d2)
- **Subtraction**: max(d1, -d2)
- **Intersection**: max(d1, d2)
- **Smooth min**: Polynomial blend
- **Repetition**: Modulo space for infinite patterns
- **Twist, bend**: Domain warping

## Performance Stats
- Average ray march steps
- Pixels rendered per frame
- Frames per second
- Maximum steps reached (%)

## Controls
- Camera position (XYZ sliders or drag)
- Light position (XYZ sliders or drag)
- Max march steps: 32-256
- Max distance slider
- Surface threshold (precision)
- Smooth blend amount: 0.0-1.0
- Shadow softness
- AO strength
- Material selector
- Add/remove objects
- Animation speed

## Visual Theme
Clean modern look with 3D viewport, or dark terminal aesthetic with green wireframe/debug overlays.

## Implementation Notes
Implement as WebGL fragment shader for performance. Provide both complex preset scenes and simple builder for educational exploration. Include comments explaining the SDF math.
