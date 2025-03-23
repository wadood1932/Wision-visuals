
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded and running!");

  // Page transition logic
  const transition = document.querySelector(".page-transition");
  const links = document.querySelectorAll("a[data-transition]");

  if (transition && links.length > 0) {
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        // Start the transition
        
      // CINEMATIC TRANSITION
      transition.classList.add("start");
      new Audio('assets/film-whoosh.mp3').play(); // Add sound effect

      // SYNC WITH VIDEO
      setTimeout(() => {
        transition.style.background = "#0A0A0A"; 
        window.location.href = href;
      }, 600);

      // FILM GRAIN TIMING
      setTimeout(() => {
        transition.style.background = "#C5A030";
      }, 300);
     // This must match the CSS animation duration
      });
    });
  }

  // Scroll reveal animations
  const fadeElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

  const revealOnScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
