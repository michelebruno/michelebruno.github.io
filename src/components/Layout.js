import '../style/global.css'
import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {AnimatedLink} from "./Typography";


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

    return <div className={"dark:bg-gray-900 font-sans "}>
        <nav className={"fixed top-0 w-full flex justify-between px-8 py-8 z-50"}>
            <Link to="/" className={"group "}><span className={"group-hover:italic"}>michele</span>bruno</Link>
            <ul className="flex gap-16">
                {menu.nodes.map(({name, slug},i) => <li key={i}><AnimatedLink component={Link} to={slug}>{name}</AnimatedLink></li>)}
            </ul>
        </nav>
        <main className={className}>{children}</main>
        <footer className="w-full p-8  ">
            <p className="text-center w-full">© Michele Bruno</p>
        </footer>
    </div>
}

