import Matter from 'matter-js';

class CinePhysics {
  constructor() {
    this.engine = Matter.Engine.create();
    this.initWorld();
    this.createInterfaceElements();
  }

  initWorld() {
    this.render = Matter.Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });
    
    Matter.Runner.run(this.engine);
    Matter.Render.run(this.render);
  }

  createInterfaceElements() {
    // Create dynamic navigation particles
    document.querySelectorAll('.nav-links a').forEach(link => {
      const bounds = link.getBoundingClientRect();
      const particle = Matter.Bodies.rectangle(
        bounds.left + bounds.width/2,
        bounds.top + bounds.height/2,
        bounds.width,
        bounds.height,
        {
          isStatic: true,
          render: {
            fillStyle: 'transparent'
          }
        }
      );
      
      Matter.World.add(this.engine.world, particle);
    });
  }
}

new CinePhysics();
