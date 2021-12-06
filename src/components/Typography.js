import React from "react";


export function H1({children, title}) {
    return <header className="min-h-screen h-screen items-center flex flex-col justify-center">
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


export function AnimatedLink({href, to, component, target, children, icon, className}) {

    const C = component
    return <C href={href} to={to} target={target}
              className={className}>
        <span className={"inline-block relative " +
        " animated-link before:absolute before:bottom-0 before:border-b-2 before:border-b-black before:transition-all before:w-full  " +
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