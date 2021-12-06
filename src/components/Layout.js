import '../style/global.css'
import * as React from "react"
import {Link} from "gatsby";
import {AnimatedLink} from "./Typography";
import Seo from "./Seo";


console.log("Hey, what are you looking for in this console? I'm a good developer, check my GitHub profile https://github.com/michelebruno/")

export default function Layout({children, className, title, description, image, pathname}) {
    return <div className={"dark:bg-gray-900 font-sans select-none text-lg"}>
        <Seo title={title} description={description} pathname={pathname}/>
        <nav className={"fixed top-0 w-full flex justify-between px-8 py-8 z-50"}>
            <Link to="/" className={"group "}>michelebruno</Link>
            <ul className="flex gap-x-8">
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
        <footer className="w-full p-8 flex justify-between">
            <div>
                @ 2021
            </div>
            <ul className="flex gap-8">
                <li>
                    <AnimatedLink href="https://www.linkedin.com/in/brunomichele/"
                                  target="_blank">Linkedin</AnimatedLink>
                </li>
                <li>
                    <AnimatedLink href="https://github.com/michelebruno/" target="_blank">Github</AnimatedLink>
                </li>
            </ul>
        </footer>
    </div>
}

