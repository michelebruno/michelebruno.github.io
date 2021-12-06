import React from "react";
import classNames from "classnames";


export function H1({children, title, fullScreen}) {
    return <header className={classNames("items-center flex flex-col justify-center" , fullScreen && "min-h-screen")}>
        <div className="grid grid-cols-12 gap-x-8 auto-rows-min py-64 w-full">
            <h1 className={"col-start-4 col-span-5 text-9xl "}>{title}</h1>
            {children}
        </div>
    </header>

}

export function H2({children, padding, containBorder, className}) {

    return <div className={classNames("grid grid-cols-12 gap-x-16 gap-y-8 text-5xl", padding && "py-32", className)}>

        <h2 className={classNames(startClasses, spanClasses)}>
            {children}
        </h2>
        <div
            className={classNames(startClasses, containBorder ? spanClasses : 'col-span-9', "border-t-2 border-current")}
        />
    </div>

}


export function Tag({title, children}) {
    return <div className="pb-16">
        <p className="mb-8">{title}</p>
        <p className={"text-2xl"}>{children}</p>
    </div>

}


let startClasses = "col-start-4 md:col-start-4 xl:col-start-4"
let spanClasses = "col-span-8 md:col-span-6 xl:col-span-5"


export function TextBox({children, padding, containBorder, className}) {

    return <div className={classNames("grid grid-cols-12 gap-x-16 gap-y-8 text-lg", padding && "py-32", className)}>
        <div
            className={classNames(startClasses, containBorder ? spanClasses : 'col-span-9', "border-t-2 border-current")}
        />
        <div className={classNames(startClasses, spanClasses)}>
            {children}
        </div>
    </div>

}

TextBox.defaultProps = {
    padding: true
}


export function AnimatedLink({href, to, activeClassName, component, target, children, icon, className}) {

    const C = component
    return <C href={href} to={to} target={target}
              className={className} activeClassName={classNames(activeClassName, 'current')}>
        <span className={"inline-block relative " +
        " animated-link before:absolute before:bottom-0 before:border-b-2 before:border-b-black before:transition-all before:w-full " +
        ""}>
            {children}
        </span>
        {icon}
     </C>
}

AnimatedLink.defaultProps = {
    component: 'a'
}

const Typography = {
    H1,
    H2,
    TextBox,
    AnimatedLink
}
export default Typography