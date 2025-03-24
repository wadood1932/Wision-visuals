// Card Entrance Animation
gsap.from(".service-card", {
  duration: 1.5,
  opacity: 0,
  y: 100,
  stagger: 0.1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".service-grid-section",
    start: "top center"
  }
});
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', function() {
    const service = this.dataset.service;
    document.querySelector('.page-transition').classList.add('start');
    new Audio('assets/film-whoosh.mp3').play();
    setTimeout(() => {
      window.location.href = `${service}.html`;
    }, 1000);
  });
});