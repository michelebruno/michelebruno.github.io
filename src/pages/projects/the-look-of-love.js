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
import Footer from '../../components/Project/Footer';

export default function SignHereToFightThePandemic({data: {project, images}}) {
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

  const getImage = createGetImageFromName(images.nodes, 'the-look-of-love');

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
      <TextBox className="py-lg">
        <h3 className="fs-xl mb-2 pb-8 leading-relaxed">{description}</h3>
        <p>
          The main goal was to create an interactive experience where users can reconnect with their
          peers and other anonymous surfers through their emotions, to enable speculation around the
          theme of sentient algorithms.
        </p>
      </TextBox>

      <Grid padding>
        <div style={{paddingTop: '56.25%', position: 'relative'}} className="px col-span-3">
          <iframe
            src="https://player.vimeo.com/video/735826642?loop=false&autoplay=false&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false&customControls=true"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full"
            title="The Look of Love – Showcase"
          />
        </div>
      </Grid>
      <Grid two padding>
        <div className="grid lg:grid-cols-[1fr_0.5fr] auto-rows-min">
          <div className="sticky top-12 pb leading-relaxed">
            <h2 className="font-semibold">The algorithm in action</h2>
            <p>
              At first, the UX flow was designed in great details, building a complex timeline
              considering all the interactions and feedbacks.
            </p>
            <p>
              This challenging website was built in Nuxt with a great help of the well known
              FaceApi.
            </p>
          </div>
        </div>
        <div className="grid gap">
          <Image image={getImage('experience-driver.png')} />
          <Image image={getImage('ux-flow.png')} />
          <Image image={getImage('user-feedback.png')} />
        </div>
      </Grid>

      <Footer>
        <Tag title="Live website">
          <AnimatedLink href={websiteUrl} target="_blank" className="font-semibold">
            The Look of Love ↗
          </AnimatedLink>
        </Tag>

        <Tag title="Tools and technology">
          <ul>
            <li>Nuxt.js</li>
            <li>FaceApi</li>
            <li>Vercel</li>
          </ul>
        </Tag>
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "the-look-of-love"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "the-look-of-love"}}) {
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
