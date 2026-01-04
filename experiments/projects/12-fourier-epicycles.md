# Fourier Epicycles Drawing Machine

## Overview
Interactive visualization of the Discrete Fourier Transform using rotating circles (epicycles) that trace out drawings. A mesmerizing combination of mathematics, art, and animation inspired by 3Blue1Brown's visualization.

## Algorithm Details

**Discrete Fourier Transform**:
- Convert path into complex numbers: f(t) = x(t) + i*y(t)
- DFT gives frequency coefficients: c_n = Σ f(t) * e^(-2πint/N)
- Each coefficient represents a rotating circle
- Reconstruct by summing epicycles: Σ c_n * e^(2πint/N)

**Epicycle Rendering**:
- Each circle rotates at frequency n
- Radius = magnitude of c_n
- Phase = angle of c_n
- Stack circles tip-to-tail
- Final point traces original path

**Path Sampling**:
- User-drawn path sampled at even intervals
- SVG path import and conversion
- Preset shapes: letters, symbols, portraits
- Optimal: power-of-2 samples for FFT efficiency

## Use Cases
- **Education**: Teaching Fourier transforms visually
- **Mathematics**: Understanding frequency domain
- **Art**: Generative drawings, animations
- **Signal Processing**: Visualizing audio waveforms as paths
- **Physics**: Explaining harmonic motion, wave superposition

## Interactive Features
- **Draw mode**: Sketch with mouse, auto-converts to epicycles
- **Text to path**: Type text, renders as epicycles
- **SVG upload**: Import custom drawings
- **Preset library**: Famous shapes, signatures, symbols
- **Epicycle controls**: Show N slowest/fastest frequencies
- **Scrub timeline**: Drag to see construction at any point
- **Speed control**: Adjust animation speed
- **Recording**: Export as animated GIF or video

## Visual Elements
- **Rotating circles**: Semi-transparent, color by frequency
- **Connecting lines**: From center to tip of each epicycle
- **Traced path**: Drawing created by epicycles (bright color)
- **Original path**: Faded overlay for comparison
- **Frequency spectrum**: Bar chart of coefficient magnitudes
- **Time indicator**: Progress through one complete cycle
- **Vectors**: Arrows showing rotation direction

## Visualization Modes
- **All epicycles**: Show every frequency component
- **Top N frequencies**: Most important components only
- **Progressive build**: Add epicycles one at a time
- **Spectrum view**: Split screen with frequency visualization
- **Minimal**: Just the traced path, hide circles
- **Debug**: Show labels with frequency values

## Performance Stats
- Number of epicycles
- Path sample points
- DFT computation time
- Rendering FPS
- Current time in cycle

## Controls
- Draw button: Enable free drawing
- Clear canvas
- Number of epicycles slider (1-200)
- Animation speed slider
- Circle size multiplier
- Show/hide original path
- Show/hide connecting lines
- Color scheme selector
- Preset drawings dropdown
- Text input for custom text
- Export animation button
- Sort by: Frequency, Magnitude, Custom

## Presets
- Alphabet letters (A-Z)
- Mathematical symbols (π, Σ, ∫)
- Simple shapes (star, heart, spiral)
- Complex drawings (portrait, signature)
- Treble clef, infinity symbol
- Country outlines

## Visual Theme
Clean modern gradient style with colorful epicycles, or terminal aesthetic with green circles on black for retro oscilloscope feel.

## Implementation Notes
Use FFT library (or implement Cooley-Tukey algorithm) for O(n log n) performance. Render circles using canvas arcs and lines. Support touch input for mobile drawing. Consider WebGL for >500 epicycles.
