import React from "react";
import Layout from "../components/Layout";
import Grid from "../components/Grid";

function CVItem({title, items}) {
    return <div className="col-span-12 leading-snug ">
        <div className="border-t-2 border-current grid grid-cols-4 gap-x-8 gap-y-16 py-16">
            <h2 className={"text-2xl"}>{title}</h2>
            <ul className={"text-4xl col-span-3 grid"}>
                {items.map(({rows, label}) => <li className="pb-16">
                    {label && <span className={"block mb-8 text-lg"}>
                        {label}
                    </span>}
                    {
                        rows.map((r, i) => <span className={"block"} key={i}>{r}</span>)
                    }
                </li>)}
            </ul>
        </div>
    </div>
}

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
            <CVItem title={"Education"} items={[
                {
                    rows: [
                        "Communication Design",
                        "Politecnico di Milano",
                    ],
                    label: '2020 – ongoing'
                },
                {
                    rows: [
                        "DAMS",
                        "Università di Bologna",
                    ],
                    label: '2016 – 2020'
                }
            ]}/>
            <CVItem title={"Experiences"} items={[
                {
                    rows: [
                        "UX designer & Web Developer",
                        'Freelance'
                    ],
                    label: '2020 – ongoing'
                },
                {
                    rows: [
                        "Web design & WordPress Development",
                        'OSCard'
                    ],
                    label: '2019 – 2020'
                }
            ]}/>

            <CVItem title={"Skills"} items={[
                {
                    rows: [
                        "Adobe Illustrator",
                        "Adobe Indesign",
                        "Adobe After Effects",
                    ],
                    label: 'Graphic Design'
                },
                {
                    rows: [
                        "Rawgraphs",
                        "Gephi",
                        "Excel",
                        "Open Refine",
                    ],
                    label: 'Data Viz'
                }
            ]}/>
            <CVItem title={"Coding"} items={[
                {
                    rows: [
                        "p5",
                        "NodeJS",
                        "Webpack",
                        "Socket.io",
                        "React",
                        "GatsbyJS",
                    ],
                    label: 'JS'
                },
                {
                    rows: [
                        "SCSS",
                        "Tailwind",
                        "Bootstrap"
                    ],
                    label: 'CSS'
                },
                {
                    rows: [
                        "Pandas",
                        "Numpy"
                    ],
                    label: 'Python'
                },
                {
                    rows: [
                        "Composer",
                        "Laravel",
                        "WordPress"
                    ],
                    label: 'PHP'
                }
            ]}/>
            <CVItem title={"Languages"} items={[
                {
                    rows: [
                        "Italian",
                        'First language'
                    ],
                },
                {
                    rows: [
                        "English",
                        'B2 – Cambridge FCE'
                    ]
                }
            ]}/>
        </Grid>
    </Layout>
}