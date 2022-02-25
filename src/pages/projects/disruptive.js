import * as React from 'react';
import {graphql} from 'gatsby';

import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {AnimatedLink, Tag, TextBox} from '../../components/Typography';
import Grid from '../../components/Grid';
import Image, {createGetImageFromName} from '../../components/Image';
import Slider from '../../components/Project/Slider';
import Footer from '../../components/Project/Footer';

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
        <h3 className="fs-xl mb-2 pb-8  leading-relaxed">
          <AnimatedLink href={websiteUrl}>
            <i>Disruptive: the challenge of rebuilding</i>
          </AnimatedLink>{' '}
          is a digital exhibit, conceived for digital media. A design-centered exhibition born out
          of the passion and hard work of young Italian university students.
        </h3>
        <p>
          Visual, experience and experiential design seamlessly blend with storytelling giving birth
          to an engaging and fascinating 360º experience. Thanks to original content, such as{' '}
          illustrations, video-interviews and other digital content, Disruptive is a completely new
          way of exploring and approaching the great rebuilding challenge that awaits.
        </p>
      </TextBox>

      <Grid padding twelve className="">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
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

      <Grid two>
        <TextBox title="Exhibition" layout="stacked">
          The project was designed during the pandemic. As COVID restrictions decreased, we were
          also able to give birth to a phisical exhibibition at Riminifiera, designing a space to
          present the project, the interviews and the life of Sergio Marchionne.
        </TextBox>
      </Grid>
      <Grid padding twelve>
        <div className="col-span-9">
          <Image className="w-full" image={getImage('ex-elkann.jpg')} />
        </div>

        <div className="col-span-3 flex flex-col justify-end">
          <Image className="w-full" image={getImage('ex-sign.jpg')} />
        </div>
      </Grid>

      <Footer>
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
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
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
