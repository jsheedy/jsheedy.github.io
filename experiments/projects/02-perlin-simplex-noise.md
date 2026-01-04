# Perlin/Simplex Noise

## Overview
Interactive visualization of coherent noise generation algorithms (Perlin and Simplex noise) for procedural content generation. These algorithms create natural-looking, infinitely tileable patterns used in terrain generation, textures, and organic movement.

## Algorithm
**Perlin Noise (1983)**
- Gradient noise based on interpolated random gradients
- Uses grid of random gradient vectors
- Smooth interpolation using ease curves (smoothstep or quintic)
- O(2^n) complexity for n dimensions

**Simplex Noise (2001)**
- Improved Perlin noise by Ken Perlin
- Uses simplex grid instead of hypercube
- Better visual quality and performance
- Fewer directional artifacts
- O(n^2) complexity for n dimensions

## Use Cases
- **Procedural Terrain**: Height maps for games and simulations
- **Cloud Patterns**: Realistic weather visualization
- **Texture Synthesis**: Marble, wood grain, organic patterns
- **Game World Generation**: Minecraft-style terrain, biomes
- **Animation**: Natural-looking organic motion
- **Music Visualization**: Audio-reactive backgrounds

## Interactive Features
- **Real-time noise rendering**: See patterns update live
- **Multi-octave layering** (Fractal Brownian Motion):
  - Frequency: Base pattern scale
  - Amplitude: Pattern intensity
  - Octaves: Number of layers to combine
  - Persistence: Amplitude decay per octave
  - Lacunarity: Frequency increase per octave
- **Noise type selector**:
  - Classic Perlin
  - Simplex
  - Worley (cellular/Voronoi noise)
  - Value noise
- **Color mapping modes**:
  - Grayscale
  - Terrain (blue→green→brown→white)
  - Fire (black→red→orange→yellow)
  - Custom gradient editor
- **Animation controls**:
  - Animate through Z-axis (noise evolves over time)
  - Speed control
  - Loop seamlessly
- **2D/3D toggle**: Render 2D slice or full 3D noise field
- **Seed control**: Deterministic generation

## Visual Style
**Flexible** - Either aesthetic works:
- **Option A (Terminal/Matrix)**: Green heightmap with scanlines
- **Option B (Modern Gradient)**: Full-color terrain with smooth gradients
- Could offer aesthetic toggle as a feature

## Technical Implementation

### Core Algorithm Components
1. **Gradient generation**: Pre-computed random unit vectors
2. **Interpolation**: Smoothstep (3t²-2t³) or quintic (6t⁵-15t⁴+10t³)
3. **Octave combination**: Sum weighted noise at different frequencies
4. **Normalization**: Map output to [0,1] or [-1,1] range

### Performance Optimizations
- **Gradient table**: Pre-compute permutation table (256 entries)
- **WebGL shader implementation**: GPU-accelerated for real-time
- **Tiling support**: Seamless wrapping for infinite patterns
- **Memoization**: Cache computed noise values
- **Progressive refinement**: Render low-res first, then refine

### Data Structures
- **Permutation table**: Random shuffle of 0-255
- **Gradient vectors**: Pre-computed unit vectors
- **Image buffer**: Canvas or WebGL framebuffer
- **Parameter state**: Octaves, frequency, amplitude settings

## Advanced Features
- **Domain warping**: Use noise to offset coordinates of another noise
- **Ridged multifractal**: abs(noise) for mountain ridges
- **Billowy noise**: abs(noise)*2-1 for cloud-like shapes
- **Turbulence**: Sum of abs(noise) across octaves
- **Erosion simulation**: Simple thermal/hydraulic erosion
- **3D volume rendering**: Marching cubes for isosurface extraction
- **Real-time editing**: Paint to raise/lower terrain
- **Export**: Save as PNG heightmap or JSON

## Educational Value
- Fundamental algorithm for procedural generation
- Shows power of combining simple patterns (octaves)
- Demonstrates interpolation techniques
- Applications across games, graphics, simulation

## Integration with Existing Work
- Complements spatial partitioning experiments
- Can be used as input for other visualizations:
  - Marching squares on noise field
  - Particle systems following noise gradients
  - Color particles by noise value

## References
- Perlin, K. (1985). "An Image Synthesizer" (SIGGRAPH '85)
- Perlin, K. (2002). "Improving Noise" (SIGGRAPH '02)
- Ebert et al. (2003). "Texturing & Modeling: A Procedural Approach"
- Gustavson, S. (2005). "Simplex noise demystified"

## Variants to Consider
- **2D Perlin**: Classic terrain generation
- **3D Simplex**: For volumetric effects (clouds, fog)
- **4D noise**: 3D noise animated smoothly over time
- **Curl noise**: Divergence-free noise for fluid simulation
- **Gabor noise**: Spatially-correlated spots (useful for textures)

## Implementation Priority
**High priority** - Extremely versatile, visually striking, and foundational for many procedural techniques.
