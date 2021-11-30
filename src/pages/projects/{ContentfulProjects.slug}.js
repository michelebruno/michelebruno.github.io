import * as React from "react"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Layout from "../../components/Layout";
import Image, {createGetImageFromName} from "../../components/Image";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import Headings from "../../components/Headings"

gsap.registerPlugin(ScrollTrigger)


function Description({description, children}) {
    return <div className="grid grid-cols-12 py-32">
        <div className="col-start-3 col-span-6">
            <h3 className="text-3xl font-medium mb-2 pt-8 pb-8 border-t-2 border-black">{description}</h3>
            {children}
        </div>
    </div>
}

export default function Project({data: {project, mdx, images: {nodes: images}}}) {

    const {name, roles, images: [thumbnail, cover], year, client, websiteUrl, description} = project

    const bgRef = useRef()

    useEffect(() => {
        gsap.to(bgRef.current, {
            scrollTrigger: {
                scrub: true,
                start: 'top middle'
            },
            yPercent: -10,
        });
    }, [])

    return <Layout className="mx-8">
        <Headings.H1 title={name}>
            <ul className="row-start-1 col-span-2 col-start-9 self-end">
                {roles && <li><strong>Role:</strong> {roles.join(', ')}</li>}
                <li><strong>Client:</strong> {client}</li>
                {websiteUrl && <li><a href={websiteUrl} className={"font-bold"}>Visit the website</a></li>}
            </ul>
            <p className="col-start-2 row-start-1 text-right">{year}</p>
        </Headings.H1>

        <div className="h-screen overflow-hidden -mx-8">
            <Image ref={bgRef} image={typeof cover === 'undefined' ? thumbnail : cover}
                   className={"h-full w-full object-cover scale-110 origin-top"}/>
        </div>
        <article>
            {mdx && <MDXProvider components={{Description, Image}}><MDXRenderer
                description={description}
                images={createGetImageFromName(images, 'feelo')}>{mdx.body}</MDXRenderer></MDXProvider>}
        </article>
    </Layout>
}

export const query = graphql`
    query($slug: String!) {
        project: contentfulProjects(slug: { eq: $slug }) {
            ...ProjectFragment
        }
        mdx(frontmatter: {slug: {eq: $slug}}) {
            body
            id
        }
        images : allFile(filter: {relativeDirectory: {eq: $slug}}) {
            nodes {
                relativePath
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`