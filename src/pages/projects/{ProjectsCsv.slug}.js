import * as React from 'react';
import {useEffect, useRef} from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import Image, {createGetImageFromName} from '../../components/Image';
import Layout from '../../components/Layout';
import Typography, {AnimatedLink, Tag, TextBox} from '../../components/Typography';
import Marquee from '../../components/Marquee';
import Arrow from '../../components/Arrow';
import Grid from '../../components/Grid';

gsap.registerPlugin(ScrollTrigger);

function Description({description, children}) {
  return (
    <TextBox title="Overview">
      <h3 className="text-4xl mb-2 pb-8">{description}</h3>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 items-end pt-32 pb-16  lg:py-32">
        <div className="col-span-2 px-8 lg:px-16 pb-16 lg:pb-0">
          <div>
            <h1 className=" text-4xl lg:text-8xl font-medium lg:inline lg:pr-4">{name}</h1>
            <span className="text-2xl ">({year})</span>
          </div>
          <h2 className="text-2xl lg:text-4xl pt-8 lg:pt-0">{tagline}</h2>
        </div>
        <ul className="px-8 pt-8 lg:px-32 ">
          {roles && (
            <li>
              <strong>Role:</strong> {roles.join(', ')}
            </li>
          )}
          <li>
            <strong>Client:</strong> {client}
          </li>
          {websiteUrl && (
            <li>
              <AnimatedLink
                href={websiteUrl}
                target="_blank"
                className="font-bold"
                icon={<Arrow />}
              >
                Visit the website
              </AnimatedLink>
            </li>
          )}
        </ul>
      </div>
      <div className="h-screen overflow-hidden border-t border-b">
        <Image
          ref={bgRef}
          image={typeof cover !== 'undefined' && cover?.childImageSharp ? cover : thumbnail}
          className="h-full w-full object-cover scale-110 origin-top"
        />
      </div>
      <article>
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
