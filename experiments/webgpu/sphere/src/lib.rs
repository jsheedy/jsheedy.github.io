mod camera;
mod renderer;
mod sphere;

use wasm_bindgen::prelude::*;

use camera::Camera;
use renderer::State;

#[wasm_bindgen]
pub struct SphereRenderer {
    state: State,
    camera: Camera,
}

#[wasm_bindgen]
impl SphereRenderer {
    /// Create a new sphere renderer attached to the specified canvas
    pub async fn new(canvas_id: &str) -> Result<SphereRenderer, JsValue> {
        // Set up panic hook for better error messages in console
        console_error_panic_hook::set_once();

        // Create renderer state
        let state = State::new_for_canvas(canvas_id).await?;

        // Create camera with initial aspect ratio
        let (width, height) = state.size;
        let aspect = width as f32 / height as f32;
        let camera = Camera::new(aspect);

        Ok(SphereRenderer { state, camera })
    }

    /// Update camera rotation (orbit control)
    pub fn orbit(&mut self, delta_azimuth: f32, delta_elevation: f32) {
        self.camera.orbit(delta_azimuth, delta_elevation);
    }

    /// Update camera distance (zoom control)
    pub fn zoom(&mut self, delta: f32) {
        self.camera.zoom(delta);
    }

    /// Pan the camera target
    pub fn pan(&mut self, delta_x: f32, delta_y: f32) {
        self.camera.pan(delta_x, delta_y);
    }

    /// Reset camera to default position
    pub fn reset_camera(&mut self) {
        self.camera.reset();
    }

    /// Set sphere subdivision level (0-5)
    pub fn set_subdivisions(&mut self, subdivisions: u32) {
        let clamped = subdivisions.clamp(0, 5);
        self.state.rebuild_sphere(clamped);
    }

    /// Set auto-rotation speed
    pub fn set_rotation_speed(&mut self, speed: f32) {
        self.state.rotation_speed = speed;
    }

    /// Render a frame
    pub fn render(&mut self, delta_time: f32) -> Result<(), JsValue> {
        // Apply auto-rotation if enabled
        if self.state.rotation_speed > 0.0 {
            self.camera.orbit(delta_time * self.state.rotation_speed, 0.0);
        }

        // Update state
        self.state.update(delta_time);

        // Update camera uniforms
        self.state.update_camera(&self.camera);

        // Render frame
        self.state
            .render()
            .map_err(|e| JsValue::from_str(&format!("Render error: {:?}", e)))?;

        Ok(())
    }

    /// Handle window resize
    pub fn resize(&mut self, width: u32, height: u32) {
        self.state.resize(width, height);
        self.camera.aspect = width as f32 / height as f32;
    }

    /// Get current vertex count for stats display
    pub fn get_vertex_count(&self) -> u32 {
        self.state.num_vertices
    }

    /// Get current subdivision level
    pub fn get_subdivisions(&self) -> u32 {
        self.state.subdivisions
    }
}
