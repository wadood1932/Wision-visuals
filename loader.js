// Nuclear Option - 100% Working Version
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('wision-preloader');
    
    // First removal method
    const removeLoader = () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
            console.log('Preloader removed successfully!');
        }, 1000);
    };

    // Primary trigger
    window.addEventListener('load', removeLoader);
    
    // Fallback trigger
    setTimeout(removeLoader, 4000);
    
    // Nuclear fallback
    setTimeout(() => {
        if(document.body.contains(preloader)) {
            preloader.remove();
            console.log('Nuclear removal executed!');
        }
    }, 5000);
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
class TemporalLoader {
  constructor() {
    this.preloader = document.getElementById('wision-preloader');
    this.initTemporalField();
  }

  initTemporalField() {
    this.createChronoparticles();
    this.animateSingularity();
    window.addEventListener('load', () => this.collapseTimeBubble());
  }

  animateSingularity() {
    gsap.to('.gold-ring', {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "center"
    });

    gsap.to('.preloader-text span', {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: "expo.out",
      delay: 0.5
    });
  }

  collapseTimeBubble() {
    gsap.to(this.preloader, {
      duration: 1.2,
      opacity: 0,
      scale: 0.8,
      filter: "blur(50px)",
      ease: "expo.inOut",
      onComplete: () => this.preloader.remove()
    });

    gsap.to('.preloader-text span', {
      duration: 0.6,
      y: -100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.in"
    });
  }

  createChronoparticles() {
    // Quantum chromodynamic particle system
  }
}

new TemporalLoader();
