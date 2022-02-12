import * as React from 'react';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import {Link, navigate} from 'gatsby';
import {ProjectCard} from '../components/ProjectCard';

import Layout from '../components/Layout';
import Button from '../components/Button';
import {H2} from '../components/Typography';

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
      <div className="flex content-around items-center min-h-screen">
        <h1 className="fs-3xl px py-32 leading-normal">
          <span className="">Hello!</span> I'm Michele Bruno, an Italian <br />
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer,</span>
          <br /> currently studing at Polimi.
        </h1>
      </div>
      <section className="" ref={projectContainer}>
        <div className="grid grid-cols-3 gap-x-8 items-center content-center">
          <H2 className="col-span-3 px py-lg border-t">Selected projects</H2>
          <div className="col-span-3 grid gap-x-0 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 border-t">
            {homeProjectSlugs.map((project, index) => (
              <ProjectCard
                version={3}
                key={project}
                project={project}
                position={index + 1}
                className="min-h-[80vh]"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-32 px">
        <p className="text-6xl">
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
          onClick={() => navigate('/Project')}
        >
          <div className="bg-brand object-cover h-full w-full absolute inset-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
          <div className="relative h-full inset-0 grid gap-0 grid-rows-3 lg:grid-rows-[13rem_auto_auto] px py-8 lg:py-16">
            <h3 className="fs-4xl lg:text-6xl ">
              {/* {position.toString().padStart(2, 0)}/ */}
              All projects
            </h3>
            <div>
              <div className="overflow-hidden pb-4 relative">
                <p className="fs-xl   absolute top-0 -translate-y-full group-hover:translate-y-0 transition">
                  Let's go
                </p>
                <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all">
                  <h4 className="fs-xl">This is just a selection</h4>
                  <p>Click here to see all my work</p>
                </div>
              </div>
            </div>
            <div className="self-end">
              <Button as={Link} to="/projects" before>
                View
              </Button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'group overflow-hidden ',
            'min-aspect-[2/3] border-r border-b relative'
          )}
          onClick={() => navigate('/Project')}
        >
          <div className="bg-brand object-cover h-full w-full absolute inset-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
          <div className="relative h-full inset-0 grid grid-rows-3 lg:grid-rows-[13rem_auto_auto] px py-8 lg:py-16">
            <h3 className="fs-4xl lg:text-6xl">
              {/* {position.toString().padStart(2, 0)}/ */}
              About me
            </h3>
            <div>
              <div className="overflow-hidden pb-4">
                <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all">
                  <h4 className="fs-2xl lg:fs-3xl">Get to know me</h4>
                  <p>Read the about page</p>
                </div>
              </div>
            </div>
            <div className="self-end">
              <Button as={Link} to="/projects" before>
                View
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] border-b grid items-center">
        <div className="px items-center">
          <p className="fs-3xl">
            Want to work together?
            <br />
            Let's{' '}
            <Button before href="mailto:bm.michelebruno@gmail.com">
              get in touch.
            </Button>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
