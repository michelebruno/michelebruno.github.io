import * as React from 'react';
import gsap from 'gsap';
import {useEffect, useRef, useState} from 'react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {graphql, useStaticQuery} from 'gatsby';
import classNames from 'classnames';
import {ProjectCard} from '../components/ProjectCard';

import Layout from '../components/Layout';
import WorkTogether from '../components/WorkTogether';
import Grid from '../components/Grid';
import Image from '../components/Image';

gsap.registerPlugin(ScrollTrigger);

const homeProjectSlugs = [
  'opinion-library',
  'sign-here-to-fight-the-pandemic',
  'disruptive',
  'feelo',
  'accessibilita-e-coinvolgere-tutti',
  'moodboard',
];

function IndexPage({data: {projects}}) {
  const [hoverProject, setHoverProject] = useState();
  const [cardHeights, setCardHeights] = useState([0]);
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

  useEffect(() => {
    const heights = [];
    projectContainer.current.querySelectorAll('.project-card').forEach(pc => {
      heights.push(pc.getBoundingClientRect().height);
    });
    setCardHeights(heights);
  }, []);

  return (
    <Layout>
      <div className="flex content-around items-center relative py">
        <h1 className="fs-3xl px py pb-lg leading-relaxed " onMouseEnter={() => setHoverProject()}>
          <span className="">Hey!</span> I'm Michele Bruno, an Italian{' '}
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer</span> based in
          Milan, currently enrolled in Communication Design Master at PoliMi.
        </h1>
        <div className="hidden py text-gray text-left absolute bottom-0 left-0">
          <button className="scroll-button px">Scroll</button>
        </div>
      </div>
      <section className="relative" ref={projectContainer}>
        <div
          className={classNames(
            'thumbnail-container px hidden lg:block absolute w-[50vw] right-0 transition-all',
            typeof hoverProject === 'undefined' && 'opacity-0'
          )}
          style={{
            transform:
              typeof cardHeights === 'undefined'
                ? `translateY(calc(${cardHeights[0] / 2}px - 50%))`
                : `translateY(calc(${cardHeights.reduce((acc, cur, ind) => {
                    if (ind > hoverProject) {
                      return acc;
                    }
                    if (ind === hoverProject) {
                      return acc + cur / 2;
                    }
                    return acc + cur;
                  }, 0)}px - 50%))`,
          }}
        >
          <div className="aspect-video overflow-hidden w-full h-full">
            <div
              className="transition-transform"
              style={{
                transform: `translateY(${(
                  (-100 * (hoverProject || 0)) /
                  (projects.nodes.filter(i => i.isPagePublic).length + 1)
                ).toFixed(2)}%)`,
              }}
            >
              {projects.nodes.map(p => (
                <Image
                  image={p.cover || p.thumbnail}
                  key={p.name}
                  className="aspect-video object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        <Grid className="gap-0 border-t">
          {projects.nodes
            .filter(i => i.isPagePublic)
            .map((project, index) => (
              <ProjectCard
                onMouseEnter={() => setHoverProject(index)}
                key={project.name}
                project={project}
                position={index - 1}
                className=""
              />
            ))}
        </Grid>
      </section>
      <WorkTogether onMouseEnter={() => setHoverProject()} />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  {
    projects: allProjectsCsv {
      nodes {
        ...ProjectFragment
      }
    }
  }
`;
