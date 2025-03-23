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

// Updated Click Handler for root-level pages
document.querySelectorAll('.service-card, .explore-btn').forEach(element => {
  element.addEventListener('click', function() {
    const card = this.closest('.service-card');
    const service = card ? card.dataset.service : this.dataset.service;

    const route = service.charAt(0).toUpperCase() + service.slice(1) + ".html";

    document.querySelector('.page-transition').classList.add('start');
    new Audio('assets/film-whoosh.mp3').play();

    setTimeout(() => {
      window.location.href = route;
    }, 1000);
  });
});

// Hover Effects
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.3,
      scale: 1.02,
      ease: "power2.out"
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.3,
      scale: 1,
      ease: "power2.out"
    });
  });
});
