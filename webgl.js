// SAFE WEBGL INTEGRATION
class HolographicEngine {
  constructor() {
    if(!this.webGLAvailable()) return;
    
    this.initThreeJS();
    this.createHologram();
    this.animate();
    this.handleResize();
  }

  webGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch(e) {
      return false;
    }
  }

  initThreeJS() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.left = '50%';
    this.renderer.domElement.style.transform = 'translateX(-50%)';
    document.querySelector('.hero').prepend(this.renderer.domElement);
  }

  createHologram() {
    const geometry = new THREE.IcosahedronGeometry(3, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xC5A030,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    
    this.hologram = new THREE.Mesh(geometry, material);
    this.scene.add(this.hologram);
    this.camera.position.z = 8;
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.hologram.rotation.x += 0.004;
    this.hologram.rotation.y += 0.006;
    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}

if(document.querySelector('.hero')) {
  new HolographicEngine();
}
