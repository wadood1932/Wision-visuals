// Safe WebGL Initializer
function initWebGL() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.hero').appendChild(renderer.domElement);

    // Basic safety animation
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

// Conditional load to prevent breaks
if (typeof THREE !== 'undefined') {
    initWebGL();
} else {
    console.log('WebGL disabled for stability');
}
// SAFE WEBGL INTEGRATION
class HolographicEngine {
  constructor() {
    if(!this.webGLAvailable()) return;
    
    this.initThreeJS();
    this.createHologram();
    this.animate();
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
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
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
}

new HolographicEngine();
