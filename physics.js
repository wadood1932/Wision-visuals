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
