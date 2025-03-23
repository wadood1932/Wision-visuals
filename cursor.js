
class CINEMA_CURSOR {
  constructor() {
    this.cursor = document.createElement('div');
    this.cursor.id = 'cinematic-cursor';
    document.body.appendChild(this.cursor);

    this.trail = [];
    for(let i = 0; i < 5; i++) {
      const trailDot = document.createElement('div');
      trailDot.className = 'cursor-trail';
      document.body.appendChild(trailDot);
      this.trail.push(trailDot);
    }

    this.pos = { x: 0, y: 0 };
    this.trailPos = Array(5).fill({x:0,y:0});
    
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.pos.x = e.clientX;
      this.pos.y = e.clientY;
      this.updateCursor();
    });

    gsap.ticker.add(() => this.updateTrail());
  }

  updateCursor() {
    gsap.to(this.cursor, {
      x: this.pos.x,
      y: this.pos.y,
      duration: 0.12,
      ease: "power2.out"
    });
  }

  updateTrail() {
    this.trailPos.unshift({...this.pos});
    this.trailPos.pop();

    this.trail.forEach((dot, index) => {
      const pos = this.trailPos[index];
      gsap.to(dot, {
        x: pos.x,
        y: pos.y,
        opacity: 1 - (index * 0.2),
        scale: 1 - (index * 0.15),
        duration: 0.3
      });
    });
  }
}

new CINEMA_CURSOR();
