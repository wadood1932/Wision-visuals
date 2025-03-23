// Updated Click Handler
document.querySelectorAll('.service-card, .explore-btn').forEach(element => {
  element.addEventListener('click', function() {
    const card = this.closest('.service-card');
    const fileName = card ? card.dataset.file : this.closest('.service-card').dataset.file;

    // Trigger transition
    document.querySelector('.page-transition').classList.add('start');
    new Audio('assets/film-whoosh.mp3').play();

    setTimeout(() => {
      window.location.href = fileName; // Direct file reference
    }, 1000);
  });
});
