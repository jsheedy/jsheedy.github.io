# Runge-Kutta Methods Explorer

## Overview

An interactive educational tool for understanding numerical integration methods for solving ordinary differential equations (ODEs). This single-page explorer allows users to compare different numerical methods (Euler, RK2, RK4) across various physical simulations, visualizing how method choice and step size affect accuracy, stability, and computational cost.

Runge-Kutta methods are the workhorses of scientific computing—used everywhere from video game physics to spacecraft trajectory planning. This visualization makes these abstract algorithms tangible by showing their behavior on familiar physical systems.

## Numerical Methods

### Euler Method (1st Order)
The simplest numerical integration method. Uses the current derivative to step forward.

```
y_{n+1} = y_n + h * f(t_n, y_n)
```

**Properties:**
- First-order accurate: error ∝ h
- Fast but accumulates error quickly
- Can be unstable for stiff systems
- Single function evaluation per step

### RK2 / Midpoint Method (2nd Order)
Evaluates the slope at the midpoint for better accuracy.

```
k1 = f(t_n, y_n)
k2 = f(t_n + h/2, y_n + h*k1/2)
y_{n+1} = y_n + h * k2
```

**Properties:**
- Second-order accurate: error ∝ h²
- Two function evaluations per step
- Better stability than Euler
- Good balance of speed and accuracy

### RK4 / Classical Runge-Kutta (4th Order)
The "gold standard" for general-purpose ODE solving.

```
k1 = f(t_n, y_n)
k2 = f(t_n + h/2, y_n + h*k1/2)
k3 = f(t_n + h/2, y_n + h*k2/2)
k4 = f(t_n + h, y_n + h*k3)
y_{n+1} = y_n + (h/6) * (k1 + 2*k2 + 2*k3 + k4)
```

**Properties:**
- Fourth-order accurate: error ∝ h⁴
- Four function evaluations per step
- Excellent stability for most systems
- Industry standard for non-stiff ODEs

## Simulations

### 1. Simple Pendulum
A classic nonlinear oscillator demonstrating energy conservation.

**State:** [θ, ω] (angle, angular velocity)

**Equations:**
```
dθ/dt = ω
dω/dt = -(g/L) * sin(θ)
```

**Parameters:**
- Length (L): 1-5 meters
- Gravity (g): adjustable
- Initial angle: -180° to 180°
- Damping (optional): 0-1

**Visualization:** Pendulum arm with bob, phase portrait (θ vs ω), energy plot

**Educational Value:** Shows how Euler fails to conserve energy (spiral outward in phase space) while RK4 maintains it.

### 2. Orbital Mechanics (Two-Body Problem)
Planet/satellite orbiting a central mass under gravity.

**State:** [x, y, vx, vy] (position and velocity)

**Equations:**
```
dx/dt = vx
dy/dt = vy
dvx/dt = -G*M*x / r³
dvy/dt = -G*M*y / r³
where r = √(x² + y²)
```

**Parameters:**
- Central mass (M)
- Initial position and velocity
- Orbital eccentricity preset selector

**Visualization:** Orbital path with trail, central body, velocity vector, orbital elements display

**Educational Value:** Demonstrates how Euler causes orbits to spiral inward/outward while RK4 maintains closed ellipses.

### 3. Lorenz Attractor
The famous chaotic system that launched chaos theory.

**State:** [x, y, z] (3D, projected to 2D)

**Equations:**
```
dx/dt = σ(y - x)
dy/dt = x(ρ - z) - y
dz/dt = xy - βz
```

**Classic Parameters:**
- σ (sigma) = 10
- ρ (rho) = 28
- β (beta) = 8/3

**Visualization:** 3D butterfly projected to 2D (XY, XZ, or YZ plane selectable), color-coded by time or z-value

**Educational Value:** Shows sensitive dependence on initial conditions—tiny numerical differences lead to completely different trajectories.

### 4. Spring System (Damped Harmonic Oscillator)
Mass on a spring with damping.

**State:** [x, v] (position, velocity)

**Equations:**
```
dx/dt = v
dv/dt = -(k/m)*x - (c/m)*v
```

**Parameters:**
- Spring constant (k): 0.1-10
- Mass (m): 0.1-5
- Damping coefficient (c): 0-2
- Initial displacement

**Modes:**
- Underdamped (oscillatory decay)
- Critically damped (fastest return)
- Overdamped (slow return)

**Visualization:** Spring animation, displacement vs time plot, phase portrait

**Educational Value:** Analytical solution available—can show exact error comparison.

### 5. Projectile with Drag
Ballistic motion with quadratic air resistance.

**State:** [x, y, vx, vy]

**Equations:**
```
dx/dt = vx
dy/dt = vy
dvx/dt = -k*v*vx  (where v = √(vx² + vy²))
dvy/dt = -g - k*v*vy
```

**Parameters:**
- Launch angle: 0-90°
- Launch velocity: 10-100 m/s
- Drag coefficient (k): 0-0.1
- Gravity (g): adjustable

**Visualization:** Trajectory path, velocity vectors, comparison with drag-free parabola

**Educational Value:** No analytical solution with drag—numerical methods essential. Shows how drag affects range and max height.

### 6. Earth-Moon Rocket Transfer
Rocket traveling from Earth to Moon in Earth-Moon gravitational field.

**State:** [x, y, vx, vy, fuel]

**Equations:**
```
dx/dt = vx
dy/dt = vy
dvx/dt = -G*Me*x/re³ - G*Mm*(x-xm)/rm³ + Tx/m
dvy/dt = -G*Me*y/re³ - G*Mm*(y-ym)/rm³ + Ty/m
dfuel/dt = -throttle * burn_rate
```

Where:
- re = distance to Earth center
- rm = distance to Moon center
- T = thrust vector (user controlled or pre-programmed)

**Parameters:**
- Initial orbit altitude
- Thrust magnitude
- Burn timing/duration
- Thrust direction program

**Visualization:**
- Earth and Moon (to scale or schematic)
- Rocket trajectory with trail
- Gravitational field lines (optional)
- Fuel gauge
- Distance indicators

**Educational Value:** Shows the three-body problem complexity, Hohmann transfer concepts, and how small thrust timing errors compound.

## Page Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ◄ experiments          RUNGE-KUTTA METHODS EXPLORER                     │
├────────────────┬────────────────────────────────────┬────────────────────┤
│                │                                    │                    │
│  ABOUT         │                                    │  CURRENT SELECTION │
│                │                                    │                    │
│  What are      │                                    │  ┌──────────────┐  │
│  Runge-Kutta   │           MAIN CANVAS              │  │ METHOD: RK4  │  │
│  methods?      │                                    │  │              │  │
│                │      [Simulation renders here]     │  │ 4th order    │  │
│  [Educational  │                                    │  │ accurate...  │  │
│   text about   │                                    │  └──────────────┘  │
│   numerical    │                                    │                    │
│   integration] │                                    │  ┌──────────────┐  │
│                │                                    │  │ SYSTEM:      │  │
│                │                                    │  │ Pendulum     │  │
│                │                                    │  │              │  │
│                │                                    │  │ Simple       │  │
│                │                                    │  │ harmonic...  │  │
│                │                                    │  └──────────────┘  │
│                │                                    │                    │
├────────────────┴────────────────────────────────────┴────────────────────┤
│  Method: [▼ All / Euler / RK2 / RK4 ]    System: [▼ Pendulum        ]    │
│  ☑ Euler (red)  ☑ RK2 (yellow)  ☑ RK4 (green)                            │
│                                                                          │
│  Step Size: [=======●===] 0.01s     Speed: [====●======] 1x              │
│                                                                          │
│  [System-specific parameter controls here]                               │
│                                                                          │
│  [ ▶ Run ]  [ ⏸ Pause ]  [ ↺ Reset ]  [ 📊 Show Stats ]                  │
└──────────────────────────────────────────────────────────────────────────┘
```

## Interactive Features

### Method Selection
- **Dropdown**: Select "All", "Euler", "RK2", or "RK4"
- **Checkboxes**: Toggle individual methods on/off when viewing multiple
- **Color coding**:
  - Euler: Red (#ff4444)
  - RK2: Yellow (#ffff44)
  - RK4: Green (#44ff44)

### System Selection
- Dropdown to switch between all 6 simulations
- Smooth transition/reset when switching
- System-specific controls appear dynamically

### Simulation Controls
- **Step size slider**: 0.001 to 0.1 seconds (logarithmic scale)
- **Speed slider**: 0.25x to 4x playback speed
- **Run/Pause/Reset buttons**
- **Step button**: Advance one integration step (educational mode)

### Visualization Options
- **Show trails**: Toggle trajectory history
- **Trail length**: Short/Medium/Long/Infinite
- **Show vectors**: Display velocity/acceleration arrows
- **Show phase plot**: Secondary canvas with phase portrait
- **Show energy**: Plot total energy over time (where applicable)
- **Grid overlay**: Reference grid on canvas

### Statistics Display
- Current time
- Step count
- Energy (for conservative systems)
- Error vs analytical (where available)
- Computation time per method

## Visual Style

**Terminal/Matrix Aesthetic** (consistent with boids, collide-o-scope)

### Colors
```css
--bg-primary: #0a0e0a;
--bg-secondary: #0d120d;
--text-primary: #00ff41;
--text-dim: #00aa2a;
--accent-glow: rgba(0, 255, 65, 0.3);
--euler-color: #ff4444;
--rk2-color: #ffff44;
--rk4-color: #44ff44;
--grid-color: rgba(0, 255, 65, 0.1);
```

### Typography
```css
font-family: 'Courier New', monospace;
```

### Effects
- Subtle text-shadow glow on headers
- Scanline overlay (optional, toggle-able)
- Smooth CSS transitions on controls
- Canvas glow effects on trajectories

### Sidebar Styling
- Dark semi-transparent background
- Scrollable content areas
- Collapsible sections
- Monospace text for equations

## Technical Implementation

### Core Architecture

```javascript
// Generic integrator interface
class Integrator {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    step(state, derivative, dt) {
        throw new Error('Implement in subclass');
    }
}

class EulerIntegrator extends Integrator {
    step(state, derivative, dt) {
        const k1 = derivative(state);
        return state.map((s, i) => s + dt * k1[i]);
    }
}

class RK2Integrator extends Integrator {
    step(state, derivative, dt) {
        const k1 = derivative(state);
        const midState = state.map((s, i) => s + 0.5 * dt * k1[i]);
        const k2 = derivative(midState);
        return state.map((s, i) => s + dt * k2[i]);
    }
}

class RK4Integrator extends Integrator {
    step(state, derivative, dt) {
        const k1 = derivative(state);
        const k2 = derivative(state.map((s, i) => s + 0.5 * dt * k1[i]));
        const k3 = derivative(state.map((s, i) => s + 0.5 * dt * k2[i]));
        const k4 = derivative(state.map((s, i) => s + dt * k3[i]));
        return state.map((s, i) =>
            s + (dt / 6) * (k1[i] + 2*k2[i] + 2*k3[i] + k4[i])
        );
    }
}
```

### Simulation Interface

```javascript
// Each simulation implements this interface
class Simulation {
    constructor() {
        this.state = [];      // Current state vector
        this.params = {};     // Adjustable parameters
        this.trails = [];     // History for each integrator
    }

    // Return derivative of state
    derivative(state) {
        throw new Error('Implement in subclass');
    }

    // Reset to initial conditions
    reset() {
        throw new Error('Implement in subclass');
    }

    // Render current state to canvas
    render(ctx, integratorStates) {
        throw new Error('Implement in subclass');
    }

    // Return parameter UI configuration
    getParameterConfig() {
        return [];
    }

    // Return description text
    getDescription() {
        return { title: '', body: '' };
    }
}
```

### Example: Pendulum Implementation

```javascript
class PendulumSimulation extends Simulation {
    constructor() {
        super();
        this.params = {
            length: 2.0,      // meters
            gravity: 9.81,    // m/s²
            damping: 0.0,     // damping coefficient
            initialAngle: Math.PI / 2  // 90 degrees
        };
        this.reset();
    }

    derivative(state) {
        const [theta, omega] = state;
        const { length, gravity, damping } = this.params;
        return [
            omega,
            -(gravity / length) * Math.sin(theta) - damping * omega
        ];
    }

    reset() {
        this.state = [this.params.initialAngle, 0];
    }

    render(ctx, integratorStates) {
        const { width, height } = ctx.canvas;
        const cx = width / 2;
        const cy = height / 3;
        const scale = 100; // pixels per meter

        for (const [integrator, state] of integratorStates) {
            const [theta] = state;
            const x = cx + this.params.length * scale * Math.sin(theta);
            const y = cy + this.params.length * scale * Math.cos(theta);

            ctx.strokeStyle = integrator.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(x, y);
            ctx.stroke();

            ctx.fillStyle = integrator.color;
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    getParameterConfig() {
        return [
            { name: 'length', label: 'Length (m)', min: 0.5, max: 5, step: 0.1 },
            { name: 'gravity', label: 'Gravity (m/s²)', min: 1, max: 20, step: 0.1 },
            { name: 'damping', label: 'Damping', min: 0, max: 1, step: 0.01 },
            { name: 'initialAngle', label: 'Initial Angle (°)', min: -180, max: 180, step: 1, transform: deg => deg * Math.PI / 180 }
        ];
    }

    getDescription() {
        return {
            title: 'Simple Pendulum',
            body: `A mass suspended from a pivot, swinging under gravity.
                   The motion follows: θ'' = -(g/L)sin(θ)

                   Watch how Euler's method fails to conserve energy
                   (the pendulum gains amplitude over time), while RK4
                   maintains stable oscillations.

                   Try increasing the step size to see instability emerge.`
        };
    }
}
```

### Main Loop

```javascript
class RKExplorer {
    constructor() {
        this.integrators = [
            new EulerIntegrator('Euler', '#ff4444'),
            new RK2Integrator('RK2', '#ffff44'),
            new RK4Integrator('RK4', '#44ff44')
        ];

        this.simulations = {
            pendulum: new PendulumSimulation(),
            orbital: new OrbitalSimulation(),
            lorenz: new LorenzSimulation(),
            spring: new SpringSimulation(),
            projectile: new ProjectileSimulation(),
            rocket: new RocketSimulation()
        };

        this.currentSim = 'pendulum';
        this.activeIntegrators = new Set(['Euler', 'RK2', 'RK4']);
        this.dt = 0.01;
        this.running = false;
        this.states = new Map(); // integrator -> state

        this.init();
    }

    animate() {
        if (this.running) {
            const sim = this.simulations[this.currentSim];

            for (const integrator of this.integrators) {
                if (this.activeIntegrators.has(integrator.name)) {
                    const state = this.states.get(integrator.name);
                    const newState = integrator.step(
                        state,
                        s => sim.derivative(s),
                        this.dt
                    );
                    this.states.set(integrator.name, newState);
                }
            }
        }

        this.render();
        requestAnimationFrame(() => this.animate());
    }
}
```

## Description Panel Content

### Left Sidebar (Static Overview)

```markdown
## What are Runge-Kutta Methods?

Runge-Kutta methods are numerical techniques for solving
ordinary differential equations (ODEs) of the form:

    dy/dt = f(t, y)

Given an initial value y(0), these methods approximate
the solution by taking discrete steps forward in time.

### Why Different Methods?

**Euler (1st order)**: Simple but inaccurate. Uses only
the slope at the current point.

**RK2 (2nd order)**: Checks the slope at the midpoint
for better accuracy.

**RK4 (4th order)**: Evaluates four slopes and combines
them with weighted average. Industry standard.

### Key Tradeoffs

- **Accuracy vs Speed**: Higher-order methods need more
  computations per step but can use larger steps.

- **Stability**: Some methods become unstable with large
  step sizes or stiff equations.

- **Energy Conservation**: For physics simulations,
  maintaining conserved quantities matters.

### What to Look For

- How do trajectories diverge over time?
- What happens when you increase step size?
- Which method conserves energy best?
- Where does Euler visibly fail?
```

### Right Sidebar (Dynamic - updates with selection)

Content changes based on selected method and simulation. Shows:
- Mathematical formulation
- Key properties
- What to observe
- Tips for that combination

## Performance Considerations

- Use `requestAnimationFrame` for smooth animation
- Pre-allocate arrays for state vectors
- Limit trail history length (configurable)
- Use typed arrays for large simulations (Lorenz attractor)
- Consider Web Workers for heavy computations (rocket simulation)

## Settings Persistence

Use localStorage to remember:
- Last selected simulation
- Active integrators
- Step size preference
- Visual options (trails, grid, etc.)
- Per-simulation parameter values

## Educational Value

1. **Visceral understanding** of numerical accuracy vs step size
2. **Energy conservation** visualization in conservative systems
3. **Chaos theory** introduction via Lorenz attractor
4. **Real-world applications** from physics to aerospace
5. **Method comparison** helps choose appropriate solver
6. **Interactive exploration** beats textbook equations

## Implementation Priority

**High priority** - Unique educational tool not commonly found online. Strong synergy with existing physics simulations (barnes-hut, boids). Demonstrates practical numerical methods.

## Suggested Implementation Order

1. Core integrator classes (Euler, RK2, RK4)
2. Page layout with sidebars and controls
3. Simple Pendulum simulation (easiest to debug)
4. Spring system (has analytical solution for validation)
5. Orbital mechanics
6. Projectile with drag
7. Lorenz attractor
8. Earth-Moon rocket transfer (most complex)
9. Polish: trails, stats, persistence

## References

- Runge, C. (1895). "Über die numerische Auflösung von Differentialgleichungen"
- Kutta, W. (1901). "Beitrag zur näherungsweisen Integration totaler Differentialgleichungen"
- Press et al. (2007). "Numerical Recipes" Chapter 17
- Hairer et al. (1993). "Solving Ordinary Differential Equations I"
- Lorenz, E.N. (1963). "Deterministic Nonperiodic Flow"
