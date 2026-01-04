# Reaction-Diffusion Patterns (Gray-Scott Model)

## Overview
Real-time simulation of reaction-diffusion systems that generate organic patterns like animal markings, coral growth, and cellular structures. The Gray-Scott model produces stunning emergent behavior from two simple differential equations.

## Algorithm Details

**Gray-Scott Equations**:
- Two chemicals: U (substrate) and V (catalyst)
- ∂U/∂t = Du∇²U - UV² + F(1-U)
- ∂V/∂t = Dv∇²V + UV² - (F+k)V
- Du, Dv = diffusion rates
- F = feed rate (adds U)
- k = kill rate (removes V)

**Numerical Method**:
- Discrete 2D grid using typed arrays for performance
- Laplacian approximation: ∇²(i,j) ≈ neighbors - 4×center
- Forward Euler or RK4 integration
- WebGL shader implementation for real-time large grids

**Pattern Regimes**:
- **Spots**: F≈0.055, k≈0.062 (leopard spots)
- **Stripes**: F≈0.035, k≈0.065 (zebra stripes)
- **Maze**: F≈0.029, k≈0.057 (brain coral)
- **Waves**: F≈0.014, k≈0.054 (pulsating patterns)
- **Mitosis**: F≈0.0367, k≈0.0649 (dividing cells)

## Use Cases
- **Biology**: Understanding pattern formation in nature (Turing patterns)
- **Texture Generation**: Procedural textures for games/graphics
- **Art**: Generative art, dynamic installations
- **Education**: Teaching emergence and complex systems
- **Science Communication**: Visualizing chemical reactions

## Interactive Features
- **Preset patterns**: Load famous parameter combinations
- **Click to seed**: Add V chemical with mouse
- **Brush tools**: Paint, spray, erase chemical concentrations
- **Parameter sliders**: Real-time F and k adjustment
- **Diffusion rate controls**: Independent Du and Dv
- **Seed patterns**: Random, circular, grid, custom images
- **Export frames**: Save as image sequence for videos

## Visual Elements
- **Color mapping**: Map U and V to RGB channels
- **Multiple palettes**: Grayscale, heat map, custom gradients
- **Smooth interpolation**: Bilinear filtering for aesthetics
- **Grid overlay**: Toggle to show discrete cells
- **Concentration display**: Show U and V values on hover
- **Split view**: Compare two parameter sets side-by-side

## Performance Stats
- Grid resolution (128² to 512²)
- Updates per second
- Chemical concentrations (min/max/avg)
- Pattern stability indicator
- WebGL vs CPU toggle

## Controls
- F (feed rate) slider: 0.0 - 0.1
- k (kill rate) slider: 0.0 - 0.1
- Du (U diffusion) slider: 0.1 - 0.3
- Dv (V diffusion) slider: 0.01 - 0.15
- Preset dropdown: Spots, Stripes, Maze, Waves, Mitosis, etc.
- Color scheme selector
- Grid size: 128, 256, 512
- Time step multiplier
- Reset/randomize buttons
- Brush size slider

## Visual Theme
Either terminal aesthetic with green chemicals on black, or vibrant gradient theme with smooth color interpolation showing the beauty of the patterns.

## Implementation Notes
Use WebGL fragment shader for large grids (512²+) to achieve real-time performance. CPU implementation acceptable for smaller grids (128²) with Float32Array for precision.
