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
    if (e.target.href === window.location.href) return; // Fix for same-page links
    e.preventDefault();
    navigate(e.target.href);
  });
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
// Form Input Animations
document.querySelectorAll('.form-group input').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      input.parentElement.classList.remove('active');
    }
  });
});

// Form Submission
document.getElementById('appointment-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Add your email service integration here (I'll guide you later)
  alert('Appointment request sent! We’ll contact you shortly.');
  e.target.reset();
});
// 100% Working Preloader Removal
window.onload = function() {
  const preloader = document.getElementById('wision-preloader');
  
  // Start fade out after 2 seconds
  setTimeout(() => {
    preloader.style.opacity = '0';
    
    // Complete removal after fade
    setTimeout(() => {
      preloader.remove();
    }, 1000);
    
  }, 2000); // Total duration: 3 seconds
};

// Safety net - remove after 4 seconds max
setTimeout(() => {
  const preloader = document.getElementById('wision-preloader');
  if(preloader) preloader.remove();
}, 4000);
// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersectionRatio >= 0.1) { // More sensitive trigger
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -25% 0px' // Earlier trigger
});
// Enable smooth scroll snap
document.body.style.scrollSnapType = 'y mandatory';
document.body.style.overflowY = 'scroll';
document.body.style.height = '100vh';
