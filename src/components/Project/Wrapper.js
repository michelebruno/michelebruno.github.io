import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {TransitionState} from 'gatsby-plugin-transition-link';
import Layout from '../Layout';
import Typography, {TextBox} from '../Typography';
import Heading from './Heading';

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

  const nextProjectIndex = projects.nodes.findIndex(p => (p.slug?.current || p.slug) === slug) + 1;

  const nextProject =
    projects.nodes[projects.nodes.length > nextProjectIndex ? nextProjectIndex : 0];

  return (
    <Layout title={name} description={description}>
      <div className="fs-lg">{children}</div>

      <TransitionState>
        {({transitionState}) => (
          <Heading
            {...nextProject}
            isNextProject
            trasitionState={transitionState}
            key={nextProject.slug.current}
          />
        )}
      </TransitionState>
    </Layout>
  );
}
