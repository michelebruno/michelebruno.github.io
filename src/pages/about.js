import React from "react";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Arrow from "../components/Arrow";

export default function About() {
    return <Layout className="mx-8">
        <Grid twelve padding>
            <div className="col-span-8 text-4xl pt-32 gap-8 grid leading-snug pb-32">

                <p>
                    I'm Michele Bruno, a 24 yo designer and developer, born in Andria, Southern Italy. I'm currently
                    studying Communication Design at Politecnico di Milano but I also work as a freelance.
                </p>
                <p>
                    I learned coding as a self taught in high school while trying to build websites for my first
                    projects and, since then, technology has been a powerful tool to reach design goals. After my
                    bachelor degree, I chose to enhance my design abilities enrolling at PoliMi and focusing my studies
                    in UX design.
                </p>
                <p>
                    Whenever projects can help society, I'm there to make my part.
                </p>
            </div>
            <div className="col-span-12 leading-snug ">
                <div className="border-t-2 border-current grid grid-cols-4 gap-x-8 gap-y-16 py-16">
                    <h2 className={"text-2xl"}>Education</h2>
                    <ul className={"text-4xl col-span-3 grid gap-8"}>
                        <li>
                            Communication Design at Politecnico di Milano
                            <br/>
                            2020 – ongoing
                        </li>
                        <li>
                            DAMS at Università di Bologna
                            <br/>
                            2016 – 2020
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-12 leading-snug ">
                <div className="border-t-2 border-current grid grid-cols-4 gap-x-8 gap-y-16 py-16">
                    <h2 className={"text-2xl"}>Experiences</h2>
                    <ul className={"text-4xl col-span-3 grid gap-8"}>
                        <li>
                            UX designer & Web Developer
                            <br/>
                            Freelance
                            <br/>
                            2020 – ongoing
                        </li>
                        <li>
                            Web design & WordPress Development
                            <br/>
                            OSCard
                            <br/>
                            2019 – 2020
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-12 leading-snug ">
                <div className="border-t-2 border-current grid grid-cols-4 gap-x-8 gap-y-16 py-16">
                    <h2 className={"text-2xl"}>Languages</h2>
                    <ul className={"text-4xl col-span-3 grid gap-8"}>
                        <li>
                            Italian
                            <br/>
                            First Language
                        </li>
                        <li>
                            English
                            <br/>
                            B2 – Cambridge FCE
                        </li>
                    </ul>
                </div>
            </div>
        </Grid>
    </Layout>
}