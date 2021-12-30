import * as React from "react"
import {graphql, Link, navigate, useStaticQuery} from "gatsby";
import Image from "./Image";
import PropTypes from "prop-types";
import classNames from "classnames";

export function ProjectCard({project, position, className}) {
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

    return <div className={classNames("group", className)} onClick={() => navigate(link)}>
        <div className="aspect-h-9 aspect-w-16 overflow-hidden">
            <Image image={thumbnail}
                   className={"bg-white object-cover h-full w-full transition-all duration-1000 group-hover:scale-125"}/>
        </div>

        <div className="flex justify-between relative mt-4  ">
            <h3 className={"text-6xl font-medium"}>{ /* {position.toString().padStart(2, 0)}/ */ }{name}</h3>
            <p className={"font-extralight  text-2xl"}>{roles.join(', ')}</p>
        </div>
    </div>
}

ProjectCard.propTypes = {
    project: PropTypes.string.isRequired
}