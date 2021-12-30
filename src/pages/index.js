import * as React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from '../components/ProjectCard';
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
    <Layout fixed>
      <div className="grid grid-cols-10 gap-x-8 content-around items-center min-h-screen mx-8 relative">

        <h1 className="text-8xl col-span-8 py-32">
          <span className="">Hello!</span>
          {' '}
          I'm Michele Bruno, an Italian
          <span
            className="inline-block font-sans not-italic"
          >
            UX Designer
</span>
          {' '}
          and
          <span
            className="inline-block font-sans not-italic"
          >
            Creative Developer
</span>
          , currently
          studing at Polimi.
        </h1>

      </div>
      <section className="bg-black text-white min-h-screen" ref={projectContainer}>

        <div className="mb-10 grid grid-cols-10 gap-x-8 gap-y-16 py-32 items-center content-center">
          <h2 className="col-span-6 col-start-3 text-8xl uppercase font-semibold">Selected projects</h2>
          <div className="col-span-10" />
          <div
            className="col-span-6 col-start-3 grid grid-cols-1 md:grid-cols-1 md:gap-x-8 gap-y-60 overflow-hidden"
          >
            <div className=" projects-container -mx-16">
              {homeProjectSlugs
                .map((project, index) => (
                  <ProjectCard
                    className="px-16 pb-32" project={project}
                    position={index + 1}
                    key={project}
                  />
                ))}
              <div className=" ">
                <div className="w-1/2 h-1/2 m-auto">
                  <CircleAnnotation>All projects</CircleAnnotation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
