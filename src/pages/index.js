import * as React from 'react';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ProjectCard, ProjectCardV2} from '../components/ProjectCard';
import Layout from '../components/Layout';
import CircleAnnotation from '../components/CircleAnnotation';
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const homeProjectSlugs = ['feelo', 'disruptive', 'accessibilita-e-coinvolgere-tutti', 'moodboard'];

function IndexPage() {
  const projectContainer = useRef();

  useEffect(() => {
    /*   gsap.timeline({
                                   scrollTrigger: {
                                       trigger: projectContainer.current,
                                       pin: true,
                                       scrub: 1,
                                       snap: 1 / (homeProjectSlugs.length),
                                       end: () => "+=" + (projectContainer.current.offsetWidth * homeProjectSlugs.length)
                                   }
                               }) */
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-10 gap-x-8 content-around items-center px-32 min-h-[90vh]">
        <h1 className="text-[4.5vw] leading-none col-span-8 py-64">
          <span className="">Hello!</span> I'm Michele Bruno, an Italian
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer,</span> currently
          studing at Polimi.
        </h1>
      </div>
      <section className="" ref={projectContainer}>
        <div className="mb-10 grid grid-cols-10 gap-x-8 items-center content-center">
          <h2 className="col-span-10 text-8xl pl-32 py-32 font-bold border-t border-b uppercase">
            Selected projects
          </h2>
          <div className="col-span-10 grid grid-cols-1 md:grid-cols-3 border-b overflow-hidden">
            {homeProjectSlugs.map((project, index) => (
              <ProjectCard version={2} project={project} position={index + 1} key={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
