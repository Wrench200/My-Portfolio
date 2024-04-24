import './style.css';
import Typed from 'typed.js';
import Glide from '@glidejs/glide';
import NET from 'vanta/dist/vanta.net.min';
const glide = new Glide("#glide", {
  type: "carousel",
  perView: 8,
  breakpoints: {
    800: {
      duration: 2000,
      autoplay: 2000,
      perView: 6,
      focusAt: "center",
    },
    480: {
      autoplay: 2000,
      perView: 3,
    },
  },
});

glide.mount();
const typed = new Typed("#element", {
  strings: [
    "<h2>Frontend Developer</h2>",
    "<h2>Backend Developer</h2>",
    "<h2>Fullstack Developer</h2>",
  ],
  typeSpeed: 100,
  loop: true,
  showCursor: false,
});

 NET({
  el: "#all",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x313131,
  backgroundColor: 0x0,
  maxDistance: 16.0,
  showDots: false,
  points: 20.0,
});


