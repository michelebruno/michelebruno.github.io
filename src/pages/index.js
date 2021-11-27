import * as React from "react"
import Layout from "../components/Layout";
import {ProjectCard} from "../components/ProjectCard";

function IndexPage() {
  return <Layout>
    <div className="flex min-h-[75vh] items-center">
      <div className="w-1/4"></div>
      <h1 className={"text-9xl w-8/12 font-extrabold leading-none "}>Hello, I am a creative developer</h1>

    </div>

    <div className="flex justify-end">
      <h2 className="w-3/4 font-medium text-left text-8xl pr-4 pb-8 border-b-[12px] border-black">Selected projects</h2>
    </div>
    <div className="grid grid-cols-3">
      <ProjectCard />
    </div>
  </Layout>
}
export default IndexPage
