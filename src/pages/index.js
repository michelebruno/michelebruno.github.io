import * as React from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import {useEffect, useRef, useState} from 'react';

import {graphql, navigate} from 'gatsby';
import classNames from 'classnames';
import {ProjectCard} from '../components/ProjectCard';

import Layout from '../components/Layout';
import WorkTogether from '../components/WorkTogether';
import Grid from '../components/Grid';
import Image from '../components/Image';

const homeProjectSlugs = [
  'opinion-library',
  'sign-here-to-fight-the-pandemic',
  'disruptive',
  'feelo',
  'accessibilita-e-coinvolgere-tutti',
  'moodboard',
];

function IndexPage({data: {projects}}) {
  const [hoverProject, setHoverProject] = useState(-1);
  const [cardHeights, setCardHeights] = useState([0]);
  const projectContainer = useRef();
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({});

    tl.call(() => {
      window.scrollTo(0, 0);
    });

    tl.to('body', {overflow: 'hidden'});

    // GSAP animation to make the hero full height on page load
    tl.to(heroRef.current, {
      //  height: 'auto',
      duration: 1,
      delay: 1,
    });

    tl.to('body', {overflow: 'initial'});

    tl.call(() => {
      const heights = [];

      projectContainer.current?.querySelectorAll('.project-card').forEach(pc => {
        heights.push(pc.getBoundingClientRect().height);
      });
      setCardHeights(heights);
    }, undefined);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [cardHeights]);

  return (
    <>
      <div
        className="flex content-around items-center relative py box-border"
        ref={heroRef}
        // style={{height: 'calc(100vh - var(--navbar-height) )'}}
      >
        <h1
          className="fs-3xl px-screen py pb-lg leading-normal"
          onMouseEnter={() => setHoverProject(-1)}
        >
          <span className="font-bold">Hey! 👋🏻</span> I'm Michele Bruno, an italian{' '}
          <span className="inline-block font-sans not-italic">UX Designer</span> and{' '}
          <span className="inline-block font-sans not-italic">Creative Developer</span> based in
          Milan, graduated in Communication Design at PoliMi.
        </h1>
        <div className="hidden py text-gray text-left absolute bottom-0 left-0">
          <button className="scroll-button px">Scroll</button>
        </div>
      </div>
      <section className="relative" ref={projectContainer}>
        <div
          className={classNames(
            'thumbnail-container px-screen hidden lg:block absolute w-[50vw] right-0 transition-all z-20  pointer-events-none '
            // typeof hoverProject === 'undefined' ? 'opacity-0' : 'opacity-100'
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
                opacity: typeof hoverProject === 'undefined' ? 0 : 1,
                transform: `translateY(${(
                  (-100 * (hoverProject || 0)) /
                  projects.nodes.filter(i => i.isPagePublic).length
                ).toFixed(2)}%)`,
              }}
            >
              {projects.nodes
                .filter(i => i.isPagePublic)
                .map(p => (
                  <Image
                    onClick={() => navigate(`/projects/${p.slug}`)}
                    image={p.cover || p.thumbnail}
                    key={p.name}
                    className="aspect-video object-cover bg-white pointer-events-none"
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
      <WorkTogether onMouseEnter={() => setHoverProject(projects.nodes.length)} />
    </>
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
