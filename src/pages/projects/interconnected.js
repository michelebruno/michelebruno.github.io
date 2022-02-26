import * as React from 'react';
import {graphql} from 'gatsby';

import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {Tag, TextBox} from '../../components/Typography';
import Image, {createGetImageFromName} from '../../components/Image';
import Footer from '../../components/Project/Footer';
import Grid from '../../components/Grid';

export default function SignHereToFightThePandemic({data: {project, images}}) {
  const {name, roles, tagline, thumbnail, cover, year, client, websiteUrl, description} = project;

  const getImage = createGetImageFromName(images.nodes, 'interconnected');

  return (
    <Wrapper project={project}>
      <Heading
        name={name}
        tagline={tagline}
        year={year}
        client={client}
        websiteUrl={websiteUrl}
        roles={roles}
      />
      <Cover cover={cover} thumbnail={thumbnail} />
      <TextBox title="Overview" className="py-lg" description={description} />
      <Grid two padding>
        <Image image={getImage('1.png')} />
        <Image image={getImage('2.png')} />
        <Image image={getImage('3.png')} />
        <Image image={getImage('4.png')} />
      </Grid>
      <Footer>
        <Tag title="Team">
          <ul>
            <li>Federico Pozzi</li>
          </ul>
        </Tag>
        <Tag title="Tools and technology">
          <ul>
            <li>Figma</li>
            <li>GatsbyJs</li>
            <li>GSAP</li>
          </ul>
        </Tag>
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "interconnected"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "interconnected"}}) {
      nodes {
        publicURL
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
