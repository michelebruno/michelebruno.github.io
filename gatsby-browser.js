import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React from 'react';
import Layout from './src/components/Layout';
// scroll to top on route update

export function shouldUpdateScroll({routerProps: {location}, getSavedScrollPosition}) {
  // const currentPosition = getSavedScrollPosition(location);
  // const queriedPosition = getSavedScrollPosition({pathname: `/random`});

  return false;
}

export function onClientEntry() {
  gsap.registerPlugin(ScrollTrigger);
}

// wrap page in Layout component
export function wrapPageElement({element, props}) {
  const {data} = props;

  const {name, slug, description} = data?.project;

  return (
    <Layout title={name} description={description} {...props}>
      {element}
    </Layout>
  );
}
