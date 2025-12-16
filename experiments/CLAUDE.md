# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collection of interactive JavaScript experiments showcasing spatial algorithms and particle simulations. Each experiment is a standalone HTML file containing embedded CSS and JavaScript.

## Architecture

**Self-Contained HTML Files**: Each experiment is a single HTML file with inline styles and scripts. No build process, package managers, or external dependencies.

**Spatial Partitioning Implementations**: Multiple experiments demonstrate different spatial optimization techniques:
- `boids.html` - Z-order curve spatial partitioning for flocking behavior
- `zorder.html` - Z-order (Morton code) collision detection
- `collide-o-scope.html` - Z-order collision detection with visual styling
- `quadtree.html` - Quadtree-based collision detection

**Common Patterns**:
- Canvas-based rendering with `requestAnimationFrame` loops
- Particle systems with collision detection
- Real-time performance stats (FPS, collision counts, check counts)
- Interactive controls with range sliders
- Click-to-add particles on canvas
- LocalStorage persistence for settings (boids.html)

## Z-Order Encoding

The Z-order (Morton code) implementation appears in multiple files with consistent implementation:

```javascript
class ZOrder {
    static encode(x, y) {
        return ZOrder.interleave(x) | (ZOrder.interleave(y) << 1);
    }

    static interleave(n) {
        n = (n | (n << 8)) & 0x00FF00FF;
        n = (n | (n << 4)) & 0x0F0F0F0F;
        n = (n | (n << 2)) & 0x33333333;
        n = (n | (n << 1)) & 0x55555555;
        return n;
    }
}
```

This bit-interleaving technique maps 2D coordinates to a 1D space-filling curve while preserving spatial locality. Particles are sorted by their Z-order code, enabling efficient neighbor searches by only checking nearby particles in the sorted array.

## Boids Simulation Specifics

The boids implementation (`boids.html`) combines three classic flocking rules:
1. **Separation**: Avoid crowding neighbors
2. **Alignment**: Match velocity with neighbors
3. **Cohesion**: Move toward center of mass of neighbors

**Color System**: Each boid has:
- `birthR/G/B`: Permanent color identity (never changes)
- `targetR/G/B`: Blend of birth color (50%) and neighbor average (50%)
- `r/g/b`: Current color, smoothly interpolated toward target

**Performance Optimization**: Uses Z-order spatial partitioning with bidirectional search (forward and backward in sorted array) to find neighbors efficiently. The search range is configurable and determines neighbor detection radius.

## Development Workflow

**Running Experiments**: Open HTML files directly in a web browser. No build step required.

**Testing Changes**: Simply refresh the browser after editing HTML files.

**Git Workflow**:
- Main branch: `master`
- Create feature branches for new experiments
- PRs are expected for adding new experiments

## Visual Styling

Two distinct visual themes:
1. **Terminal/Matrix aesthetic** (boids.html, collide-o-scope.html): Dark green (#00ff41) on black (#0a0e0a), scanline effects, monospace fonts
2. **Modern gradient** (quadtree.html, zorder.html): Colorful gradients, rounded corners, clean typography

When adding new experiments, choose one of these themes for consistency.
