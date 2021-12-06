import React from "react";
import classNames from "classnames";


export function H1({children, title, fullScreen}) {
    return <header className={classNames("items-center flex flex-col justify-center" , fullScreen && "min-h-screen")}>
        <div className="grid grid-cols-12 gap-x-16 auto-rows-min py-32 ">
            <h1 className={"col-start-3 col-span-6 text-9xl font-bold"}>{title}</h1>
            {children}
        </div>
    </header>

}

export function Tag({title, children}) {
    return <div className="pb-16">
        <p className="mb-8">{title}</p>
        <p className={"text-2xl"}>{children}</p>
    </div>

}


let startClasses = "col-start-4 md:col-start-4 xl:col-start-4"
let spanClasses = "col-span-8 md:col-span-6 xl:col-span-5"


export function TextBox({children, padding, containBorder}) {

    return <div className={classNames("grid grid-cols-12 gap-x-16 gap-y-8 text-lg", padding && "py-32")}>
        <div
            className={classNames(startClasses, containBorder ? spanClasses : 'col-span-9', "border-t-2 border-black")}
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
    AnimatedLink
}
export default Typography