// FILMIC PAGE TRANSITIONS
class CineTransition {
  constructor() {
    this.links = document.querySelectorAll('[data-transition]');
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => this.handleTransition(e, link.href));
    });
  }

  handleTransition(e, target) {
    e.preventDefault();
    const transition = document.createElement('div');
    transition.className = 'page-transition';

    document.body.appendChild(transition);
    
    gsap.to(transition, {
      scaleX: 1,
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => window.location.href = target
    });
  }
}

new CineTransition();
