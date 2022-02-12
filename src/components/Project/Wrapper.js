import * as React from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../Layout';
import Typography, {AnimatedLink, H1, Tag, TextBox} from '../Typography';
import Marquee from '../Marquee';
import Arrow from '../Arrow';
import Grid from '../Grid';

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
          name
          slug
          link: gatsbyPath(filePath: "/projects/{projectsCsv.slug}")
        }
      }
    }
  `);

  const {name, slug} = project;

  const nextProjectIndex = projects.nodes.findIndex(p => p.slug === slug) + 1;

  const nextProject =
    projects.nodes[projects.nodes.length > nextProjectIndex ? nextProjectIndex : 0];

  return (
    <Layout title={name}>
      <div className="text-lg">{children}</div>
      <section className="min-h-screen justify-center flex flex-col ">
        <TextBox padding={false}>Next project</TextBox>

        <Grid two>
          <div className="col-start-1 col-span-2">
            <Marquee link={nextProject.link}>{nextProject.name}</Marquee>
          </div>
        </Grid>
      </section>
    </Layout>
  );
}
