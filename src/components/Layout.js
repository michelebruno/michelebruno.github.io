import '../style/global.css'
import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";


export default function Layout({children, className}) {

    const {menu} = useStaticQuery(graphql`{
        menu:allContentfulMenu {
            nodes {
                name
                slug
            }
        }
    }`)

    return <div>
        <nav className={"absolute w-full flex justify-between px-6 py-6"}>
            <a href=".">michelebruno</a>

            <ul className="flex gap-6">
                {menu.nodes.map(({name, slug}) => <li><Link to={slug}>{name}</Link></li>)}
            </ul>
        </nav>
        <main className={className}>{children}</main>

    </div>
}