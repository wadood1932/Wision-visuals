
// THREE.js PARTICLE SYSTEM
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#particle-canvas'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

// Gold particles
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 5000; i++) {
  vertices.push(
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000
  );
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
  size: 2,
  color: 0xC5A030,
  transparent: true,
  opacity: 0.5
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);
camera.position.z = 1000;

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.x += 0.0001;
  particles.rotation.y += 0.0001;
  renderer.render(scene, camera);
}
animate();
