use std::collections::HashMap;

#[repr(C)]
#[derive(Copy, Clone, Debug, bytemuck::Pod, bytemuck::Zeroable)]
pub struct Vertex {
    pub position: [f32; 3],
    pub normal: [f32; 3],
}

impl Vertex {
    fn new(x: f32, y: f32, z: f32) -> Self {
        // For a sphere, the normal is the same as the normalized position
        let len = (x * x + y * y + z * z).sqrt();
        let nx = x / len;
        let ny = y / len;
        let nz = z / len;
        Self {
            position: [x, y, z],
            normal: [nx, ny, nz],
        }
    }

    fn normalized(&self) -> Self {
        let [x, y, z] = self.position;
        let len = (x * x + y * y + z * z).sqrt();
        Self::new(x / len, y / len, z / len)
    }

    fn midpoint(&self, other: &Self) -> Self {
        let [x1, y1, z1] = self.position;
        let [x2, y2, z2] = other.position;
        Self::new((x1 + x2) / 2.0, (y1 + y2) / 2.0, (z1 + z2) / 2.0)
    }

    fn scaled(&self, factor: f32) -> Self {
        let [x, y, z] = self.position;
        let [nx, ny, nz] = self.normal;
        Self {
            position: [x * factor, y * factor, z * factor],
            normal: [nx, ny, nz], // Normal stays normalized
        }
    }
}

/// Generate an icosphere with the specified number of subdivisions and radius.
/// Returns (vertices, indices) where indices define triangles.
///
/// Subdivision levels:
/// - 0: 12 vertices, 20 triangles (base icosahedron)
/// - 1: 42 vertices, 80 triangles
/// - 2: 162 vertices, 320 triangles
/// - 3: 642 vertices, 1,280 triangles
/// - 4: 2,562 vertices, 5,120 triangles
/// - 5: 10,242 vertices, 20,480 triangles
pub fn generate_icosphere(subdivisions: u32, radius: f32) -> (Vec<Vertex>, Vec<u32>) {
    // Start with icosahedron using golden ratio
    let phi = (1.0 + 5.0_f32.sqrt()) / 2.0;
    let t = 1.0;

    // 12 vertices of base icosahedron (normalized)
    let mut vertices = vec![
        Vertex::new(-t, phi, 0.0).normalized(),
        Vertex::new(t, phi, 0.0).normalized(),
        Vertex::new(-t, -phi, 0.0).normalized(),
        Vertex::new(t, -phi, 0.0).normalized(),
        Vertex::new(0.0, -t, phi).normalized(),
        Vertex::new(0.0, t, phi).normalized(),
        Vertex::new(0.0, -t, -phi).normalized(),
        Vertex::new(0.0, t, -phi).normalized(),
        Vertex::new(phi, 0.0, -t).normalized(),
        Vertex::new(phi, 0.0, t).normalized(),
        Vertex::new(-phi, 0.0, -t).normalized(),
        Vertex::new(-phi, 0.0, t).normalized(),
    ];

    // 20 triangular faces of base icosahedron (indices into vertices)
    let mut triangles = vec![
        // 5 faces around point 0
        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],
        // 5 adjacent faces
        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],
        // 5 faces around point 3
        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],
        // 5 adjacent faces
        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1],
    ];

    // Subdivide triangles
    for _ in 0..subdivisions {
        let mut new_triangles = Vec::new();
        let mut edge_midpoints: HashMap<(usize, usize), usize> = HashMap::new();

        for &[v1, v2, v3] in &triangles {
            // Get or create midpoint vertices
            let a = get_midpoint(&mut vertices, &mut edge_midpoints, v1, v2);
            let b = get_midpoint(&mut vertices, &mut edge_midpoints, v2, v3);
            let c = get_midpoint(&mut vertices, &mut edge_midpoints, v3, v1);

            // Create 4 new triangles
            new_triangles.push([v1, a, c]);
            new_triangles.push([v2, b, a]);
            new_triangles.push([v3, c, b]);
            new_triangles.push([a, b, c]);
        }

        triangles = new_triangles;
    }

    // Scale vertices to radius
    let scaled_vertices: Vec<Vertex> = vertices.iter().map(|v| v.scaled(radius)).collect();

    // Convert triangle vertex indices to u32 indices
    let mut indices = Vec::new();
    for triangle in &triangles {
        indices.push(triangle[0] as u32);
        indices.push(triangle[1] as u32);
        indices.push(triangle[2] as u32);
    }

    (scaled_vertices, indices)
}

/// Get the midpoint between two vertices, creating a new vertex if needed.
/// The midpoint is normalized to lie on the sphere surface.
fn get_midpoint(
    vertices: &mut Vec<Vertex>,
    cache: &mut HashMap<(usize, usize), usize>,
    v1: usize,
    v2: usize,
) -> usize {
    // Ensure consistent ordering for cache key
    let key = if v1 < v2 { (v1, v2) } else { (v2, v1) };

    if let Some(&idx) = cache.get(&key) {
        return idx;
    }

    // Create new midpoint vertex, normalize to sphere surface
    let midpoint = vertices[v1].midpoint(&vertices[v2]).normalized();
    let idx = vertices.len();
    vertices.push(midpoint);
    cache.insert(key, idx);
    idx
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_icosphere_vertex_counts() {
        let (verts0, indices0) = generate_icosphere(0, 1.0);
        assert_eq!(verts0.len(), 12);
        assert_eq!(indices0.len(), 60); // 20 triangles * 3 indices

        let (verts1, indices1) = generate_icosphere(1, 1.0);
        assert!(verts1.len() > 12);
        assert!(indices1.len() > indices0.len());
    }

    #[test]
    fn test_icosphere_radius() {
        let (vertices, _) = generate_icosphere(0, 2.0);
        for v in vertices {
            let [x, y, z] = v.position;
            let dist = (x * x + y * y + z * z).sqrt();
            assert!((dist - 2.0).abs() < 0.01);
        }
    }
}
