# Verlet Integration Soft Body Physics

## Overview
Interactive soft body physics simulation using Verlet integration and constraint solving. Create squishy, deformable objects like cloth, jello, ropes, and chains with realistic physics and collision response.

## Algorithm Details

**Verlet Integration**:
- Position-based dynamics (no explicit velocity)
- x_new = x + (x - x_old) + a * dt²
- x_old stores previous position (implicit velocity)
- Highly stable for constrained systems
- Energy-preserving with proper time step

**Constraint Solving**:
- **Distance constraints**: Keep points at fixed distance (springs, cloth)
- **Angle constraints**: Preserve bend resistance
- **Pin constraints**: Fix points in space
- Iterative relaxation: Multiple passes for rigidity
- Typical 3-10 iterations per frame

**Collision Response**:
- Point vs circle/rectangle collision
- Project points out of obstacles
- Friction through position damping
- Optional tearing when constraints break

## Use Cases
- **Game Development**: Cloth simulation, rope physics, character hair
- **Animation**: Procedural animation, secondary motion
- **Education**: Teaching physics, constraint solving
- **Art**: Interactive installations, creative coding
- **Engineering**: Cable stress analysis, fabric behavior

## Interactive Features
- **Preset objects**: Cloth, rope, chain, jello cube, ragdoll
- **Click to create**: Drag to define size/shape
- **Grab and drag**: Pull points with mouse
- **Pin points**: Click to fix/unfix points in space
- **Scissors tool**: Click constraints to cut/tear
- **Obstacles**: Drag circles and boxes to interact
- **Shake**: Random impulse to all points
- **Gravity controls**: Adjust direction and strength

## Visual Elements
- Points rendered as circles
- Constraints rendered as lines
- Color by stress/tension (white to red)
- Pinned points highlighted (yellow)
- Semi-transparent fill for cloth
- Trailing effects for motion blur
- Obstacle shapes with solid fill
- Grid background for reference

## Physics Presets
- **Cloth**: Dense point grid with distance constraints
- **Rope**: Linear chain with bend resistance
- **Chain**: Rope with rigid segments (angle constraints)
- **Jello**: Filled shape with internal pressure
- **Ragdoll**: Articulated figure with joint limits
- **Bridge**: Suspended structure with anchors
- **Hair**: Multiple ropes from fixed points

## Performance Stats
- Number of points
- Number of constraints
- Constraint iterations
- Frames per second
- Collision checks per frame

## Controls
- Gravity strength slider
- Gravity angle slider (direction)
- Constraint iterations: 1-20
- Point mass slider
- Damping (air resistance) slider
- Constraint stiffness slider
- Tool selector: Grab, Pin, Cut, Add obstacle
- Preset selector dropdown
- Clear/reset button
- Time scale slider
- Toggle rendering: Points, Constraints, Fill

## Visual Theme
Modern gradient style with clean lines and smooth circles, or terminal aesthetic with green points on black for retro feel.

## Implementation Notes
Use spatial hashing or uniform grid for collision detection optimization with many points. Typed arrays (Float32Array) for point positions improve performance.
