import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

export function onRouteUpdate() {
  const header = document.querySelector('header.header-animation');
  if (header) {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    setTimeout(() => {
      // header.classList.remove('min-h-nonavbar');
      window.scroll({top: 0});
      document.body.style.overflow = 'initial';
      document.body.style.height = 'initial';
    }, 1500);
  }
}

gsap.registerPlugin(ScrollTrigger);
