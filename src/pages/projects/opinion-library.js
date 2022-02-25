import * as React from 'react';
import {graphql, Link} from 'gatsby';

import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {AnimatedLink, Tag, TextBox} from '../../components/Typography';
import Grid from '../../components/Grid';
import Image, {createGetImageFromName} from '../../components/Image';
import Slider from '../../components/Project/Slider';
import Arrow from '../../components/Arrow';

function Mockup({title, names, images}) {
  return (
    <div>
      <h3 className="fs-lg text-center">{title}</h3>
      {names.map(img => (
        <Image className="w-full mb-16 rounded-2xl drop-shadow-xl" key={img} image={images(img)} />
      ))}
    </div>
  );
}
export default function OpinionLibrary({data: {project, images}}) {
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

  const getImage = createGetImageFromName(images.nodes, 'opinion-library');

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
        <p>
          The research examined petitions published on change.org during the pandemic, as reported
          in{' '}
          <AnimatedLink
            component={Link}
            className="italic"
            to="/projects/sign-here-to-fight-the-pandemic"
          >
            Sign here to fight pandemic
          </AnimatedLink>
          . The aim of this website is to make the dataset used in this research available to
          researchers and potential activists interested in the subject. To do this, we set
          ourselves the objective of realising a tool to explore the language and arguments used in
          comments to petitions regarding the mask mandate in the United States.
        </p>
      </TextBox>

      <Grid padding twelve className="">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 lg:shadow-xl">
          <div style={{paddingTop: '56.25%', position: 'relative'}} className="px">
            <iframe
              src="https://player.vimeo.com/video/681928771?h=9328d1b8b2&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full"
              title="Opiion library – getting started"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
      </Grid>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "opinion-library"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "opinion-library"}}) {
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
