import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import Image from "./Image";
import PropTypes from "prop-types";

export function ProjectCard({project}) {
    const {projects} = useStaticQuery(graphql`{
        projects: allContentfulProjects {
            nodes {
                ...ProjectFragment
            }
        }
    }`)

    const {
        name,
        year,
        roles,
        link,
        images: [thumbnail]
    } = projects.nodes.find(({slug}) => slug === project) || console.error('Project not found')

    return <div>
        <Link to={link} className={'block group border-b-2 border-black pb-6'} data-project={project}>
            <div className="relative text-4xl ">
                <h2 className={"transition-transform pb-0"}>{name}</h2>
            </div>
            <div className="aspect-h-5 aspect-w-4 my-6">
                <Image image={thumbnail} className={"object-cover h-full w-full"}/>
            </div>

            <div className="flex justify-between">
                <p>{roles.join(', ')}</p>
                <p>{year}</p>
            </div>
        </Link>
    </div>
}

ProjectCard.propTypes = {
    project: PropTypes.string.isRequired
}