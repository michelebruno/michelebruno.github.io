import * as React from "react"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Layout from "../components/Layout";
import Image from "../components/Image";
import {graphql} from "gatsby";

gsap.registerPlugin(ScrollTrigger)

export default function Project({data: {project}}) {
    const {name, roles, images: [thumbnail, cover], year, team, websiteUrl} = project

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

    return <Layout>
        <header className="grid grid-cols-12 auto-rows-min py-32">
            <h1 className={"col-start-3 col-span-6 text-9xl font-bold"}>{name}</h1>
            <ul className="row-start-1 col-span-2 col-start-9 self-end">
                <li><strong>Role:</strong> {roles.join(', ')}</li>
                 <li><strong>Client:</strong> Politecnico di Milano</li>

            </ul>
            <p className="col-start-2 row-start-1 text-right">{year}</p>
            <p className={"col-start-3 col-span-3"}>design of a multi-user app that provides tools for an effective
                relationship between those suffering from Eating Disorders and their caregivers through activities that
                encourage dialogue and reflection with a cognitive- behavioral approach.

            </p>
        </header>

        <div className="h-screen overflow-hidden">
            <Image ref={bgRef} image={cover || thumbnail} className={"h-full w-full object-cover scale-110 origin-top"}/>
        </div>
        <article>
            <div className="grid grid-cols-12 py-32">
                <div className={"col-start-4 col-span-4"}>
                    <h3 className={"text-3xl font-medium mb-2 pt-8 border-t-2 border-black"}>Focused on people, not on
                        disease:</h3>
                    <p>
                        design of a multi-user app that provides tools for an effective relationship between those
                        suffering from Eating Disorders and their
                        caregivers through activities that encourage dialogue and reflection with a cognitive-
                        behavioral approach.
                    </p>
                </div>
            </div>
        </article>
    </Layout>
}

export const query = graphql`
    query($slug: String!) {
        project: contentfulProjects(slug: { eq: $slug }) {
            ...ProjectFragment
        }
    }
`