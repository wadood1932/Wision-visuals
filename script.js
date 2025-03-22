// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  observer.observe(section);
});
// Page Transition Logic
function navigate(url) {
  const transition = document.createElement('div');
  transition.className = 'page-transition';
  document.body.appendChild(transition);
  
  setTimeout(() => {
    window.location.href = url;
  }, 800);
}

// Add event listeners to all navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(e.target.href);
  });
});
// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.parallax').style.transform = 
    `translate3d(0, ${scrolled * 0.4}px, 0)`;
});
// 3D Parallax Motion
document.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.parallax-layer');
  const scrollY = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.dataset.speed;
    layer.style.transform = `translate3d(0, ${-scrollY * speed}px, 0)`;
  });
});

// Optimize performance
window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {});
});
