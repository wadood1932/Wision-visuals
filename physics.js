class PhysicsEngine {
    constructor() {
        this.initScrollPhysics();
    }
    initScrollPhysics() {
        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty(
                '--scroll-depth',
                window.scrollY / document.body.scrollHeight
            );
        });
    }
}
new PhysicsEngine();