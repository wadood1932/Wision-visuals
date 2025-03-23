
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
});

function initScrollReveal() {
    const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    if (!fadeElements.length) return;

    const revealOnScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load
}
