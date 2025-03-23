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