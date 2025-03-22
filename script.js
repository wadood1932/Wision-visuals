
// ===== WISION VISUALS SCRIPT.JS =====

// Preloader fade out after page load
window.addEventListener("load", () => {
  const preloader = document.getElementById("wision-preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.remove(), 1500);
  }
});

// Page Transition (Gold Wipe Animation)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.href === window.location.href) return;
      e.preventDefault();

      const transition = document.createElement("div");
      transition.className = "page-transition";
      document.body.appendChild(transition);
      transition.classList.add("start");

      transition.addEventListener("animationend", () => {
        window.location.href = link.href;
      }, { once: true });
    });
  });

  // Scroll Reveal
  const revealEls = document.querySelectorAll(".fade-up, .fade-left, .fade-right");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px"
  });

  revealEls.forEach(el => observer.observe(el));
});
