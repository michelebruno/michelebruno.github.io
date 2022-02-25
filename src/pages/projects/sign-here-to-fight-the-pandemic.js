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
        <p className="pb-8">
          Slacktivism is the practice of supporting a political or social cause through social media
          or online petitions, characterized by involving minimal effort or commitment. The goal of{' '}
          <i>Sign here to fight the pandemic</i> was to analyze online slacktivism, define three
          research questions, collect data, and return visualizations which would help the user
          understand what's being questioned. From the analysis of the petitions, three questions
          arose:
          <ul className="list-disc ml-6 ">
            <li>
              What topics are most frequently associated with Covid-19 in Canada, Great Britain,
              India, Italy and the United States in petitions posted on Change.org?
            </li>
            <li>
              What are the most common words used on Change.org by people who leave a comment after
              signing petitions on mandatory masks in the United States?
            </li>
            <li>
              What are the most common subjects and graphic treatments of images used in U.S.
              petitions on mandatory masks on Change.org?
            </li>
          </ul>
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

      <Grid two padding>
        <div className="grid lg:grid-cols-[1fr_0.5fr] auto-rows-min">
          <div className="sticky top-12 pb leading-relaxed">
            <p>
              Data used in this project was scraped from scratch, by using change.org API and
              collecting data from more than 200k petitions. For each research questions, a protocol
              was developed in order to collect and analyze data in a replicable way.
            </p>
            <p>
              In the{' '}
              <AnimatedLink
                href="https://github.com/michelebruno/sign-here-to-fight-the-pandemic"
                target="_blank"
              >
                GitHub repository
              </AnimatedLink>
              , you can find the Python code devolped for this project.
            </p>
          </div>
        </div>
        <div>
          <Image image={getImage('Protocol1.png')} />
          <Image image={getImage('Protocol2.png')} />
          <Image image={getImage('Protocol3.png')} />
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
              <li key={t}>{t}</li>
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
            <li>
              <br />
              <AnimatedLink
                href="https://github.com/michelebruno/sign-here-to-fight-the-pandemic"
                target="_blank"
              >
                Repo on github ↗
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
