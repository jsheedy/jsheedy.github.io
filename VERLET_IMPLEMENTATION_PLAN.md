# Verlet Soft Body Physics - Implementation Plan

## Overview
Implementing an interactive soft body physics simulation using Verlet integration with green terminal aesthetic and performance optimizations.

## Architecture

### 1. Core Data Structures (Performance Optimized)

**Point System:**
```javascript
class VerletPoint {
    // Use Float32Array for performance
    constructor(x, y, mass = 1.0) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
        this.mass = mass;
        this.pinned = false;
        this.forceX = 0;
        this.forceY = 0;
    }
}
```

**Storage:** Consider using parallel Float32Arrays for better cache performance with many points:
- `positions` - Float32Array for x,y pairs
- `oldPositions` - Float32Array for previous x,y
- `forces` - Float32Array for accumulated forces

**Constraint Types:**
- `DistanceConstraint` - keeps two points at fixed distance (cloth, ropes)
- `AngleConstraint` - preserves bend resistance (chains)
- `PinConstraint` - fixes point in space

**Collision Detection:**
Implement spatial hashing for O(n) collision detection:
```javascript
class SpatialHash {
    constructor(cellSize) {
        this.cellSize = cellSize;
        this.grid = new Map();
    }

    insert(point, id) { /* hash point to cell */ }
    query(point, radius) { /* return nearby points */ }
    clear() { /* reset grid for next frame */ }
}
```

### 2. Physics Implementation

**Verlet Integration:**
```javascript
updatePoints(dt) {
    for (point of points) {
        if (point.pinned) continue;

        // Calculate acceleration
        const ax = point.forceX / point.mass;
        const ay = (point.forceY / point.mass) + gravity;

        // Verlet integration
        const vx = (point.x - point.oldX) * damping;
        const vy = (point.y - point.oldY) * damping;

        point.oldX = point.x;
        point.oldY = point.y;
        point.x += vx + ax * dt * dt;
        point.y += vy + ay * dt * dt;

        // Reset forces
        point.forceX = 0;
        point.forceY = 0;
    }
}
```

**Constraint Solving (Iterative):**
```javascript
solveConstraints(iterations = 5) {
    for (let i = 0; i < iterations; i++) {
        for (constraint of constraints) {
            constraint.solve();
        }
    }
}
```

**Distance Constraint Solving:**
```javascript
solve() {
    const dx = this.p2.x - this.p1.x;
    const dy = this.p2.y - this.p1.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const diff = (dist - this.restLength) / dist;

    const offsetX = dx * diff * 0.5 * this.stiffness;
    const offsetY = dy * diff * 0.5 * this.stiffness;

    if (!this.p1.pinned) {
        this.p1.x += offsetX;
        this.p1.y += offsetY;
    }
    if (!this.p2.pinned) {
        this.p2.x -= offsetX;
        this.p2.y -= offsetY;
    }
}
```

**Collision Response:**
- Circle obstacles: project points outside radius
- Rectangle obstacles: AABB collision and projection
- Canvas boundaries: reflect/constrain within bounds

### 3. Preset Objects

**Cloth (Grid):**
```javascript
createCloth(x, y, width, height, segments) {
    // Create grid of points
    // Add distance constraints (horizontal, vertical, diagonal for shear)
    // Pin top row points
}
```

**Rope (Chain):**
```javascript
createRope(x, y, length, segments) {
    // Create linear chain of points
    // Add distance constraints between adjacent points
    // Optional: add angle constraints for stiffness
    // Pin first point
}
```

**Jello Cube:**
```javascript
createJello(x, y, size, segments) {
    // Create filled grid
    // Add distance constraints
    // Add internal cross-bracing for volume preservation
    // Optional: pressure simulation
}
```

**Ragdoll:**
```javascript
createRagdoll(x, y, scale) {
    // Define body segments (head, torso, limbs)
    // Add distance constraints for bones
    // Add angle constraints for joint limits
    // Pin head or torso initially
}
```

### 4. Interactive Tools

**Tool States:**
- `GRAB` - drag individual points with mouse
- `PIN` - click to toggle point pinning
- `CUT` - click constraint to remove it
- `ADD_OBSTACLE` - drag to create circle/rectangle obstacles

**Mouse Interaction:**
```javascript
handleMouseDown(x, y) {
    switch(currentTool) {
        case 'GRAB':
            // Find nearest point using spatial hash
            grabbedPoint = spatialHash.query(x, y, grabRadius)[0];
            break;
        case 'PIN':
            // Toggle pin on nearest point
            break;
        case 'CUT':
            // Find intersecting constraint
            break;
        case 'ADD_OBSTACLE':
            // Start drag for new obstacle
            break;
    }
}
```

### 5. Visual Theme (Green Terminal)

**Color Palette:**
```javascript
const COLORS = {
    background: '#0a0e0a',
    canvas: '#080a08',
    primary: '#00ff41',      // Bright green
    secondary: '#00cc33',     // Medium green
    tertiary: '#00aa2a',      // Dark green

    // Point colors
    pointNormal: '#00ff41',
    pointPinned: '#ffff00',   // Yellow for pinned

    // Constraint colors (by stress)
    constraintLow: '#00ff41',     // No stress
    constraintMid: '#ffff00',     // Medium stress
    constraintHigh: '#ff4444',    // High stress/breaking

    // Grid/UI
    gridLine: 'rgba(0, 255, 65, 0.08)',
    border: 'rgba(0, 255, 65, 0.3)',
    overlay: 'rgba(10, 14, 10, 0.85)'
};
```

**Typography:**
```css
font-family: 'Courier New', monospace;
```

**Glow Effects:**
```css
text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
```

### 6. UI Layout

**Structure (from runge-kutta pattern):**
```
┌─────────────────────────────────────────────┐
│ Header (title, back link, stats: FPS, etc) │
├────────┬─────────────────────┬──────────────┤
│ Left   │                     │ Right        │
│ Side   │   Canvas Area       │ Sidebar      │
│ bar    │   (main simulation) │ (presets &   │
│ (about)│                     │  info)       │
├────────┴─────────────────────┴──────────────┤
│ Controls (sliders, tools, buttons)          │
└─────────────────────────────────────────────┘
```

**Left Sidebar - About:**
- Algorithm explanation
- Verlet integration math
- Constraint solving concept
- Use cases

**Right Sidebar - Presets & Info:**
- Preset selector dropdown
- Tool selector (radio buttons)
- Quick tips

**Canvas Overlay Stats:**
- Points: XXX
- Constraints: XXX
- Iterations: X
- FPS: XX
- Collision checks/frame: XXXX

**Bottom Controls:**
- Row 1: Preset selector, Tool selector, Clear/Reset buttons
- Row 2: Gravity strength/angle sliders
- Row 3: Physics params (iterations, mass, damping, stiffness)
- Row 4: Rendering toggles (points, constraints, fill)

### 7. Performance Optimizations

**1. Spatial Hashing:**
```javascript
// Use for collision detection
const cellSize = Math.max(20, averageConstraintLength * 2);
const spatialHash = new SpatialHash(cellSize);

// Each frame:
spatialHash.clear();
for (const point of points) {
    spatialHash.insert(point, point.id);
}

// For collision checks, only test nearby points:
const nearby = spatialHash.query(point.x, point.y, point.radius * 2);
```

**2. Typed Arrays (if using array-based storage):**
```javascript
// Instead of array of objects, use parallel arrays:
const pointCount = 1000;
const positions = new Float32Array(pointCount * 2);     // x,y pairs
const oldPositions = new Float32Array(pointCount * 2);
const masses = new Float32Array(pointCount);
const forces = new Float32Array(pointCount * 2);
const flags = new Uint8Array(pointCount);  // pinned, etc.
```

**3. Constraint Caching:**
```javascript
// Pre-calculate and cache constraint properties
class DistanceConstraint {
    constructor(p1, p2, restLength) {
        this.p1 = p1;
        this.p2 = p2;
        this.restLength = restLength;
        this.restLengthSq = restLength * restLength;  // Cache
    }
}
```

**4. Broad Phase Culling:**
```javascript
// Only process constraints for points on screen or near camera
// Skip off-screen collision detection
```

**5. Fixed Time Step:**
```javascript
const FIXED_DT = 1/60;
let accumulator = 0;

function update(deltaTime) {
    accumulator += deltaTime;
    while (accumulator >= FIXED_DT) {
        step(FIXED_DT);
        accumulator -= FIXED_DT;
    }
}
```

### 8. Rendering

**Points:**
```javascript
// Normal points
ctx.fillStyle = COLORS.pointNormal;
ctx.beginPath();
for (const point of points) {
    ctx.moveTo(point.x + pointRadius, point.y);
    ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
}
ctx.fill();

// Pinned points (different color/style)
ctx.fillStyle = COLORS.pointPinned;
ctx.strokeStyle = COLORS.primary;
ctx.lineWidth = 2;
// ... draw pinned points with outline
```

**Constraints (colored by stress):**
```javascript
for (const constraint of constraints) {
    const stress = Math.abs(constraint.currentLength - constraint.restLength) / constraint.restLength;
    const t = Math.min(stress * 5, 1);  // 0-1 range

    // Interpolate from green to yellow to red
    const color = stress < 0.5
        ? lerpColor(COLORS.constraintLow, COLORS.constraintMid, t * 2)
        : lerpColor(COLORS.constraintMid, COLORS.constraintHigh, (t - 0.5) * 2);

    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(constraint.p1.x, constraint.p1.y);
    ctx.lineTo(constraint.p2.x, constraint.p2.y);
    ctx.stroke();
}
```

**Cloth Fill (semi-transparent):**
```javascript
// For cloth/fabric, render filled polygons
ctx.fillStyle = 'rgba(0, 255, 65, 0.1)';
// Render triangles/quads based on grid structure
```

### 9. Controls & Parameters

**Physics Controls:**
- Gravity strength: 0-20 (default 9.8)
- Gravity angle: 0-360° (default 270° = down)
- Constraint iterations: 1-20 (default 5)
- Point mass: 0.5-5 (default 1)
- Damping: 0-0.99 (default 0.99)
- Constraint stiffness: 0-1 (default 1)
- Time scale: 0.1-2 (default 1)

**Visual Controls:**
- Show points (checkbox)
- Show constraints (checkbox)
- Show fill (checkbox)
- Point size: 2-10 (default 4)
- Constraint width: 1-5 (default 1)

**Preset Selector:**
```javascript
const presets = [
    'Custom',
    'Cloth',
    'Rope',
    'Chain',
    'Jello',
    'Ragdoll',
    'Bridge',
    'Hair'
];
```

### 10. File Structure

**Single HTML file: `verlet-soft-body.html`**

Sections:
1. HTML head with metadata
2. CSS styling (green terminal theme)
3. HTML body structure
4. JavaScript implementation:
   - Utility functions (color lerp, etc.)
   - SpatialHash class
   - VerletPoint class
   - Constraint classes
   - Preset factory functions
   - Tool handlers
   - Main simulation class
   - Rendering functions
   - Event listeners
   - Initialization

### 11. Implementation Phases

**Phase 1: Core Engine** ✓
- VerletPoint class
- Basic Verlet integration
- Distance constraint solving
- Canvas boundary collision

**Phase 2: Spatial Optimization** ✓
- SpatialHash implementation
- Integrate with collision detection
- Performance monitoring

**Phase 3: Presets** ✓
- Cloth factory
- Rope factory
- Basic shapes (chain, jello)

**Phase 4: UI & Styling** ✓
- Green terminal theme
- Header with stats
- Sidebars with content
- Control panel
- Canvas overlay

**Phase 5: Interactivity** ✓
- Grab tool
- Pin tool
- Cut tool
- Add obstacle tool
- Mouse/touch handlers

**Phase 6: Advanced Features** ✓
- Ragdoll preset
- Angle constraints
- Tearing (constraint breaking)
- Obstacle physics

**Phase 7: Polish** ✓
- Stress visualization (colored constraints)
- Smooth animations
- Performance stats
- Settings persistence

## Technical Considerations

**Browser Compatibility:**
- Use canvas 2D context (widely supported)
- requestAnimationFrame for smooth animation
- Fallback for older browsers if needed

**Performance Targets:**
- 60 FPS with 500 points
- 30 FPS with 1000+ points
- Spatial hashing essential for >200 points

**Mobile Support:**
- Touch event handlers
- Responsive canvas sizing
- Reduced default particle counts on mobile

**Debugging:**
- Debug mode to visualize spatial hash grid
- Performance overlay
- Console logging for profiling

## File Location

Create: `/home/user/jsheedy.github.io/experiments/verlet-soft-body.html`

## Testing Strategy

1. **Physics accuracy:** Verify energy conservation with no damping
2. **Stability:** Test with extreme parameters (high gravity, low damping)
3. **Performance:** Profile with 100, 500, 1000 points
4. **Interactivity:** Test all tools, edge cases
5. **Visual:** Verify terminal aesthetic matches design
6. **Cross-browser:** Test in Chrome, Firefox, Safari

## Success Criteria

- [ ] Smooth 60 FPS with 500 points
- [ ] All 7 presets working correctly
- [ ] All 4 tools functional
- [ ] Green terminal aesthetic applied throughout
- [ ] Spatial hashing reduces collision checks by >90%
- [ ] Stress visualization shows constraint tension
- [ ] Mobile-friendly touch controls
- [ ] Settings persistence across sessions

## Estimated Complexity

- **Lines of Code:** ~1800-2200
- **Development Time:** 4-6 hours
- **Key Challenges:**
  1. Spatial hash optimization
  2. Ragdoll preset complexity
  3. Smooth mouse interaction
  4. Constraint stress calculation
  5. Mobile responsiveness
