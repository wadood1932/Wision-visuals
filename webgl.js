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
