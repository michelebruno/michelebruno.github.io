import * as React from 'react';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import {Link, navigate} from 'gatsby';
import {ProjectCard} from '../components/ProjectCard';

import Layout from '../components/Layout';
import Button from '../components/Button';
import {AnimatedLink, H2, H3} from '../components/Typography';
import WorkTogether from '../components/WorkTogether';
import Grid from '../components/Grid';

gsap.registerPlugin(ScrollTrigger);

const homeProjectSlugs = [
  'disruptive',
  'feelo',
  'opinion-library',
  'accessibilita-e-coinvolgere-tutti',
  'sign-here-to-fight-the-pandemic',
  'moodboard',
];

function IndexPage() {
  const projectContainer = useRef();

  useEffect(() => {
    /*
    gsap.timeline({
                                           scrollTrigger: {
                                               trigger: projectContainer.current,
                                               pin: true,
                                               scrub: 1,
                                               snap: 1 / (homeProjectSlugs.length),
                                               end: () => "+=" + (projectContainer.current.offsetWidth * homeProjectSlugs.length)
                                           }
                                       })
                                       */
  }, []);

  return (
    <Layout>
      <div className="flex content-around items-center relative py">
        <h1 className="fs-3xl px py pb-lg ">
          <span className="">Hey!</span> I'm Michele Bruno, an Italian{' '}
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer</span> based in
          Milan, currently enrolled in Communication Design Master at PoliMi.
        </h1>
        <div className="hidden py text-gray text-left absolute bottom-0 left-0">
          <button className="scroll-button px">Scroll</button>
        </div>
      </div>
      <section className="" ref={projectContainer}>
        <Grid className="gap-0 border-t">
          {homeProjectSlugs.map((project, index) => (
            <ProjectCard key={project} project={project} position={index + 1} className="" />
          ))}
        </Grid>
      </section>
      <WorkTogether />
    </Layout>
  );
}

export default IndexPage;
