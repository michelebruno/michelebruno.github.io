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
        <Link to={link} className={'block group'} data-project={project}>
            <div className="aspect-h-9 aspect-w-16 overflow-hidden">
                <Image image={thumbnail} className={"object-cover h-full w-full transition-all duration-1000 group-hover:scale-125"}/>
            </div>

            <div className="flex justify-between relative text-base ">
                <p>{name}</p>
                <p>{year}</p>
            </div>
        </Link>
    </div>
}

ProjectCard.propTypes = {
    project: PropTypes.string.isRequired
}