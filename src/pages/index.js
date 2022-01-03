import * as React from 'react';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import classNames from 'classnames';
import {Link, navigate} from 'gatsby';
import {ProjectCard, ProjectCardV2} from '../components/ProjectCard';
import CircleAnnotation from '../components/CircleAnnotation';
import Navbar from '../components/Navbar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Layout from '../components/Layout';
import {TextBox} from '../components/Typography';
import Button from '../components/Button';
import Image from '../components/Image';

SwiperCore.use([Mousewheel, FreeMode]);
gsap.registerPlugin(ScrollTrigger);

const homeProjectSlugs = [
  'feelo',
  'disruptive',
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
      <div className="flex content-around items-center min-h-[80vh]">
        <h1 className="text-[3.7vw] leading-tight w-2/3 pl-16 py-64">
          <span className="">Hello!</span> I'm Michele Bruno, an Italian{' '}
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer,</span> currently{' '}
          studing at Polimi.
        </h1>
      </div>
      <section className="" ref={projectContainer}>
        <div className="grid grid-cols-3 gap-x-8 items-center content-center">
          <h2 className="col-span-3 text-3xl lg:text-8xl p-8 lg:pl-16  lg:py-32 font-medium border-t">
            Selected projects
          </h2>
          <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 border-t">
            {homeProjectSlugs.map((project, index) => (
              <ProjectCard
                version={3}
                project={project}
                position={index + 1}
                className="min-h-[80vh]"
              />
            ))}
            <div
              className={classNames(
                'group overflow-hidden',
                'min-aspect-[2/3] border-r border-b relative'
              )}
              onClick={() => navigate('/projects')}
            >
              <div className="bg-brand object-cover h-full w-full absolute inset-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
              <div className="relative h-full inset-0 grid grid-rows-3 lg:grid-rows-[13rem_auto_auto] p-8 lg:p-16">
                <h3 className="text-4xl lg:text-6xl">
                  {/* {position.toString().padStart(2, 0)}/ */}
                  All projects
                </h3>
                <div>
                  <div className="overflow-hidden pb-4 relative">
                    <p className="text-2xl lg:text-3xl absolute top-0 -translate-y-full group-hover:translate-y-0 transition">
                      Let's go
                    </p>
                    <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all">
                      <h4 className="text-2xl lg:text-3xl">This is just a selection</h4>
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
          </div>
        </div>
      </section>
      <section className="min-h-[80vh] border-b grid items-center">
        <div className="px-8 lg:px-16  items-center">
          <p className="text-8xl">
            Let's get in touch! <br />
            Write me an{' '}
            <Button after href="mailto:bm.michelebruno@gmail.com">
              email
            </Button>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
