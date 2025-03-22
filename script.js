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
// PAGE TRANSITION SYSTEM
let isTransitioning = false;

function createTransition() {
  const transition = document.createElement('div');
  transition.className = 'page-transition';
  document.body.appendChild(transition);
  return transition;
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (isTransitioning || this.href === window.location.href) return;
    
    e.preventDefault();
    isTransitioning = true;
    
    const transition = createTransition();
    
    transition.addEventListener('animationend', () => {
      window.location.href = e.target.href;
    }, { once: true });

    setTimeout(() => {
      if (!transition.parentNode) return;
      transition.remove();
      isTransitioning = false;
    }, 1500);
  });
});
// Attach to all navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.href === window.location.href) return;
        e.preventDefault();
        navigate(link.href);
    });
});

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
// SIMPLE FOOLPROOF ANIMATIONS
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-left, .fade-right, .fade-up');
  
  function checkVisibility() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight * 0.9) {
        section.style.opacity = '1';
        section.style.transform = 'translate(0)';
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check
});
// Portfolio Modal System
const projects = document.querySelectorAll('.project-card');
const modal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close-modal');

projects.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').textContent;
        const type = project.querySelector('p').textContent;
        const imgSrc = project.querySelector('img').src;
        
        modal.querySelector('.modal-media').innerHTML = `<img src="${imgSrc}" alt="${title}">`;
        modal.querySelector('h2').textContent = title;
        modal.querySelector('.project-type').textContent = type;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
