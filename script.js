
// ===== WISION VISUALS SCRIPT.JS =====

// Preloader fade out after page load
window.addEventListener("load", () => {
  const preloader = document.getElementById("wision-preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.remove(), 1500);
  }
});

// Page Transition (Gold Wipe Animation)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.href === window.location.href) return;
      e.preventDefault();

      const transition = document.createElement("div");
      transition.className = "page-transition";
      document.body.appendChild(transition);
      transition.classList.add("start");

      transition.addEventListener("animationend", () => {
        window.location.href = link.href;
      }, { once: true });
    });
  });

  // Scroll Reveal
  const revealEls = document.querySelectorAll(".fade-up, .fade-left, .fade-right");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px"
  });

  revealEls.forEach(el => observer.observe(el));
});
// Dynamic parallax with inertia
document.addEventListener('mousemove', (e) => {
  const layers = document.querySelectorAll('.parallax-layer');
  const x = (e.clientX - window.innerWidth/2) * 0.05;
  const y = (e.clientY - window.innerHeight/2) * 0.05;
  
  layers.forEach((layer, i) => {
    layer.style.transform = `
      translateX(${x * (i+1)}px)
      translateY(${y * (i+1)}px)
      rotateX(${y * 0.2}deg)
      rotateY(${x * 0.2}deg)
    `;
  });
});
// Hybrid scroll handler
let lastScroll = 0;
const scrollSensitivity = 0.4;

window.addEventListener('wheel', (e) => {
  const delta = Math.sign(e.deltaY) * 120;
  lastScroll = window.scrollY + (delta * scrollSensitivity);
  
  window.scrollTo({
    top: lastScroll,
    behavior: 'smooth'
  });

  // Trigger kinetic fade on sections
  document.querySelectorAll('.content-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    const progress = 1 - Math.abs(rect.top) / window.innerHeight;
    section.style.opacity = Math.pow(progress, 3);
    section.style.transform = `scale(${0.95 + (progress * 0.05)})`;
  });
}, { passive: true });
// Quantum reveal system
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const elements = entry.target.querySelectorAll('*');
      elements.forEach((el, i) => {
        const delay = i * 60;
        el.style.setProperty('--reveal-delay', `${delay}ms`);
        el.classList.add('quantum-reveal');
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.content-section').forEach(section => {
  sectionObserver.observe(section);
});
// AI-powered load prediction
const preloaderAI = {
  init() {
    this.predictAssets();
    window.addEventListener('load', this.smartFade.bind(this));
  },

  predictAssets() {
    const assets = [...document.querySelectorAll('img, video')];
    let loadedCount = 0;
    
    assets.forEach(asset => {
      if(asset.complete) {
        loadedCount++;
        this.adjustTiming(loadedCount/assets.length);
      } else {
        asset.addEventListener('load', () => {
          loadedCount++;
          this.adjustTiming(loadedCount/assets.length);
        });
      }
    });
  },

  adjustTiming(progress) {
    const preloader = document.getElementById('wision-preloader');
    const targetDuration = Math.max(2000, 3000 * (1 - progress));
    preloader.style.transitionDuration = `${targetDuration}ms`;
  },

  smartFade() {
    const preloader = document.getElementById('wision-preloader');
    preloader.style.transform = 'translateY(-100vh) skewY(-8deg)';
    preloader.style.opacity = '0';
  }
};

preloaderAI.init();
// Dynamic light source
document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});
// Quantum-scroll™ system with predictive rendering
let lastKnownPos = 0;
let ticking = false;
const scrollDampening = 0.04;

function applyScrollPhysics(position) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach((section, index) => {
    const parallaxFactor = 1 + (index * 0.2);
    const depthOffset = position * parallaxFactor;
    
    gsap.to(section, {
      y: -depthOffset * 0.6,
      rotationX: position * 0.02,
      rotationY: position * 0.01,
      ease: "power3.out",
      overwrite: true
    });
  });
}

window.addEventListener('scroll', () => {
  lastKnownPos = window.scrollY;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      applyScrollPhysics(lastKnownPos);
      ticking = false;
    });
    ticking = true;
  }
});
// Photon-based reveal system
const revealManager = {
  init() {
    this.setupQuantumObserver();
    this.createDepthBuffer();
  },

  setupQuantumObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.animateEntrance(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -15% 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  },

  animateEntrance(element) {
    const delay = element.dataset.revealDelay || 0;
    const stagger = element.dataset.revealStagger || 50;
    
    gsap.from(element, {
      duration: 1.2,
      opacity: 0,
      y: 80,
      rotationX: 15,
      skewY: 2,
      ease: "expo.out",
      delay: delay/1000,
      stagger: {
        each: stagger/1000,
        from: "random"
      }
    });
  },

  createDepthBuffer() {
    const depthCanvas = document.createElement('canvas');
    depthCanvas.classList.add('depth-buffer');
    document.body.appendChild(depthCanvas);
    
    // WebGL depth processing would be implemented here
  }
};

revealManager.init();
class QuantumLoader {
  constructor() {
    this.preloader = document.getElementById('wision-preloader');
    this.ring = document.querySelector('.gold-ring');
    this.letters = document.querySelectorAll('.preloader-text span');
    this.init();
  }

  init() {
    this.animateEntanglement();
    this.createParticleField();
    window.addEventListener('load', () => this.beginCollapse());
  }

  animateEntanglement() {
    gsap.to(this.ring, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });

    this.letters.forEach((letter, i) => {
      gsap.from(letter, {
        duration: 1.2,
        opacity: 0,
        y: 40,
        rotationX: 90,
        delay: i * 0.15,
        ease: "expo.out"
      });
    });
  }

  beginCollapse() {
    gsap.to(this.preloader, {
      duration: 1.5,
      opacity: 0,
      y: -100,
      rotationX: 45,
      ease: "expo.inOut",
      onComplete: () => this.preloader.remove()
    });

    this.letters.forEach((letter, i) => {
      gsap.to(letter, {
        duration: 0.8,
        opacity: 0,
        y: -60,
        delay: i * 0.1,
        ease: "expo.in"
      });
    });
  }

  createParticleField() {
    // Quantum particle animation logic
  }
}

new QuantumLoader();
// AI-powered interaction system
class CineEngine {
  constructor() {
    this.initSpatialTracking();
    this.createHolographicDOM();
  }

  initSpatialTracking() {
    document.addEventListener('mousemove', (e) => {
      this.calculateDepthField(e);
      this.updateQuantumElements(e);
    });
    
    window.addEventListener('scroll', this.handleRelativisticScroll.bind(this));
  }

  calculateDepthField(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    
    document.documentElement.style.setProperty('--depth-x', x * 20 + 'px');
    document.documentElement.style.setProperty('--depth-y', y * 20 + 'px');
  }

  handleRelativisticScroll() {
    const scrollPower = Math.min(window.scrollY / 1000, 1);
    document.documentElement.style.setProperty('--space-curve', scrollPower * 15 + 'deg');
  }

  createHolographicDOM() {
    document.querySelectorAll('.holographic').forEach(el => {
      const hologram = document.createElement('div');
      hologram.className = 'hologram-effect';
      el.appendChild(hologram);
    });
  }
}

new CineEngine();
// In script.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/GLTFLoader.js';

class CineRenderer {
  constructor() {
    this.initQuantumScene();
    this.loadHolographicAssets();
  }

  initQuantumScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.parallax-container').appendChild(this.renderer.domElement);

    // Create quantum field
    this.geometry = new THREE.IcosahedronGeometry(15, 5);
    this.material = new THREE.MeshPhysicalMaterial({
      color: 0xC5A030,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.9,
    });
    
    this.tesseract = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.tesseract);
    
    this.camera.position.z = 30;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.tesseract.rotation.x += 0.004;
    this.tesseract.rotation.y += 0.006;
    this.renderer.render(this.scene, this.camera);
  }
}

new CineRenderer().animate();
import * as tf from '@tensorflow/tfjs';

class VisionAI {
  constructor() {
    this.model = null;
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('/models/cine-ai.json');
    this.analyzeUserBehavior();
  }

  analyzeUserBehavior() {
    document.addEventListener('mousemove', throttle((e) => {
      const inputTensor = tf.tensor2d([
        [e.clientX/window.innerWidth, e.clientY/window.innerHeight]
      ]);
      const prediction = this.model.predict(inputTensor);
      this.adjustLayout(prediction);
    }, 100));
  }

  adjustLayout(prediction) {
    const [styleWeight, contentWeight] = prediction.dataSync();
    document.documentElement.style.setProperty('--style-weight', styleWeight);
    document.documentElement.style.setProperty('--content-weight', contentWeight);
  }
}

new VisionAI();
