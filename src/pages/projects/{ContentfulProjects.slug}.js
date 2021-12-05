import * as React from "react"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Layout from "../../components/Layout";
import Image, {createGetImageFromName} from "../../components/Image";
import {graphql, navigate} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import Headings from "../../components/Headings"
import Marquee from "../../components/Marquee";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger)

let startClasses = "col-start-4 md:col-start-4 xl:col-start-4"
let spanClasses = "col-span-8 md:col-span-6 xl:col-span-5"

function TextBox({children, padding, containBorder}) {

    return <div className={classNames("grid grid-cols-12 gap-x-16 gap-y-8", padding && "py-32")}>
        <div
            className={classNames(startClasses, containBorder ? spanClasses : 'col-span-9', "border-t-2 border-black")}
        />
        <div className={classNames(startClasses, spanClasses)}>
            {children}
        </div>
    </div>

}

TextBox.defaultProps = {
    padding: true
}

function Description({description, children}) {
    return <TextBox containBorder>
        <h3 className="text-3xl font-medium mb-2 pb-8">{description}</h3>
        {children}
    </TextBox>
}

export default function Project({data: {project, mdx, images: {nodes: images}, allContentfulProjects}}) {

    const {name, slug, roles, images: [thumbnail, cover], year, client, team, websiteUrl, description} = project

    const bgRef = useRef()

    const nextProjectIndex = allContentfulProjects.nodes.findIndex(p => p.slug === slug)

    const nextProject = allContentfulProjects.nodes[nextProjectIndex < allContentfulProjects.nodes.lengts ? nextProjectIndex : 0]

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
            {mdx && <MDXProvider components={{Description, Image, TextBox}}><MDXRenderer
                description={description} team={team}
                images={createGetImageFromName(images, 'feelo')}>{mdx.body}</MDXRenderer></MDXProvider>}
        </article>
        <section className={"min-h-screen justify-center flex flex-col "}>
            <TextBox padding={false}>
                Next project
            </TextBox>
            <div className="grid grid-cols-6 gap-16">
                <div className="-mx-8 col-start-1 col-span-6">
                    <Marquee onClick={() => navigate(nextProject.link)}>{nextProject.name}</Marquee>
                </div>
            </div>
        </section>

    </Layout>
}

export const query = graphql`
    query($slug: String!) {
        project: contentfulProjects(slug: { eq: $slug }) {
            ...ProjectFragment
        }

        allContentfulProjects{
            nodes {
                name
                link: gatsbyPath(filePath: "projects/{ContentfulProjects.slug}")
            }
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