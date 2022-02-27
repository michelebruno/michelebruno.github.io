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

  const getImage = createGetImageFromName(images.nodes, 'moodboard');

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

      <Grid padding twelve className="">
        <div className="col-span-12">
          <img src={getImage('interaction.gif').publicURL} alt="" className="mx-auto w-full" />
        </div>
      </Grid>

      <Footer>
        <Tag title="Course">
          Interaction Design Studio
          <br />
          A.A. 2020/2021
        </Tag>
        <Tag title="Faculty">
          <ul>
            <li>Michele Mauri</li>
            <li>Tommaso Elli</li>
            <li>Andrea Benedetti</li>
          </ul>
        </Tag>
        <Tag title="Project team">
          <ul>
            {team.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Tag>
        <Tag title="Tools and technology">
          <ul>
            <li>p5.js</li>
            <li>socket.io</li>
            <li>Heroku</li>
          </ul>
        </Tag>
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "moodboard"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "moodboard"}}) {
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
