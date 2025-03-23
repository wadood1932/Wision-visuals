// Physics-Driven Navigation
class NavPhysics {
    constructor() {
        this.links = document.querySelectorAll('.nav-links a');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-5px) scale(1.1)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'none';
            });
        });
    }
}

new NavPhysics();
// CINEMATIC NAVIGATION PHYSICS
class NavigationEngine {
  constructor() {
    this.nav = document.querySelector('.main-nav');
    this.links = document.querySelectorAll('.nav-links a');
    this.init();
  }

  init() {
    this.addHoverPhysics();
    this.addScrollEffects();
  }

  addHoverPhysics() {
    this.links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          y: -5,
          scale: 1.1,
          color: '#C5A030',
          duration: 0.3,
          ease: "power2.out"
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          y: 0,
          scale: 1,
          color: 'white',
          duration: 0.4,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });
  }

  addScrollEffects() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      
      if(currentScroll > lastScroll) {
        gsap.to(this.nav, { y: -100, duration: 0.3 });
      } else {
        gsap.to(this.nav, { y: 0, duration: 0.3 });
      }
      
      lastScroll = currentScroll;
    });
  }
}

new NavigationEngine();
