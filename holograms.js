
// Frame tilt effect
document.querySelectorAll('.frame').forEach(frame => {
  frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    frame.style.setProperty('--x', `${e.clientX - rect.left}px`);
    frame.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});

// Lite mode for reduced data usage
if ('connection' in navigator && navigator.connection.saveData) {
  document.documentElement.classList.add('lite-mode');
}
