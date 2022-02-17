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
      <h3 className="fs-lg text-center pb-6">{title}</h3>
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

  const getImage = createGetImageFromName(images.nodes, 'feelo');

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
          Focused on people, not on disease: design of a multi-user app that provides tools for an
          effective relationship between those suffering from Eating Disorders and their caregivers
          through activities that encourage dialogue and reflection with a cognitive-behavioral
          approach.
        </p>
      </TextBox>

      <div className="grid   pb-lg px justify-center">
        <Image
          image={getImage('feelo-trittico.png')}
          pictureClassName="  aspect-w-4 aspect-h-3"
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px pb-lg">
        <Mockup names={['giulia-diario.png']} images={getImage} title="Daily journal" />
        <Mockup
          names={['shared-activity-giulia.png', 'giulia-attivita-giasvolta.png']}
          images={getImage}
          title="Shared activities"
        />
        <Mockup names={['giulia-diario.png']} images={getImage} title="Individual activities" />
        <Mockup names={['informazioni.png']} images={getImage} title="Informations" />
        <Mockup names={['giulia-diario.png']} images={getImage} title="Insights" />
        <Mockup names={['giulia-diario.png']} images={getImage} title="Individual activities" />
      </div>

      <Footer>
        <Tag title="Course">
          Interaction Design Studio
          <br />
          A.A. 2020/2021
        </Tag>
        <Tag title="Faculty">
          <ul>
            <li>Fabio Sergio</li>
            <li>Emanuele Della Valle</li>
            <li>Marco La Mantia</li>
            <li>Matteo Valoriani</li>
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
            <li>Figma</li>
            <li>Illustrator</li>
            <li>GatsbyJs</li>
          </ul>
        </Tag>
      </Footer>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "feelo"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "feelo"}}) {
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
