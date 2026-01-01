use wasm_bindgen::prelude::*;
use js_sys::Math;

// Set up the global allocator
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub struct ZOrder;

impl ZOrder {
    fn interleave(n: u32) -> u32 {
        let n = (n | (n << 8)) & 0x00FF00FF;
        let n = (n | (n << 4)) & 0x0F0F0F0F;
        let n = (n | (n << 2)) & 0x33333333;
        (n | (n << 1)) & 0x55555555
    }

    pub fn encode(x: u32, y: u32) -> u32 {
        ZOrder::interleave(x) | (ZOrder::interleave(y) << 1)
    }
}

#[wasm_bindgen]
#[repr(C)]
#[derive(Clone, Copy, Debug)]
pub struct Particle {
    pub x: f32,
    pub y: f32,
    pub radius: f32,
    pub mass: f32,
    pub vx: f32,
    pub vy: f32,
    pub colliding: bool,
    z_code: u32,
    pub impulse_x: f32,
    pub impulse_y: f32,
    pub color_temp: f32,
}


#[wasm_bindgen]
pub struct Simulation {
    width: f32,
    height: f32,
    particles: Vec<Particle>,
    particle_count: usize,
    min_size: f32,
    max_size: f32,
    max_speed: f32,
    gravity: f32,
    elasticity: f32,
    fan_speed: f32,
    search_range: i32,
}

#[wasm_bindgen]
impl Simulation {
    #[wasm_bindgen(constructor)]
    pub fn new(width: f32, height: f32, particle_count: usize, min_size: f32, max_size: f32, max_speed: f32, gravity: f32, elasticity: f32, fan_speed: f32, search_range: i32) -> Simulation {
        let mut simulation = Simulation {
            width,
            height,
            particles: Vec::new(),
            particle_count,
            min_size,
            max_size,
            max_speed,
            gravity,
            elasticity,
            fan_speed,
            search_range,
        };
        simulation.reset();
        simulation
    }

    pub fn reset(&mut self) {
        self.particles = Vec::new();
        for _ in 0..self.particle_count {
            let radius = self.min_size + (Math::random() as f32) * (self.max_size - self.min_size);
            let mut p = Particle {
                x: (Math::random() as f32) * self.width,
                y: (Math::random() as f32) * self.height,
                radius,
                mass: std::f32::consts::PI * radius * radius,
                vx: ((Math::random() as f32) - 0.5) * self.max_speed,
                vy: ((Math::random() as f32) - 0.5) * self.max_speed,
                colliding: false,
                z_code: 0,
                impulse_x: 0.0,
                impulse_y: 0.0,
                color_temp: Math::random() as f32,
            };
            self.update_particle(&mut p);
            self.particles.push(p);
        }
    }

    pub fn update(&mut self) {
        for i in 0..self.particles.len() {
            let mut p = self.particles[i];
            self.update_particle(&mut p);
            self.particles[i] = p;
        }

        self.detect_collisions();
    }

    pub fn get_particles_ptr(&self) -> *const Particle {
        self.particles.as_ptr()
    }
    
    pub fn get_particle_count(&self) -> usize {
        self.particles.len()
    }

    fn update_particle(&self, p: &mut Particle) {
        p.vy += self.gravity;

        if self.fan_speed > 0.0 {
            let avg_size = (self.min_size + self.max_size) / 2.0;
            let fan_width = avg_size * 4.0;
            let fan_center_x = self.width / 2.0;
            let fan_bottom = self.height;
            let fan_top = self.height / 2.0;

            let dx = p.x - fan_center_x;
            if dx.abs() < fan_width / 2.0 {
                if p.y > fan_top {
                    let distance_from_bottom = (p.y - fan_top) / (fan_bottom - fan_top);
                    let base_fan_force = 1.5 * distance_from_bottom;
                    let horizontal_factor = 1.0 - dx.abs() / (fan_width / 2.0);
                    p.vy -= base_fan_force * horizontal_factor * self.fan_speed;
                }
            }
        }
        
        let cooling_rate = 0.01; 
        if p.color_temp > 0.0 {
            p.color_temp = (p.color_temp - cooling_rate).max(0.0);
        }

        p.x += p.vx;
        p.y += p.vy;

        if p.x - p.radius < 0.0 || p.x + p.radius > self.width {
            p.vx *= -self.elasticity;
            p.x = p.x.max(p.radius).min(self.width - p.radius);
        }
        if p.y - p.radius < 0.0 || p.y + p.radius > self.height {
            p.vy *= -self.elasticity;
            p.y = p.y.max(p.radius).min(self.height - p.radius);
        }

        let grid_x = ((p.x / self.width) * 0xFFFF as f32) as u32 & 0xFFFF;
        let grid_y = ((p.y / self.height) * 0xFFFF as f32) as u32 & 0xFFFF;
        p.z_code = ZOrder::encode(grid_x, grid_y);
    }
    
    fn detect_collisions(&mut self) {
        self.particles.sort_by(|a, b| a.z_code.cmp(&b.z_code));

        for p in self.particles.iter_mut() {
            p.colliding = false;
            p.impulse_x = 0.0;
            p.impulse_y = 0.0;
        }

        let avg_size = (self.min_size + self.max_size) / 2.0;
        let search_dist = self.search_range as f32 * avg_size * 2.0;
        let z_threshold = ((search_dist * search_dist) / (self.width * self.height) * 0xFFFFFFFF_u32 as f32) as u32;

        for i in 0..self.particles.len() {
            for j in i + 1..self.particles.len() {
                // Unsafe block to get two mutable references to particles
                unsafe {
                    let p1_ptr = &mut self.particles[i] as *mut Particle;
                    let p2_ptr = &mut self.particles[j] as *mut Particle;
                    let p1 = &mut *p1_ptr;
                    let p2 = &mut *p2_ptr;

                    let z_diff = p2.z_code - p1.z_code;
                    if z_diff > z_threshold {
                        break;
                    }

                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;
                    let dist_sq = dx * dx + dy * dy;
                    let radius_sum = p1.radius + p2.radius;

                    if dist_sq < radius_sum * radius_sum {
                        p1.colliding = true;
                        p2.colliding = true;
                        p1.color_temp = 1.0;
                        p2.color_temp = 1.0;

                        let dist = dist_sq.sqrt();
                        if dist == 0.0 { continue; }

                        let nx = dx / dist;
                        let ny = dy / dist;

                        let dvx = p1.vx - p2.vx;
                        let dvy = p1.vy - p2.vy;
                        
                        let dvn = dvx * nx + dvy * ny;

                        if dvn <= 0.0 {
                            let impulse_val = -(1.0 + self.elasticity) * dvn / (1.0 / p1.mass + 1.0 / p2.mass);

                            p1.impulse_x += (impulse_val * nx) / p1.mass;
                            p1.impulse_y += (impulse_val * ny) / p1.mass;
                            p2.impulse_x -= (impulse_val * nx) / p2.mass;
                            p2.impulse_y -= (impulse_val * ny) / p2.mass;

                            let overlap = (p1.radius + p2.radius) - dist;
                            if overlap > 0.0 {
                                let total_mass = p1.mass + p2.mass;
                                let p1_factor = p2.mass / total_mass;
                                let p2_factor = p1.mass / total_mass;
                                let separation = overlap + 0.1;

                                p1.x += nx * separation * p1_factor;
                                p1.y += ny * separation * p1_factor;
                                p2.x -= nx * separation * p2_factor;
                                p2.y -= ny * separation * p2_factor;
                            }
                        }
                    }
                }
            }
        }

        for p in self.particles.iter_mut() {
            p.vx += p.impulse_x;
            p.vy += p.impulse_y;
        }
    }

    pub fn set_particle_count(&mut self, count: usize) {
        self.particle_count = count;
    }

    pub fn set_min_size(&mut self, size: f32) {
        self.min_size = size;
    }

    pub fn set_max_size(&mut self, size: f32) {
        self.max_size = size;
    }

    pub fn set_max_speed(&mut self, speed: f32) {
        self.max_speed = speed;
    }

    pub fn set_gravity(&mut self, gravity: f32) {
        self.gravity = gravity;
    }

    pub fn set_elasticity(&mut self, elasticity: f32) {
        self.elasticity = elasticity;
    }

    pub fn set_fan_speed(&mut self, speed: f32) {
        self.fan_speed = speed;
    }

    pub fn set_search_range(&mut self, range: i32) {
        self.search_range = range;
    }

    pub fn add_particle(&mut self, x: f32, y: f32) {
        let radius = self.min_size + (Math::random() as f32) * (self.max_size - self.min_size);
        let mut p = Particle {
            x,
            y,
            radius,
            mass: std::f32::consts::PI * radius * radius,
            vx: 0.0,
            vy: 0.0,
            colliding: false,
            z_code: 0,
            impulse_x: 0.0,
            impulse_y: 0.0,
            color_temp: Math::random() as f32,
        };
        self.update_particle(&mut p);
        self.particles.push(p);
    }
}