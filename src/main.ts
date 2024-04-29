import './style.css';
import Typed from 'typed.js';
import Glide from '@glidejs/glide';
import NET from 'vanta/dist/vanta.net.min';
// const glide = new Glide("#glide", {
//   type: "carousel",
//   perView: 8,
//   breakpoints: {
//     800: {
//       duration: 2000,
//       autoplay: 2000,
//       perView: 6,
//       focusAt: "center",
//     },
//     480: {
//       autoplay: 2000,
//       perView: 3,
//     },
//   },
// });

// glide.mount();
const typed = new Typed("#element", {
  strings: [
    "<h2>Frontend Developer</h2>",
    
    "<h2>Fullstack Developer</h2>"
  ],
  typeSpeed: 100,
  loop: true,
  showCursor: false,
});


//  NET({
//   el: "#all",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0x313131,
//   backgroundColor: 0x0,
//   maxDistance: 16.0,
//   showDots: false,
//   points: 20.0,
// });

// scroll and route
function selectElementByClass(className:string): Element | null {
  return document.querySelector(`.${className}`);
}
const sections: any = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  // selectElementByClass('skills'),
  selectElementByClass('projects'),
  selectElementByClass('contact'),
];

const navItems: any = {
  home: selectElementByClass('homenav'),
  about: selectElementByClass('aboutnav'),
  // skills: selectElementByClass('skillsnav'),
  projects: selectElementByClass('projectnav'),
  contact: selectElementByClass('contactnav'),
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

function observerCallback(entries:any, _observer:any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id ];
      // add 'active' class on the navItem
      navItem.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item: any) => {
        if (item != navItem) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec: Element) => observer.observe(sec));

function getdate() {
  return new Date().getFullYear()
  
}
const date=document.getElementsByClassName('year')
date[0].innerHTML = getdate().toString();

  

