import * as React from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Layout from '../Layout';
import Typography, {AnimatedLink, H1, Tag, TextBox} from '../Typography';
import Marquee from '../Marquee';
import Arrow from '../Arrow';
import Grid from '../Grid';
import Image from '../Image';

gsap.registerPlugin(ScrollTrigger);

function Description({description, children}) {
  return (
    <TextBox title="Overview">
      <h3 className="fs-4xl mb-2 pb-8">{description}</h3>
      {children}
    </TextBox>
  );
}

export default function Wrapper({project, children}) {
  const {projects} = useStaticQuery(graphql`
    query {
      projects: allProjectsCsv(filter: {isPagePublic: {eq: true}}) {
        nodes {
          ...ProjectFragment
        }
      }
    }
  `);

  const {name, slug, description} = project;

  const nextProjectIndex = projects.nodes.findIndex(p => p.slug === slug) + 1;

  const nextProject =
    projects.nodes[projects.nodes.length > nextProjectIndex ? nextProjectIndex : 0];

  return (
    <Layout title={name} description={description}>
      <div className="text-lg">{children}</div>

      <Link
        to={`/projects/${nextProject.slug}`}
        className="min-h-[80vh] justify-center border-y grid grid-cols-1 lg:grid-cols-3 items-end px py-lg relative group overflow-hidden"
      >
        <Image
          image={nextProject.cover || nextProject.thumbnail}
          className="bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-30 transition-all group-hover:scale-105"
        />
        <div className="col-span-2 col-start-1 pb lg:pb-0 relative mix-blend-multiply">
          <div>
            <p className="fs-lg">Next project</p>
            <H1
              tag={Link}
              to={`/projects/${nextProject.slug}`}
              className="lg:inline leading-none transition-all"
            >
              {nextProject.name}
            </H1>
            <span className="fs-xl"> ({nextProject.year})</span>
          </div>
          <h2 className="fs-xl text-gray ">{nextProject.tagline}</h2>
        </div>
        <div className="pt-8 text-base flex flex-col" />
      </Link>
    </Layout>
  );
}
