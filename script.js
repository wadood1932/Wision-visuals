
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-transition]");
  const transition = document.querySelector(".page-transition");

  if (!transition) return;

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      // Animate transition in
      transition.classList.add("start");

      setTimeout(() => {
        window.location.href = href;
      }, 800); // Match the duration of the transition animation
    });
  });
});
