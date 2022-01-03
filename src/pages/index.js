import * as React from 'react';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ProjectCard, ProjectCardV2} from '../components/ProjectCard';
import CircleAnnotation from '../components/CircleAnnotation';
import Navbar from '../components/Navbar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Layout from '../components/Layout';

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
      <div className="flex content-around items-center min-h-[90vh]">
        <h1 className="text-[3.7vw] leading-tight w-3/4 px-32 py-64">
          <span className="">Hello!</span> I'm Michele Bruno, an Italian{' '}
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer,</span> currently{' '}
          studing at Polimi.
        </h1>
      </div>
      <section className="" ref={projectContainer}>
        <div className="mb-10 grid grid-cols-10 gap-x-8 items-center content-center">
          <h2 className="col-span-10 text-8xl pl-32 py-32 font-medium border-t border-b uppercase">
            Selected projects
          </h2>
          <div className="col-span-10 border-b">
            <Swiper
              slidesPerView="auto"
              mousewheel={{followFinger: true, releaseOnEdges: true}}
              freeMode
            >
              {homeProjectSlugs.map((project, index) => (
                <SwiperSlide key={project} className="w-[90%] md:w-[60%] xl:w-[55%] 2xl:w-[31%]">
                  <ProjectCard version={2} project={project} position={index + 1} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
