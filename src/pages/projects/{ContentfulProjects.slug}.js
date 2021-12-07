import * as React from "react"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Layout from "../../components/Layout";
import Image, {createGetImageFromName} from "../../components/Image";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import Typography, {AnimatedLink, Tag, TextBox} from "../../components/Typography"
import Marquee from "../../components/Marquee";
import Arrow from '../../components/Arrow'
import Grid from "../../components/Grid";

gsap.registerPlugin(ScrollTrigger)

function Description({description, children}) {
    return <TextBox containBorder>
        <h3 className="text-3xl font-bold mb-2 pb-8">{description}</h3>
        {children}
    </TextBox>
}

export default function Project({data: {project, mdx, images: {nodes: images}, allContentfulProjects}}) {

    const {name, slug, roles, images: [thumbnail, cover], year, client, team, websiteUrl, description} = project

    const bgRef = useRef()

    const nextProjectIndex = allContentfulProjects.nodes.findIndex(p => p.slug === slug) + 1

    const nextProject = allContentfulProjects.nodes[allContentfulProjects.nodes.length > nextProjectIndex ? nextProjectIndex : 0]

    useEffect(() => {
        gsap.to(bgRef.current, {
            scrollTrigger: {
                scrub: true,
                start: 'top middle'
            },
            yPercent: -10,
        });
    }, [])

    return <Layout className="mx-8" title={name}>
        <Typography.H1 title={name} >
            <ul className="row-start-1 col-span-2 col-start-9 pt-2 ">
                {roles && <li><strong>Role:</strong> {roles.join(', ')}</li>}
                <li><strong>Client:</strong> {client}</li>
                {websiteUrl &&
                <li><AnimatedLink href={websiteUrl} target={'_blank'} className={"font-bold"} icon={<Arrow/>}>Visit the
                    website</AnimatedLink></li>}
            </ul>
            <p className="col-start-3 row-start-1 text-right pt-2 text-2xl">{year}</p>
        </Typography.H1>

        <div className="h-screen overflow-hidden -mx-8 hidden">
            <Image ref={bgRef} image={typeof cover !== 'undefined' && cover?.childImageSharp ? cover : thumbnail}
                   className={"h-full w-full object-cover scale-110 origin-top"}/>
        </div>
        <article>
            {mdx && <MDXProvider components={{Description, Marquee, Image, TextBox, Tag, Grid}}><MDXRenderer
                description={description} team={team}
                images={createGetImageFromName(images, slug)}>{mdx.body}</MDXRenderer></MDXProvider>}
        </article>
        <section className={"min-h-screen justify-center flex flex-col "}>
            <TextBox padding={false}>
                Next project
            </TextBox>

            <Grid two>
                <div className="-mx-8 col-start-1 col-span-2">
                    <Marquee link={nextProject.link}>{nextProject.name}</Marquee>
                </div>
            </Grid>
        </section>

    </Layout>
}

export const query = graphql`
    query($slug: String!) {
        project: contentfulProjects(slug: { eq: $slug }) {
            ...ProjectFragment
        }
        allContentfulProjects (filter: {isPagePublic: {eq: true}}){
            nodes {
                name
                slug
                link: gatsbyPath(filePath: "/projects/{ContentfulProjects.slug}")
            }
        }

        mdx(frontmatter: {slug: {eq: $slug}}) {
            body
            id
        }
        images : allFile(filter: {relativeDirectory: {eq: $slug}}) {
            nodes {
                publicURL
                relativePath
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`