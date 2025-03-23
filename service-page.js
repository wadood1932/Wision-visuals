document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab, .tab-content').forEach(el => {
      el.classList.remove('active');
    });
    this.classList.add('active');
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});
gsap.to(".hero-content", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".service-hero",
    scrub: true
  }
});