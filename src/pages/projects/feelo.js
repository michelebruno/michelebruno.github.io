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
        roles={roles}
        links={[
          [
            'Open the prototype',
            'https://www.figma.com/proto/WbY8lQIXAuVHePe6l1lqq8/IxD_Lab-C2_Feelo_Spritz?page-id=2261%3A12291&node-id=2261%3A17603&viewport=392%2C48%2C0.02&scaling=min-zoom&starting-point-node-id=4296%3A37856',
          ],
        ]}
      />
      <Cover cover={cover} thumbnail={thumbnail} />
      <TextBox title="Overview" className="py-lg">
        <h3 className="fs-xl mb-2 pb-8 leading-relaxed">{description}</h3>
        <p>
          The focus of the project is the design for safety: starting from the problems that emerged
          during the Covid-19, we created a digital service that keeps users safe, without
          compromising important activities that contribute to their personal and professional
          development. The design of the service and its prototyping followed the principles of UX
          and interaction design.
        </p>
      </TextBox>

      <div className="grid pb-lg px justify-center">
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
