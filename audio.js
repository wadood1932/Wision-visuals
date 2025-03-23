
class CinemaAudio {
  constructor() {
    this.hoverSound = new Audio('assets/audio/hover-gold.wav');
    this.hoverSound.volume = 0.3;
    
    this.scrollSound = new Audio('assets/audio/scroll-deep.mp3');
    this.scrollSound.loop = true;
    
    this.lastScroll = 0;
  }

  init() {
    document.querySelectorAll('.service-card, .nav-links a').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.hoverSound.currentTime = 0;
        this.hoverSound.play();
      });
    });

    window.addEventListener('scroll', () => {
      const scrollDelta = window.scrollY - this.lastScroll;
      this.scrollSound.playbackRate = Math.min(Math.abs(scrollDelta * 0.02), 1.5);
      this.lastScroll = window.scrollY;
    });
  }
}

const audioEngine = new CinemaAudio();
window.addEventListener('load', () => audioEngine.init());
