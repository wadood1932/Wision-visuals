
// ===== PREMIUM SCRIPT.JS FOR WISION VISUALS =====

// Preloader with cinematic gold ring effect
window.addEventListener("load", () => {
  const preloader = document.getElementById("wision-preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.remove(), 1500);
  }
});

// Page Transition (gold slide)
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

// Scroll Reveal Animations
document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

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

  animated.forEach(el => observer.observe(el));
});

// Parallax Layers (3D effect)
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  document.querySelectorAll(".parallax-layer").forEach(layer => {
    const speed = layer.dataset.speed || 0.1;
    layer.style.transform = `translate3d(0, ${-scrollY * speed}px, 0)`;
  });
});

// Form Focus Animation
document.querySelectorAll(".form-group input, .form-group textarea").forEach(input => {
  input.addEventListener("focus", () => input.parentElement.classList.add("active"));
  input.addEventListener("blur", () => {
    if (!input.value) input.parentElement.classList.remove("active");
  });
});

// Appointment Form Submission (basic mailto fallback or placeholder)
const form = document.getElementById("appointment-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Appointment request sent! We'll contact you shortly.");
    form.reset();
  });
}

// Optional ScrollSnap (can be refined later)
document.body.style.scrollSnapType = 'y mandatory';
document.body.style.overflowY = 'scroll';
document.body.style.height = '100vh';
mailto: wsfilm.de@gmail.com
