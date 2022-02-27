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
      <TextBox className="py-lg" description={description}>
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

      <Grid className="pb mx" twelve>
        <div className="col-span-12 lg:col-span-4">
          <Image className="w-full" image={getImage('cavi-1.jpg')} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <Image className=" h-full object-cover" image={getImage('three-books.jpg')} />
        </div>
        <img
          src={getImage('signhere.gif').publicURL}
          alt=""
          className=" col-span-12 lg:col-span-6"
        />
        <div className="col-span-12 lg:col-span-6">
          <Image className="w-full h-full object-cover" image={getImage('cavi-questions.jpg')} />
        </div>
      </Grid>

      <Grid padding two />

      <Grid two padding>
        <div className="grid lg:grid-cols-[1fr_0.5fr] auto-rows-min">
          <div className="sticky top-12 pb leading-relaxed">
            <h2 className="font-bold">Data scraping</h2>
            <p>
              Scraping data from scratch was part of this project. We developed a Python scraper,
              exploiting change.org REST API, thus collecting data from more than 200k petitions.
              For each research question, a protocol was developed to define each step from the
              question to the final visualizations.
            </p>
            <p>
              In the{' '}
              <AnimatedLink
                href="https://github.com/michelebruno/sign-here-to-fight-the-pandemic"
                target="_blank"
              >
                GitHub repository
              </AnimatedLink>
              , you can find the Python scraper for this project.
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
          Final Synthesis Design Studio
          <br />
          A.A. 2021/2022
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
