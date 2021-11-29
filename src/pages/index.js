import * as React from "react"
import Layout from "../components/Layout";
import {ProjectCard} from "../components/ProjectCard";
import gsap from 'gsap'
import {useEffect, useRef} from "react";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function IndexPage() {
    const projectContainer = useRef()
    const q = gsap.utils.selector(projectContainer);

    useEffect(() => {

        ScrollTrigger.batch(q('[data-project]'), {
            onEnter: elements => {
                gsap.to(elements, {
                    yPercent: -20,
                    // ease: "none",
                    stagger: .5
                });
            },
            trigger: projectContainer.current,
            start: "top bottom", // the default values
            end: "bottom bottom",
            scrub: true
        })


    }, [q])


    return <Layout className={'container mx-auto px-8'}>
        <div className="flex min-h-screen items-center">
            <div className="lg:w-1/4"></div>
            <h1 className={"uppercase text-5xl xl:text-9xl lg:w-9/12 font-bold leading-none "}>Hello, I am a creative
                developer</h1>

        </div>

        <div className="flex md:justify-end">

        </div>
        <div ref={projectContainer} className="grid grid-cols-1 md:grid-cols-project md:gap-x-8 gap-y-4 mb-10">
            <ProjectCard project={"disruptive"}/>
            <ProjectCard project={"feelo"}/>
            <ProjectCard project={"sign-here-to-fight-the-pandemic"}/>

        </div>
    </Layout>
}

export default IndexPage
