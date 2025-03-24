// portfolio.js
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.scroll-reveal').forEach(el => {
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            }
        });
    });

    // Video Modal Logic
    const projects = document.querySelectorAll('.project-thumbnail');
    const modal = document.querySelector('.video-modal');
    
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const videoSrc = project.querySelector('video').dataset.src;
            modal.querySelector('.video-container').innerHTML = `
                <video controls autoplay>
                    <source src="${videoSrc}" type="video/mp4">
                </video>
            `;
            modal.style.display = 'block';
        });
    });

    // Modal Close
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
        modal.querySelector('video').remove();
    });
});
