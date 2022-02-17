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

  const getImage = createGetImageFromName(images.nodes, 'accessibilita-e-coinvolgere-tutti');

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
        <h3 className="fs-xl leading-relaxed mb-2 pb-8">{description}</h3>
        <p>
          Project of an accessible video that is at the same time demonstrative of the concept of
          accessibility, aiming for accessibility the possibility, allowed for all, to have access
          not only to the physical environment, but also to services, information and communication.
        </p>
      </TextBox>

      <Grid className="pb mx">
        <div style={{paddingTop: '56.25%', position: 'relative'}} className="px">
          <iframe
            src="https://player.vimeo.com/video/565636809?h=c5284ae693&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full"
            title="Accessibilit&amp;agrave; &amp;egrave;... coinvolgere tutti. Un&amp;#039;esperienza al museo."
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />
      </Grid>

      <Grid three padding>
        <Image image={getImage('storyboard_3.png')} />
        <Image image={getImage('storyboard_1.png')} />
        <Image image={getImage('storyboard_2.png')} />
      </Grid>
      <Grid two className="py">
        <TextBox title="Tactile postcards" layout="stacked">
          The project also provides the creation of a system of artifacts for the dissemination of
          video through social and paper channels. The tactile postcards, which reproduce the works
          in the video, aim to enrich and expand the experience of people with sensory disabilities,
          thanks to the textures in relief, braille text and a qr code that refers to the audio
          description of the work.
        </TextBox>
      </Grid>

      <Grid two padding>
        <div className="aspect-h-5 aspect-w-4">
          <Image image={getImage('instagram.jpg')} className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-rows-min gap-16">
          <Image image={getImage('dettaglio_6.jpg')} />
          <Image image={getImage('ambientata_1.jpg')} />
        </div>
      </Grid>

      <Footer>
        <Tag title="Course">
          Complex Artefacts and System Design Studio
          <br />
          A.A. 2020/2021
        </Tag>
        <Tag title="Faculty">
          <ul>
            <li>Dina Riccò</li>
            <li>Gian Luca Balzerano</li>
            <li>Albero Barone</li>
            <li>Giulia Martimucci</li>
            <li>Alicia Gonzales</li>
            <li>Alessandro Zamperini</li>
          </ul>
        </Tag>
        <Tag title="Project team">
          <ul>
            {team?.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Tag>
        <Tag title="Tools and technology">
          <ul>
            <li>Adobe After Effects</li>
            <li>Figma</li>
          </ul>
        </Tag>
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "accessibilita-e-coinvolgere-tutti"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "accessibilita-e-coinvolgere-tutti"}}) {
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
