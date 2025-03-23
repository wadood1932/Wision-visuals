let scene, camera, renderer, particles;
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#service-canvas'), alpha: true });
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  for(let i = 0; i < 2000; i++) {
    positions.push(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ size: 2, color: 0xC5A030 });
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
  animate();
}
function animate() {
  requestAnimationFrame(animate);
  particles.rotation.x += 0.001;
  particles.rotation.y += 0.002;
  renderer.render(scene, camera);
}
init();