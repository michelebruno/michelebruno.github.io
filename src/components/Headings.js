import React from "react";


export function H1({children, title}) {
    return <header className="min-h-screen h-screen items-center flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-x-16 auto-rows-min py-32 ">
            <h1 className={"col-start-3 col-span-6 text-9xl font-bold"}>{title}</h1>
            {children}
        </div>
    </header>

}


const Headings = {
    H1
}
export default Headings