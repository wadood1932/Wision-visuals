// Preloader Logic
window.onload = () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 1000);
  }, 2000);
};
