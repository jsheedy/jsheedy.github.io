# Topological Sort

## Overview
Interactive visualization of topological sorting—linear ordering of vertices in a directed acyclic graph (DAG) such that for every edge (u,v), u comes before v. Essential for dependency resolution, task scheduling, and build systems.

## Algorithms

**Kahn's Algorithm** (BFS-based):
1. Calculate in-degree for all vertices
2. Add all zero in-degree vertices to queue
3. Remove vertex from queue, add to result
4. Decrease in-degree of neighbors
5. Add new zero in-degree vertices to queue
6. If result has all vertices: valid ordering; else: cycle exists

**DFS-based Algorithm**:
1. Perform DFS from each unvisited vertex
2. After exploring all descendants, add vertex to stack
3. Pop stack for topological order
4. Cycle detection: back edge during DFS

**Both detect cycles**: Graph with cycle has no valid topological ordering.

## Use Cases
- **Build systems**: Makefile dependency resolution
- **Package managers**: npm, pip install order
- **Course scheduling**: Prerequisites before courses
- **Task scheduling**: Project management (PERT/CPM)
- **Spreadsheets**: Cell evaluation order
- **Compiler**: Instruction scheduling

## Interactive Features
- **Create DAG**: Click to add vertices, drag to add edges
- **Algorithm selector**: Kahn's or DFS
- **Add dependency**: Click source then target
- **Cycle detection**: Warning when cycle introduced
- **Step-through**: See each vertex processed
- **Multiple orderings**: Show alternative valid orderings

## Visual Elements
- **Vertices**: Labeled circles
- **Directed edges**: Arrows showing dependencies
- **In-degree labels**: Count on each vertex
- **Queue/stack**: Current algorithm state
- **Processing order**: Numbers showing result order
- **Current vertex**: Highlighted during processing
- **Finished vertices**: Color change when added to result
- **Cycle highlight**: Red edges if cycle detected

## Kahn's Visualization
- Show in-degree on each vertex
- Highlight zero in-degree vertices
- Queue display
- Animate vertex removal
- Update neighbor in-degrees
- Show edges being "removed"

## DFS Visualization
- Show DFS traversal
- Track visited/processing/finished states
- Detect back edges (cycle)
- Push to stack on finish
- Pop stack for final order

## Cycle Detection
- Attempt to add edge that creates cycle
- Highlight the cycle path
- Explain why topological sort impossible
- Option to remove cycle-causing edge

## Preset Graphs
- **Course prerequisites**: University courses
- **Build dependencies**: Software modules
- **Task dependencies**: Project tasks
- **Simple DAG**: Basic example
- **Complex DAG**: Many vertices and edges

## Performance Stats
- Vertex count
- Edge count
- Processing steps
- Queue/stack size
- Valid orderings count (theoretical)
- Cycle detected: yes/no

## Controls
- Algorithm selector
- Add vertex mode
- Add edge mode
- Clear graph
- Load preset
- Animation speed
- Step-through mode
- Show/hide in-degrees
- Show alternative orderings

## Dependency Resolution Demo
- Enter task names
- Define dependencies
- Run topological sort
- Show valid execution order
- Critical path highlighting

## Visual Theme
**Terminal/Matrix Aesthetic**
- Green vertices and edges on black
- Directed arrows with glow
- In-degree counts in terminal font
- Processing animation
- Result order prominently displayed
