# Marching Squares

## Overview
Interactive visualization of the marching squares algorithm for generating contour lines and implicit surfaces. This algorithm creates smooth boundaries from scalar field data, commonly used for weather maps (isobars, isotherms), metaballs, and terrain elevation contours.

## Algorithm
**Marching Squares (1987)**
- Grid-based contouring algorithm
- O(n) time complexity (linear in grid cells)
- Evaluates scalar field at grid corners
- 16 possible configurations (2^4 corners)
- Uses lookup table for edge intersections
- Linear interpolation for smooth contours

**Process**:
1. Sample scalar field on regular grid
2. For each grid cell, check 4 corner values against threshold
3. Determine cell configuration (0-15 based on which corners are above threshold)
4. Look up edge intersections from table
5. Interpolate exact intersection points
6. Connect segments to form contour lines

## Use Cases
- **Weather Visualization**:
  - Isobars (constant pressure)
  - Isotherms (constant temperature)
  - Precipitation levels
  - Wind speed contours
- **Terrain Mapping**: Elevation contours (topographic lines)
- **Metaballs**: Organic, blob-like shapes for games/graphics
- **Medical Imaging**: CT/MRI scan reconstruction
- **Fluid Simulation**: Water surface, smoke boundaries
- **Level Sets**: Implicit surface rendering

## Interactive Features

### Scalar Field Sources
- **Click to add sources**: Create influence points
- **Drag to move**: Reposition sources in real-time
- **Source types**:
  - Positive (hills/heat sources)
  - Negative (valleys/cold sources)
  - Oscillating (animated)
- **Source strength slider**: Control influence radius
- **Falloff function**: Linear, quadratic, Gaussian

### Threshold Controls
- **Multiple thresholds**: Show 3-5 contour levels simultaneously
- **Threshold slider**: Adjust contour value interactively
- **Auto-range**: Distribute thresholds evenly across field range
- **Color mapping**: Different color per threshold level

### Grid Controls
- **Grid resolution**: 10x10 to 200x200
- **Show grid**: Toggle cell visualization
- **Show samples**: Display corner sample points
- **Show edge cases**: Highlight ambiguous configurations

### Visualization Options
- **Smooth/Linear interpolation**: Compare methods
- **Filled contours**: Solid color between levels (like weather maps)
- **Gradient fill**: Smooth color interpolation
- **Animated metaballs**: Sources move and pulse
- **Show scalar field**: Background heatmap
- **Show gradients**: Vector field arrows

### Presets
- **Weather map**: Multiple contours, filled regions
- **Metaballs**: 5-10 animated sources, smooth blobs
- **Terrain**: Brown→green→white elevation coloring
- **Lava lamp**: Organic blobs rising and falling

## Visual Style
**Terminal/Matrix Aesthetic**
- Dark green (#00ff41) contour lines on black (#0a0e0a)
- Glowing contour lines with bloom effect
- Grid overlay with subtle green lines
- Pulsing source points
- Scanline effects over scalar field heatmap
- Monospace font for threshold labels

## Technical Implementation

### Configuration Lookup Table
```javascript
// 16 configurations (4 bits for 4 corners)
// Each entry lists which edges contain contour intersections
const EDGE_TABLE = [
  [],           // 0000: no intersections
  [0, 3],       // 0001: bottom-left corner
  [0, 1],       // 0010: bottom-right corner
  [1, 3],       // 0011: bottom edge
  // ... 12 more configurations
  [0,1,2,3]     // 1111: all inside (no edge)
];
```

### Interpolation
```javascript
// Linear interpolation to find exact edge intersection
function interpolate(v1, v2, threshold) {
  if (Math.abs(v1 - v2) < 0.001) return 0.5;
  return (threshold - v1) / (v2 - v1);
}
```

### Scalar Field Evaluation
```javascript
// Sum contributions from all sources
function evaluateField(x, y, sources) {
  let value = 0;
  for (const source of sources) {
    const dx = x - source.x;
    const dy = y - source.y;
    const distSq = dx*dx + dy*dy;
    // Inverse square falloff
    value += source.strength / (1 + distSq);
  }
  return value;
}
```

### Performance Optimizations
- **Spatial hashing**: Only evaluate nearby sources
- **Dirty regions**: Only recalculate changed grid cells
- **Web Workers**: Compute field values in background thread
- **Incremental updates**: Cache previous frame's values
- **LOD**: Adaptive grid resolution based on field complexity

## Advanced Features
- **Marching Cubes**: 3D extension (for future)
- **Multiple materials**: Different contours represent different substances
- **Physics simulation**: Sources attract/repel each other
- **User painting**: Click-drag to paint field values
- **Saddle point resolution**: Handle ambiguous configurations
- **Dual contouring**: Sharp features preservation
- **Export**: SVG vector contours, PNG raster

## Ambiguity Resolution
Marching squares has ambiguous cases (e.g., configuration 5 and 10) where diagonal corners are active. Two interpretations exist:
- **Simple approach**: Use asymmetric lookup table
- **Midpoint test**: Sample cell center to determine correct topology
- **Weighted approach**: Use scalar values to decide

## Integration Possibilities
- **Combine with Perlin noise**: Use noise as scalar field for organic terrain
- **Audio-reactive**: FFT bass drives metaball strength
- **Particle interaction**: Particles follow field gradients
- **Weather simulation**: Temperature diffusion over time

## Educational Value
- Fundamental algorithm for isosurface extraction
- Demonstrates lookup table optimization
- Shows interpolation techniques
- Practical applications across many domains
- Gateway to marching cubes (3D)

## Comparison to Alternatives
- **Marching Cubes**: 3D extension, more complex (256 cases)
- **Dual Contouring**: Preserves sharp features better
- **Delaunay-based**: More accurate but slower
- **SDF ray marching**: For complex implicit surfaces

## References
- Lorensen & Cline (1987). "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
- Nielson & Hamann (1991). "The Asymptotic Decider: Resolving the Ambiguity in Marching Cubes"
- Bourke, P. "Polygonising a scalar field" (online tutorial)

## Metaball Physics
For animated metaballs:
```javascript
// Simple physics per source
source.vx += (Math.random() - 0.5) * 0.1; // Random walk
source.vy += 0.05; // Buoyancy (rise)
source.x += source.vx;
source.y += source.vy;
source.vx *= 0.99; // Damping
source.vy *= 0.99;

// Boundary bounce
if (source.y < 0 || source.y > height) source.vy *= -1;
if (source.x < 0 || source.x > width) source.vx *= -1;
```

## Implementation Priority
**High priority** - Visually striking, practical weather/terrain applications, natural fit with Terminal aesthetic, educational value.
