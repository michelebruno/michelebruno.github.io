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

  const getImage = createGetImageFromName(images.nodes, 'sign-here-to-fight-the-pandemic');

  return (
    <Wrapper project={project}>
      <Heading
        name={name}
        tagline={tagline}
        year={year}
        client={client}
        websiteUrl={websiteUrl}
        roles={roles}
      >
        <li>
          <AnimatedLink
            href="/sign-here-to-fight-the-pandemic.pdf"
            target="_blank"
            className="font-bold pt-2"
            icon={<Arrow className="-rotate-[135deg]" />}
          >
            Read the full report
          </AnimatedLink>
        </li>
      </Heading>
      <Cover cover={cover} />
      <TextBox title="Overview" className="py-lg">
        {description && <h3 className="fs-xl mb-2 pb-8">{description}</h3>}
        <p>
          The goal is to analyze some controversial aspects of society, process them into questions,
          and return a data visualization that helps the user understand which elements of society
          itself are being questioned. The research was based on the theme of slacktivism, the
          practice of supporting a political or social cause through social media or online
          petitions, characterized by involving minimal effort or commitment. The platform taken
          into analysis was Change.org, one of the most popular platforms used to post online
          petitions. From the analysis of the petitions, three questions arose: What topics are most
          frequently associated with Covid-19 in Canada, Great Britain, India, Italy and the United
          States in petitions posted on Change.org? What are the most common words used on
          Change.org by people who leave a comment after signing petitions on mandatory masks in the
          United States? What are the most common subjects and graphic treatments of images used in
          U.S. petitions on mandatory masks on Change.org?
        </p>
      </TextBox>

      <Grid className="pb mx" three>
        <Image className="w-full" image={getImage('cavi-1.jpg')} />
        <div className="col-span-2">
          <Image className=" h-full object-cover" image={getImage('three-books.jpg')} />
        </div>
      </Grid>

      <Grid padding two>
        <img src={getImage('signhere.gif').publicURL} alt="" className=" " />
        <Image className="w-full h-full object-cover" image={getImage('cavi-questions.jpg')} />
      </Grid>

      <TextBox>
        <Tag title="Course">
          Interaction Design Studio
          <br />
          A.A. 2020/2021
        </Tag>
        <Tag title="Faculty">
          <ul>
            {[
              'Michele Mauri',
              'Simone Vantini',
              'Gabriele Colombo',
              'Angeles Briones',
              'Salvatore Zingale',
              'Tommaso Elli',
              'Beatrice Gobbo',
              'Andrea Benedetti',
              'Elena Aversa',
            ].map(t => (
              <li key={t} className="inline-block after:content-comma">
                {t}
              </li>
            ))}
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
            <li>Python</li>
            <li>Google Sheets</li>
            <li>Open Refine</li>
            <li>Rawgraphs</li>
            <li>Gephi</li>
            <li>Indesign</li>
            <li>Illustrator</li>
          </ul>
        </Tag>
      </TextBox>
    </Wrapper>
  );
}

export const query = graphql`
  {
    project: projectsCsv(slug: {eq: "sign-here-to-fight-the-pandemic"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "sign-here-to-fight-the-pandemic"}}) {
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
