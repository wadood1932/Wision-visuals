document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('wision-preloader');
    const letters = document.querySelectorAll('.preloader-text span');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`;
    });
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    });
});

// QUANTUM PRELOADER SYSTEM
class QuantumPreloader {
  constructor() {
    this.preloader = document.getElementById('wision-preloader');
    this.letters = document.querySelectorAll('.preloader-text span');
    this.init();
  }

  init() {
    this.animateLetters();
    this.createParticles();
    this.bindEvents();
  }

  animateLetters() {
    this.letters.forEach((letter, index) => {
      gsap.from(letter, {
        duration: 0.8,
        opacity: 0,
        y: 40,
        rotationX: 90,
        delay: index * 0.15,
        ease: "power4.out"
      });
    });
  }

  createParticles() {
    const particleCount = 30;
    for(let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle';
      this.preloader.appendChild(particle);
      
      gsap.to(particle, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none"
      });
    }
  }

  bindEvents() {
    window.addEventListener('load', () => {
      gsap.to(this.preloader, {
        opacity: 0,
        duration: 1,
        onComplete: () => this.preloader.remove()
      });
    });
  }
}

new QuantumPreloader();
