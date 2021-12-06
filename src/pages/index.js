import * as React from "react"
import Layout from "../components/Layout";
import {ProjectCard} from "../components/ProjectCard";
import gsap from 'gsap'
import {useEffect, useRef} from "react";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import Grid from "../components/Grid";
import Typography, {TextBox} from "../components/Typography";
import Arrow from "../components/Arrow";

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
        <div className="grid grid-cols-1 gap-x-8 py-64 items-center">
            <h1 className={"text-8xl w-10/12"}>
                 <span className="italic">Hello</span>, I'm Michele Bruno, an Italian <span
                className="inline-block font-sans not-italic">UX Designer</span> and <span
                className="inline-block font-sans not-italic">Creative Developer</span> based in Milan, currently studing at Polimi.</h1>
        </div>
        <div ref={projectContainer} className="grid grid-cols-1 md:grid-cols-project md:gap-8 mb-10">
            <ProjectCard project={"feelo"}/>
            <ProjectCard project={"disruptive"}/>
            <ProjectCard project={"sign-here-to-fight-the-pandemic"}/>


        </div>
    </Layout>
}

export default IndexPage
