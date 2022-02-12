import * as React from 'react';
import {graphql} from 'gatsby';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {H3, Tag, TextBox} from '../../components/Typography';
import Grid from '../../components/Grid';
import Image, {createGetImageFromName} from '../../components/Image';
import Slider from '../../components/Project/Slider';

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
      <Heading
        name={name}
        tagline={tagline}
        year={year}
        client={client}
        websiteUrl={websiteUrl}
        roles={roles}
      />
      <Cover cover={cover} />
      <TextBox title="Overview" className="py-lg">
        <h3 className="fs-xl mb-2 pb-8">{description}</h3>
        <p>
          Visual, experience and experiential design seamlessly blend with storytelling giving birth
          to an engaging and fascinating 360º experience. Thanks to original content, such as{' '}
          illustrations, video-interviews and other digital content, Disruptive is a completely new
          way of exploring and approaching the great rebuilding challenge that awaits.
        </p>
      </TextBox>

      <Grid padding twelve className="">
        <div className="col-span-10 col-start-2">
          <Slider
            images={[
              getImage('01-00.png'),
              getImage('01-mattarella.png'),
              getImage('01-straniero.png'),
              getImage('02-00.png'),
              getImage('02-1.png'),
              getImage('02-2.png'),
              getImage('03-00.png'),
              getImage('03-rebuild.png'),
              getImage('03-thereisaworld.png'),
            ]}
          />
        </div>
      </Grid>
      <TextBox title="Exhibition">
        Visual, experience and experiential design seamlessly blend with storytelling giving birth
        to an engaging and fascinating 360º experience. Thanks to original content, such as
        illustrations, video-interviews and other digital content, Disruptive is a completely new
        way of exploring and approaching the great rebuilding challenge that awaits.
      </TextBox>
      <Grid padding three>
        <div className="col-span-2">
          <Image className="w-full" image={getImage('ex-elkann.jpg')} />
        </div>

        <div className="col-span-1 flex flex-col justify-between">
          <Image className="w-full" image={getImage('ex-sign.jpg')} />
        </div>
      </Grid>

      <TextBox>
        <Tag title="Project team">
          <ul>
            {team.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Tag>
        <Tag title="Tools and technology">
          <ul>
            <li>Figma</li>
            <li>GatsbyJs</li>
            <li>SwiperJs</li>
          </ul>
        </Tag>
      </TextBox>
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
