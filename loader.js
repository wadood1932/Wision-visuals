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
// Quantum Preloader
document.querySelectorAll('.preloader-text span').forEach((letter, index) => {
    letter.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
});

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
