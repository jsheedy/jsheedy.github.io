// Camera uniform buffer
struct CameraUniforms {
    view_proj: mat4x4<f32>,
}

@group(0) @binding(0)
var<uniform> camera: CameraUniforms;

// Vertex input from buffer
struct VertexInput {
    @location(0) position: vec3<f32>,
    @location(1) normal: vec3<f32>,
}

// Vertex output to fragment shader
struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) world_position: vec3<f32>,
    @location(1) world_normal: vec3<f32>,
}

@vertex
fn vs_main(in: VertexInput) -> VertexOutput {
    var out: VertexOutput;

    // Transform vertex position to clip space
    out.clip_position = camera.view_proj * vec4<f32>(in.position, 1.0);

    // Pass world position and normal to fragment shader
    out.world_position = in.position;
    out.world_normal = normalize(in.normal);

    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    // Terminal green color scheme - base material color
    let base_green = vec3<f32>(0.0, 0.8, 0.2);  // Mid-range green

    // Single directional light from far away (like the sun)
    let light_direction = normalize(vec3<f32>(0.5, 1.0, 0.3));

    // Compute face normal from position derivatives (flat shading)
    let dpdx = dpdx(in.world_position);
    let dpdy = dpdy(in.world_position);
    let face_normal = normalize(cross(dpdx, dpdy));

    // Lambertian diffuse lighting (no ambient)
    let diffuse = max(dot(face_normal, light_direction), 0.0);

    // Apply lighting to base green color
    let final_color = base_green * diffuse;

    // Semi-transparent faces (0.7 alpha) to see wireframe underneath
    return vec4<f32>(final_color, 0.7);
}
