import * as React from "react"
import Layout from "../components/Layout";
import {ProjectCard} from "../components/ProjectCard";

function IndexPage() {
    return <Layout className={'container mx-auto px-8'}>
        <div className="flex min-h-screen items-center">
            <div className="lg:w-1/4"></div>
            <h1 className={"uppercase text-5xl xl:text-9xl lg:w-9/12 font-bold leading-none "}>Hello, I am a creative
                developer</h1>

        </div>

        <div className="flex md:justify-end">
            <h2 className=" uppercase text-2xl w-full lg:w-3/4 font-bold text-left text-3xl lg:text-7xl pr-4 pb-16 border-b-2 border-black">Selected
                projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-project md:gap-x-8 mb-10">
            <ProjectCard project={"disruptive"}/>
            <ProjectCard project={"feelo"}/>
            <div></div>
            <div></div>
            <div></div>
            <ProjectCard project={"sign-here-to-fight-the-pandemic"}/>

            <div></div>
        </div>
    </Layout>
}

export default IndexPage
