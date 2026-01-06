# Hilbert Curve (Space-Filling Curve)

## Overview
Interactive visualization of the Hilbert curve—a continuous fractal curve that fills a 2D square. Like your existing Z-order curve work, Hilbert curves map 2D points to 1D indices while preserving locality better than Z-order. Used in database indexing, image processing, and spatial data structures.

## Algorithm

**Recursive Construction**:
- Order 1: Basic U-shape connecting 4 quadrants
- Order n: Replace each quadrant with rotated order n-1 curve
- Rotations ensure continuous path
- 4^n points at order n

**Coordinate Conversion**:
- **xy2d**: (x, y) → Hilbert index
- **d2xy**: Hilbert index → (x, y)
- Bit manipulation on coordinates
- Process 2 bits at a time (one per axis)

**Locality Property**:
- Points close in 2D tend to be close in 1D
- Better locality than Z-order for square regions
- Useful for cache-friendly data access

## Use Cases
- **Databases**: Spatial indexing (R-tree alternative)
- **Image processing**: Dithering, compression
- **Load balancing**: Distributing 2D work to processors
- **GIS**: Map tile ordering
- **Texture mapping**: Cache-friendly UV layouts
- **Scientific computing**: Matrix storage order

## Interactive Features
- **Order slider**: Adjust curve complexity (1-8)
- **Animated drawing**: Watch curve being traced
- **Point-to-index**: Click point, see Hilbert index
- **Index-to-point**: Enter index, see location
- **Comparison mode**: Hilbert vs Z-order side by side
- **Query window**: Highlight index range as 2D region

## Visual Elements
- **Curve path**: Connected line through all points
- **Grid overlay**: Show underlying cell structure
- **Point markers**: Numbered by index
- **Color gradient**: Index mapped to color along curve
- **Query range**: Highlighted region
- **Animation trail**: Fading path during drawing
- **Order recursion**: Show quadrant structure

## Construction Animation
- Start with order 1 U-shape
- Show quadrant division
- Apply rotations to sub-curves
- Connect quadrants
- Recursively refine

## Locality Demonstration
- Select 2D bounding box
- Show all Hilbert indices in box
- Count contiguous index ranges
- Compare to Z-order (Morton code)
- Demonstrate better clustering

## Comparison with Z-Order
- Side-by-side visualization
- Same grid, different curves
- Query same region
- Count index range fragments
- Show locality difference

## Performance Stats
- Current order
- Total points: 4^order
- Points in query range
- Contiguous index ranges
- Curve length
- Locality measure

## Controls
- Order slider (1-8)
- Animation speed
- Show/hide grid
- Show/hide point indices
- Query box toggle (drag to define)
- Comparison mode toggle
- Color scheme selector
- Step-through animation

## Applications Demo
- **Image dithering**: Hilbert-order pixel processing
- **Spatial query**: Range query efficiency
- **Load balancing**: Distribute curve segments

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green curve on black
- Gradient from dim to bright along curve
- Glowing current position
- Grid in subtle green
- Query region highlighted
