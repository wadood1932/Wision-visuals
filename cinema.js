
// CINEMATIC HERO ENHANCEMENT
gsap.from(".gold-gradient", {
  duration: 2,
  opacity: 0,
  y: 100,
  ease: "power4.out",
  delay: 0.5
});

// PARALLAX LAYERS
gsap.utils.toArray('.parallax-layer').forEach(layer => {
  gsap.to(layer, {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      scrub: true
    }
  });
});

// CINEMATIC SECTION REVEALS
gsap.utils.toArray('.fade-up, .fade-left, .fade-right').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    x: section.classList.contains('fade-left') ? -100 : 
       section.classList.contains('fade-right') ? 100 : 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
