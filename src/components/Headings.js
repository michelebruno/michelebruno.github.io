import React from "react";


export function H1({children, title}) {
    return <header className="grid grid-cols-12 auto-rows-min py-32">
        <h1 className={"col-start-3 col-span-6 text-9xl font-bold"}>{title}</h1>
        {children}
    </header>

}


const Headings = {
    H1
}
export default Headings