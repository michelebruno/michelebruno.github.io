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

export default function OpinionLibrary({data: {project, images}}) {
  const {
    title: name,
    roles,
    tagline,
    thumbnail,
    cover,
    year,
    client,
    websiteUrl,
    description,
  } = project;

  const getImage = createGetImageFromName(images.nodes, 'genero');

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
      <TextBox className="py-lg" description={description}>
        <p>
          The research examined petitions published on change.org during the pandemic, as reported
          in{' '}
          <AnimatedLink
            component={Link}
            className="italic"
            to="/projects/sign-here-to-fight-the-pandemic/"
          >
            Sign here to fight pandemic
          </AnimatedLink>
          . The aim of this website is to make the dataset used in this research available to
          researchers and potential activists interested in the subject. To do this, we set
          ourselves the objective of realising a tool to explore the language and arguments used in
          comments to petitions regarding the mask mandate in the United States.
        </p>
      </TextBox>

      <Grid padding two>
        <div className="sm:col-span-2">
          <div style={{paddingTop: '56.25%', position: 'relative'}} className="px">
            <iframe
              src="https://player.vimeo.com/video/681928771?h=9328d1b8b2&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full"
              title="Opinion library – getting started"
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
        <Image image={getImage('landing.png')} />
        <Image image={getImage('about.png')} />
        <Image image={getImage('maskometer.png')} />
        <Image image={getImage('comments.png')} />
        <div className="sm:col-span-2">
          <Image image={getImage('mobile-mockup.png')} className="object-cover" />
        </div>
      </Grid>

      <Footer>
        <Tag title="Tools and technology">
          <ul>
            <li>Figma</li>
            <li>Python</li>
            <li>Notion</li>
            <li>Next.js</li>
            <li>SanityCMS</li>
            <li>
              <br />
              <AnimatedLink href="https://github.com/michelebruno/genero" target="_blank">
                Repo on GitHub ↗
              </AnimatedLink>
            </li>
          </ul>
        </Tag>
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: sanityProject(slug: {current: {eq: "genero"}}) {
      ...SanityProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "genero"}}) {
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
