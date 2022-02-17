import * as React from 'react';
import {graphql} from 'gatsby';

import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {TextBox} from '../../components/Typography';
import Image, {createGetImageFromName} from '../../components/Image';

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
      <TextBox title="Overview" className="py-lg">
        <h3 className="fs-xl mb-2 pb-8 leading-relaxed">{description}</h3>
      </TextBox>
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
