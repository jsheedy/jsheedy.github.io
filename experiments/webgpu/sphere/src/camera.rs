use cgmath::{Matrix4, Point3, Vector3, InnerSpace, perspective, Deg};
use std::f32::consts::PI;

#[repr(C)]
#[derive(Copy, Clone, Debug, bytemuck::Pod, bytemuck::Zeroable)]
pub struct CameraUniforms {
    pub view_proj: [[f32; 4]; 4],
}

pub struct Camera {
    // Spherical coordinates
    pub distance: f32,    // Distance from target
    pub azimuth: f32,     // Horizontal angle (radians)
    pub elevation: f32,   // Vertical angle (radians)

    // Pan target
    pub target: Point3<f32>,

    // Projection parameters
    pub aspect: f32,
    pub fov: f32,         // Field of view in degrees
    pub near: f32,
    pub far: f32,
}

impl Camera {
    pub fn new(aspect: f32) -> Self {
        Self {
            distance: 5.0,
            azimuth: 0.0,
            elevation: 0.0,
            target: Point3::new(0.0, 0.0, 0.0),
            aspect,
            fov: 45.0,
            near: 0.1,
            far: 100.0,
        }
    }

    /// Update camera rotation (orbit)
    pub fn orbit(&mut self, delta_azimuth: f32, delta_elevation: f32) {
        self.azimuth += delta_azimuth;
        self.elevation += delta_elevation;

        // Clamp elevation to prevent gimbal lock
        let max_elevation = PI / 2.0 - 0.01;
        self.elevation = self.elevation.clamp(-max_elevation, max_elevation);
    }

    /// Update camera distance (zoom)
    pub fn zoom(&mut self, delta: f32) {
        self.distance = (self.distance * (1.0 + delta)).clamp(2.0, 50.0);
    }

    /// Pan the camera target
    pub fn pan(&mut self, delta_x: f32, delta_y: f32) {
        // Compute camera right and up vectors
        let right = self.get_right_vector();
        let up = self.get_up_vector();

        // Move target in screen space
        self.target += right * delta_x * self.distance;
        self.target += up * delta_y * self.distance;
    }

    /// Reset camera to default position
    pub fn reset(&mut self) {
        self.distance = 5.0;
        self.azimuth = 0.0;
        self.elevation = 0.0;
        self.target = Point3::new(0.0, 0.0, 0.0);
    }

    /// Compute camera position from spherical coordinates
    pub fn get_position(&self) -> Point3<f32> {
        let x = self.target.x + self.distance * self.elevation.cos() * self.azimuth.sin();
        let y = self.target.y + self.distance * self.elevation.sin();
        let z = self.target.z + self.distance * self.elevation.cos() * self.azimuth.cos();

        Point3::new(x, y, z)
    }

    /// Get camera's right vector
    fn get_right_vector(&self) -> Vector3<f32> {
        let forward = (self.target - self.get_position()).normalize();
        let world_up = Vector3::new(0.0, 1.0, 0.0);
        forward.cross(world_up).normalize()
    }

    /// Get camera's up vector
    fn get_up_vector(&self) -> Vector3<f32> {
        let forward = (self.target - self.get_position()).normalize();
        let right = self.get_right_vector();
        right.cross(forward).normalize()
    }

    /// Build combined view-projection matrix
    pub fn build_view_projection_matrix(&self) -> [[f32; 4]; 4] {
        let eye = self.get_position();
        let view = Matrix4::look_at_rh(eye, self.target, Vector3::unit_y());
        let proj = perspective(Deg(self.fov), self.aspect, self.near, self.far);

        let view_proj = proj * view;
        view_proj.into()
    }

    /// Build camera uniforms for GPU
    pub fn build_uniforms(&self) -> CameraUniforms {
        CameraUniforms {
            view_proj: self.build_view_projection_matrix(),
        }
    }
}
