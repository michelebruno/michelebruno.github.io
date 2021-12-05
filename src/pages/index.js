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
        return;
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


    return <Layout className={'mx-auto px-8'}>
        <div className="grid grid-cols-home gap-16 min-h-screen items-center">
            <h1 className={"text-8xl leading-snug col-start-3 col-span-3 "}>
                <span className="italic">Hello</span>, I am Michele, <span
                className="inline-block font-sans not-italic">a creative developer</span> <br/>and <span
                className="inline-block font-sans not-italic">UX designer</span></h1>
        </div>
        <div ref={projectContainer} className="grid grid-cols-1 md:grid-cols-project md:gap-16 mb-10">
            <ProjectCard project={"feelo"}/>
            <ProjectCard project={"disruptive"}/>
            <ProjectCard project={"sign-here-to-fight-the-pandemic"}/>


        </div>
    </Layout>
}

export default IndexPage
