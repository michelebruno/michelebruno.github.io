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

    return <div className={"dark:bg-gray-900 font-sans"}>
        <nav className={"sticky top-0 w-full flex justify-between px-6 py-6"}>
            <a href="/">michelebruno</a>
            <ul className="flex gap-6">
                {menu.nodes.map(({name, slug},i) => <li><Link to={slug} key={i}>{name}</Link></li>)}
            </ul>
        </nav>
        <main className={className}>{children}</main>
    </div>
}

