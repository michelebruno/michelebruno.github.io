import * as React from 'react';
import {graphql} from 'gatsby';
import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {H3, TextBox} from '../../components/Typography';
import Grid from '../../components/Grid';
import Image, {createGetImageFromName} from '../../components/Image';

export default function Disruptive({data: {project, images}}) {
  const {
    name,
    slug,
    roles,
    tagline,
    thumbnail,
    cover,
    year,
    client,
    team,
    websiteUrl,
    description,
  } = project;

  const getImage = createGetImageFromName(images.nodes, 'disruptive');

  return (
    <Wrapper project={project}>
      <Heading name={name} tagline={tagline} year={year} client={client} websiteUrl={websiteUrl} />
      <Cover cover={cover} />
      <TextBox title="Overview">
        <h3 className="text-4xl mb-2 pb-8">{description}</h3>
        <p>
          Visual, experience and experiential design seamlessly blend with storytelling giving birth
          to an engaging and fascinating 360º experience. Thanks to original content, such as{' '}
          illustrations, video-interviews and other digital content, Disruptive is a completely new
          way of exploring and approaching the great rebuilding challenge that awaits.
        </p>
      </TextBox>
      <Grid padding three>
        <div className="col-span-2">
          <Image className="w-full" image={getImage('ex-elkann.jpg')} />
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <H3>Exhibition</H3>
            <p className="text-lg">
              Visual, experience and experiential design seamlessly blend with storytelling giving
              birth to an engaging and fascinating 360º experience. Thanks to original content, such
              as illustrations, video-interviews and other digital content, Disruptive is a
              completely new way of exploring and approaching the great rebuilding challenge that
              awaits.
            </p>
          </div>
          <Image className="w-full" image={getImage('ex-sign.jpg')} />
        </div>
      </Grid>
    </Wrapper>
  );
}

export const query = graphql`
  query {
    project: projectsCsv(slug: {eq: "disruptive"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "disruptive"}}) {
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
