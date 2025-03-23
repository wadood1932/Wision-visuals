
// THREE.js ENHANCED SYSTEM
let camera, scene, renderer, particles;
let mouseX = 0, mouseY = 0;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 3000);
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ 
    canvas: document.querySelector('#particle-canvas'),
    alpha: true,
    antialias: true 
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // GOLD PARTICLE FIELD
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 10000; i++) {
    vertices.push(
      Math.random() * 6000 - 3000,
      Math.random() * 6000 - 3000,
      Math.random() * 6000 - 3000
    );
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  
  const material = new THREE.PointsMaterial({
    size: 3,
    color: 0xC5A030,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // DEVICE ORIENTATION
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth/2) * 0.05;
    mouseY = (e.clientY - window.innerHeight/2) * 0.05;
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  
  particles.rotation.x += 0.0001 + mouseY * 0.00002;
  particles.rotation.y += 0.0001 + mouseX * 0.00002;
  
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  
  renderer.render(scene, camera);
}

init();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
