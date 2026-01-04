# K-d Tree Nearest Neighbor Search

## Overview
Interactive visualization of k-d tree construction and nearest neighbor queries. K-d trees are binary space-partitioning trees used for organizing points in k-dimensional space, particularly efficient for nearest neighbor searches.

## Algorithm Details

**Tree Construction**:
- Recursively partition space by alternating axes (x, then y, then x...)
- At each level, find median point along current axis
- Median becomes node, points less go left, greater go right
- Creates balanced binary tree with O(n log n) construction

**Nearest Neighbor Search**:
- Traverse tree like binary search based on query point
- Backtrack and check if better neighbors exist on other side
- Prune branches using bounding box distances
- O(log n) average case for well-balanced trees

## Use Cases
- **GIS Applications**: Finding nearest city, restaurant, store
- **Machine Learning**: k-NN classification, clustering
- **Computer Graphics**: Point cloud processing, mesh simplification
- **Robotics**: Path planning, obstacle avoidance

## Interactive Features
- **Click to add points**: Build tree incrementally
- **Click to query**: Find and highlight nearest neighbor
- **Show k-nearest**: Find multiple nearest neighbors
- **Visualize tree structure**: Show splitting planes as lines
- **Traversal animation**: Highlight nodes visited during search
- **Compare with brute force**: Show efficiency gains

## Visual Elements
- Points colored by tree depth or partition
- Splitting lines alternate color by axis (red for x, blue for y)
- Query point highlighted in distinct color
- Nearest neighbor(s) connected with lines
- Distance circles showing search radius
- Tree structure diagram alongside spatial view

## Performance Stats
- Points in tree
- Tree depth/balance factor
- Nodes visited during search
- Comparison: k-d tree vs brute force checks

## Controls
- Number of points slider
- K (number of neighbors) slider
- Toggle splitting plane visualization
- Toggle tree structure view
- Animation speed control
