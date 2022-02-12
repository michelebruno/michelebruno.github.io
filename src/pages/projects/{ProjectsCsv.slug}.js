import * as React from 'react';
import {useEffect, useRef} from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import Image, {createGetImageFromName} from '../../components/Image';
import Layout from '../../components/Layout';
import {Tag, TextBox} from '../../components/Typography';
import Marquee from '../../components/Marquee';
import Grid from '../../components/Grid';
import Heading from '../../components/Project/Heading';
import Cover from '../../components/Project/Cover';

gsap.registerPlugin(ScrollTrigger);

function Description({description, children}) {
  return (
    <TextBox title="Overview" className="py-lg">
      <h3 className="fs-xl mb-2 ">{description}</h3>
      {children}
    </TextBox>
  );
}

export default function Project({
  data: {
    project,
    mdx,
    images: {nodes: images},
    allProjectsCsv,
  },
}) {
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

  const bgRef = useRef();

  const nextProjectIndex = allProjectsCsv.nodes.findIndex(p => p.slug === slug) + 1;

  const nextProject =
    allProjectsCsv.nodes[allProjectsCsv.nodes.length > nextProjectIndex ? nextProjectIndex : 0];

  useEffect(() => {
    gsap.to(bgRef.current, {
      scrollTrigger: {
        scrub: true,
        start: 'top middle',
      },
      yPercent: -10,
    });
  }, []);

  return (
    <Layout className="" title={name}>
      <Heading
        name={name}
        tagline={tagline}
        year={year}
        client={client}
        websiteUrl={websiteUrl}
        roles={roles}
      />
      <Cover cover={cover} thumbnail={thumbnail} />
      <article className="fs-xl">
        {mdx && (
          <MDXProvider
            components={{
              Description,
              Marquee,
              Image,
              TextBox,
              Tag,
              Grid,
            }}
          >
            <MDXRenderer
              description={description}
              team={team}
              images={createGetImageFromName(images, slug)}
            >
              {mdx.body}
            </MDXRenderer>
          </MDXProvider>
        )}
      </article>
      <section className="min-h-screen justify-center flex flex-col ">
        <TextBox padding={false}>Next project</TextBox>

        <Grid two>
          <div className="col-start-1 col-span-2">
            <Marquee link={nextProject.link}>{nextProject.name}</Marquee>
          </div>
        </Grid>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: projectsCsv(slug: {eq: $slug}) {
      ...ProjectFragment
    }
    allProjectsCsv(filter: {isPagePublic: {eq: true}}) {
      nodes {
        name
        slug
        link: gatsbyPath(filePath: "/projects/{projectsCsv.slug}")
      }
    }

    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      id
    }
    images: allFile(filter: {relativeDirectory: {eq: $slug}}) {
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
