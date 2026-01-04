# Voronoi Diagrams

## Overview
Interactive visualization of Voronoi diagrams using Fortune's sweep line algorithm. Voronoi diagrams partition a plane into regions based on distance to a set of points (sites), where each region consists of all points closer to one site than to any other.

## Algorithm
**Fortune's Sweep Algorithm**
- O(n log n) time complexity
- Event-driven sweep line approach
- Uses beach line (parabolic arc structure) and event queue
- Generates both Voronoi diagram and its dual (Delaunay triangulation)

## Use Cases
- **Geospatial Analysis**: Territory mapping, service area coverage
- **Weather Visualization**: Weather station influence zones, interpolation
- **Proximity Queries**: Nearest neighbor searches, location-based services
- **Resource Allocation**: Cell tower coverage, facility placement optimization
- **Game Development**: Territory control, pathfinding, spawn zones

## Interactive Features
- **Click to add/remove sites**: Build diagram interactively
- **Show Voronoi edges**: Visualize cell boundaries
- **Show Delaunay dual**: Toggle triangulation overlay
- **Distance field visualization**: Color-coded proximity heatmap
- **Animated construction**: Step through Fortune's algorithm
- **Site dragging**: Move sites and watch diagram update in real-time
- **Highlight nearest site**: Hover to show which site controls each region
- **Random site generation**: Generate N random points
- **Clear all**: Reset to empty canvas

## Visual Style
**Terminal/Matrix Aesthetic**
- Dark green (#00ff41) on black (#0a0e0a)
- Scanline effects for retro CRT look
- Monospace fonts
- Glowing edges and vertices
- Pulsing site markers
- Grid overlay option

## Technical Implementation

### Data Structures
- **Beach line**: Binary search tree of parabolic arcs
- **Event queue**: Priority queue for site and circle events
- **DCEL** (Doubly Connected Edge List): For storing diagram structure
- **Spatial hash**: For fast nearest-site queries

### Key Components
1. **Sweep line**: Horizontal line moving top to bottom
2. **Site events**: When sweep line reaches a new site
3. **Circle events**: When beach line arcs converge
4. **Edge recording**: Track Voronoi edges as they're discovered

### Performance Optimizations
- Use spatial indexing for O(1) point-in-polygon queries
- Pre-compute distance fields for smooth color interpolation
- Batch rendering for many sites (>1000)
- Incremental updates when dragging sites

## Complementary Features
- **Voronoi + Delaunay toggle**: Show relationship between dual structures
- **Lloyd's relaxation**: Iterative smoothing for more uniform cells
- **Weighted Voronoi**: Sites with different radii of influence
- **Constrained diagrams**: Respect boundary polygons
- **Export**: Save diagram as SVG or JSON

## Educational Value
- Demonstrates computational geometry fundamentals
- Shows relationship between Voronoi and Delaunay
- Illustrates sweep line algorithm paradigm
- Practical applications in many fields

## References
- Fortune, S. (1987). "A sweepline algorithm for Voronoi diagrams"
- Aurenhammer, F. (1991). "Voronoi diagrams—a survey of a fundamental geometric data structure"
- de Berg, M. et al. (2008). "Computational Geometry: Algorithms and Applications"

## Implementation Priority
**Recommended as first project** due to:
- Strong visual appeal
- Clear real-world applications
- Natural complement to existing spatial partitioning experiments
- Opportunity to show both Voronoi and Delaunay in one visualization
