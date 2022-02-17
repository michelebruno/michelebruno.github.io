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
        <h1 className="fs-3xl px py pb-lg leading-tight">
          <span className="">Hello!</span> I'm Michele Bruno, an Italian <br />
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer,</span>
          <br /> currently studing at{' '}
          <AnimatedLink href="https://www.designdellacomunicazione.polimi.it/">Polimi</AnimatedLink>
          .
        </h1>
        <div className="hidden py text-gray text-left absolute bottom-0 left-0">
          <button className="scroll-button px">Scroll</button>
        </div>
      </div>
      <section className="" ref={projectContainer}>
        <div className="grid grid-cols-3 gap-x-8 items-center content-center">
          <div className="col-span-3 grid gap-x-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 border-t">
            {homeProjectSlugs.map((project, index) => (
              <ProjectCard
                version={3}
                key={project}
                project={project}
                position={index + 1}
                className=""
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32 px">
        <p className="fs-3xl leading-tight">
          I enjoy designing interactive experiences. <br /> I'll write other stuff about me here,
          brb!
        </p>
      </section>
      <section className="grid grid-cols-2 col-span-3 border-t gap-0">
        <div
          className={classNames(
            'group overflow-hidden ',
            'min-aspect-[2/3] border-r border-b relative'
          )}
          onClick={() => navigate('/projects')}
        >
          <div className="relative h-full inset-0 grid gap-0 grid-rows-3 lg:grid-rows-[13rem_auto_auto] px py-8 lg:py-16">
            <H3>
              {/* {position.toString().padStart(2, 0)}/ */}
              All projects
            </H3>
            <div>
              <div className="overflow-hidden pb-4 relative">
                <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all fs-lg">
                  <h4 className="">This is just a selection</h4>
                  <p className="text-gray">Click here to see all my work</p>
                </div>
              </div>
            </div>
            <div className="self-end">
              <AnimatedLink to="/projects" component={Link}>
                View →
              </AnimatedLink>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'group overflow-hidden ',
            'min-aspect-[2/3] border-r border-b relative'
          )}
          onClick={() => navigate('/about')}
        >
          <div className="relative h-full inset-0 grid gap-0 grid-rows-3 lg:grid-rows-[13rem_auto_auto] px py-8 lg:py-16">
            <H3>About me</H3>
            <div>
              <div className="overflow-hidden pb-4 relative">
                <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all fs-lg">
                  <h4 className="">Get to know me</h4>
                  <p className="text-gray">Read the about page</p>
                </div>
              </div>
            </div>
            <div className="self-end">
              <AnimatedLink to="/about" component={Link}>
                View →
              </AnimatedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] border-b grid items-center">
        <div className="px items-center leading-tight">
          <p className="fs-3xl">
            Want to work together?
            <br />
            Let's{' '}
            <Button before href="mailto:bm.michelebruno@gmail.com">
              get in touch.
            </Button>
          </p>
          <p className="pt-4 fs-lg">
            I'm currently looking for an internship, however you can write me <br />
            if you need a freelance creative developer.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
