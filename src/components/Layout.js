import '../style/global.css'
import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {AnimatedLink} from "./Typography";
import {Helmet} from "react-helmet";
import Seo from "./Seo";


console.log("Hey, what are you looking for in this console? I'm a good developer, check my GitHub profile https://github.com/michelebruno/")

export default function Layout({children, className, title, description, image, pathname}) {


    const {menu} = useStaticQuery(graphql`{
        menu:allContentfulMenu {
            nodes {
                name
                slug
            }
        }
    }`)

    return <div className={"dark:bg-gray-900 font-sans "}>
        <Seo title={title} description={description} pathname={pathname}/>
        <nav className={"fixed top-0 w-full flex justify-between px-8 py-8 z-50"}>
            <Link to="/" className={"group "}>michelebruno</Link>
            <ul className="flex gap-16">
                <li>
                    <AnimatedLink component={Link}
                                  to={'/projects'}>Projects</AnimatedLink>
                </li>
                <li>
                    <AnimatedLink component={Link}
                                  to={'/about'}>About</AnimatedLink>
                </li>
            </ul>
        </nav>
        <main className={className}>{children}</main>
        <footer className="w-full p-8">
            <p className="text-center w-full">© Michele Bruno</p>
        </footer>
    </div>
}

