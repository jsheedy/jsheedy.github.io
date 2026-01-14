// Camera uniform buffer
struct CameraUniforms {
    view_proj: mat4x4<f32>,
}

@group(0) @binding(0)
var<uniform> camera: CameraUniforms;

// Vertex input from buffer
struct VertexInput {
    @location(0) position: vec3<f32>,
}

// Vertex output to fragment shader
struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) world_position: vec3<f32>,
}

@vertex
fn vs_main(in: VertexInput) -> VertexOutput {
    var out: VertexOutput;

    // Transform vertex position to clip space
    out.clip_position = camera.view_proj * vec4<f32>(in.position, 1.0);

    // Pass world position to fragment shader for coloring
    out.world_position = in.position;

    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    // Terminal green color scheme (#00ff41)
    let base_green = vec3<f32>(0.0, 1.0, 0.25);
    let dark_green = vec3<f32>(0.0, 0.5, 0.1);

    // Create gradient based on height (y coordinate)
    // Normalize from -1..1 to 0..1
    let t = (in.world_position.y + 1.0) * 0.5;
    let color = mix(dark_green, base_green, t);

    return vec4<f32>(color, 1.0);
}
