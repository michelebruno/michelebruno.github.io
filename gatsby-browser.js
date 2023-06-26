import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// scroll to top on route update

export function shouldUpdateScroll({routerProps: {location}, getSavedScrollPosition}) {
  // const currentPosition = getSavedScrollPosition(location);
  // const queriedPosition = getSavedScrollPosition({pathname: `/random`});

  return [0, 0];
}

export function onClientEntry() {
  gsap.registerPlugin(ScrollTrigger);
}
