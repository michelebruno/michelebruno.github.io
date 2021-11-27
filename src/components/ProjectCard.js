import * as React from "react"

export function ProjectCard({project}) {
    const title = 'Disruptive',
        year = '2020',
        roles = ['Concept', 'UX design']

    return <div className={'group'}>
        <h2 className={"text-4xl"}>{title}</h2>
         <div className="flex">
            <p>{roles.join(', ')}</p>
            <p>{year}</p>
        </div>
    </div>
}