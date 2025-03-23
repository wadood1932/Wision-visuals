
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


// LIGHT LEAK ANIMATIONS
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollDelta = window.scrollY - lastScroll;
  lastScroll = window.scrollY;

  gsap.to("#light-leaks div", {
    opacity: Math.min(Math.abs(scrollDelta * 0.02), 0.3),
    scale: 1 + (Math.abs(scrollDelta) * 0.005),
    duration: 1.5,
    ease: "expo.out"
  });
});

// RANDOM DRIFT
gsap.to("#light-leaks div", {
  duration: 15,
  x: "random(-30,30)",
  y: "random(-20,20)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
