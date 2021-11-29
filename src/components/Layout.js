import '../style/global.css'
import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";


console.log("Hey, what are you looking for in this console? I'm a good developer, check my GitHub profile https://github.com/michelebruno/")

export default function Layout({children, className}) {

    const {menu} = useStaticQuery(graphql`{
        menu:allContentfulMenu {
            nodes {
                name
                slug
            }
        }
    }`)

    return <div className={"dark:bg-gray-900 font-sans pb-8"}>
        <nav className={"fixed top-0 w-full flex justify-between px-8 py-8"}>
            <Link to="/">michelebruno</Link>
            <ul className="flex gap-6">
                {menu.nodes.map(({name, slug},i) => <li key={i}><Link to={slug} >{name}</Link></li>)}
            </ul>
        </nav>
        <main className={className}>{children}</main>
    </div>
}

