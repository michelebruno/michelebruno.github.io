import * as React from 'react';
import {graphql} from 'gatsby';

import Wrapper from '../../components/Project/Wrapper';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';
import {AnimatedLink, Tag, TextBox} from '../../components/Typography';
import Image, {createGetImageFromName} from '../../components/Image';
import Grid from '../../components/Grid';
import Footer from '../../components/Project/Footer';

export default function HierarchicalClustering({data: {project, images}}) {
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

  const getImage = createGetImageFromName(images.nodes, 'hierarchical-clustering');

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
          This poster applies information design principle to explain what is hierarchical
          clustering, a famous statistical method. We decided to use build our own constellations
          using this statistics and then we dreamed about what mythological being they could
          represent.
        </p>
        <p className="hidden">
          Graphic design, story telling, illustrations and coding work together to{' '}
        </p>
      </TextBox>
      <Grid two padding className="auto-rows-auto">
        <div className="grid lg:grid-cols-[1fr_0.5fr] auto-rows-min">
          <div className="sticky top-12 pb leading-relaxed">
            <h2 className="font-semibold">Clustering stars</h2>
            <p>
              How to better visualize clusterization than by just... clustering? To explain this
              statistical method we decided to apply it to the most clustered items in the history
              of mankind: stars.
            </p>
            <p>
              Taking in consideration the brightest stars in the sky, we played with some Python
              libraries to create a customized algorithm and visualize our data-driven
              constellations.
            </p>
          </div>
        </div>
        <Grid>
          <Image image={getImage('zoom-1.png')} />
          <Image image={getImage('zoom-2.png')} />
          <Image image={getImage('zoom-3.png')} />
        </Grid>
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
            <li>Indesign</li>
            <li>Illustrator</li>
            <li>Python</li>
            <li>Plotly</li>
            <li>SciPy</li>
            <li>
              <br />
              <AnimatedLink
                href="https://github.com/michelebruno/hierarchical-clustering"
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
    project: projectsCsv(slug: {eq: "hierarchical-clustering"}) {
      ...ProjectFragment
    }
    images: allFile(filter: {relativeDirectory: {eq: "hierarchical-clustering"}}) {
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
