# Convex Hull Algorithms

## Overview
Interactive comparison of convex hull algorithms: Graham Scan, Jarvis March (Gift Wrapping), and Quickhull. The convex hull is the smallest convex polygon containing all points—like stretching a rubber band around nails on a board.

## Algorithms

**Graham Scan** - O(n log n):
- Sort points by polar angle relative to lowest point
- Process points in order, maintaining convex chain
- Use cross product to detect left/right turns
- Remove points that create right turns (concave)

**Jarvis March (Gift Wrapping)** - O(nh):
- Start from leftmost point
- Find point making smallest angle with current direction
- "Wrap" around the hull like gift wrapping
- O(nh) where h = hull vertices (output-sensitive)

**Quickhull** - O(n log n) average:
- Find extreme points (leftmost, rightmost)
- Recursively find farthest point from line
- Divide-and-conquer approach
- Similar to quicksort partitioning

## Use Cases
- **Collision detection**: Simplified bounding volumes
- **Pattern recognition**: Shape analysis, object detection
- **Path planning**: Obstacle boundaries
- **Statistics**: Outlier detection, data range
- **GIS**: Territory boundaries, coverage areas

## Interactive Features
- **Click to add points**: Build point set incrementally
- **Random point generation**: 10, 50, 100, 500 points
- **Algorithm selector**: Switch between algorithms
- **Step-through mode**: See each algorithm decision
- **Speed control**: Adjust animation speed
- **Point distributions**: Random, circle, cluster, grid

## Visual Elements
- **Points**: Small circles, hull points highlighted
- **Current edge**: Line being considered (yellow)
- **Hull edges**: Confirmed hull segments (bright green)
- **Rejected points**: Points removed from consideration (dim)
- **Angle visualization**: Show polar angles for Graham scan
- **Wrap direction**: Arrow showing Jarvis march direction
- **Recursion depth**: Color-coded for Quickhull

## Performance Stats
- Points processed
- Hull vertices found
- Comparisons made
- Time elapsed
- Algorithm efficiency comparison

## Controls
- Algorithm selector dropdown
- Point count slider
- Animation speed slider
- Step forward/back buttons
- Clear points button
- Generate random points button
- Distribution type selector

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green hull lines on black background
- Glowing vertices
- Animated edge construction
- Point trails during processing
