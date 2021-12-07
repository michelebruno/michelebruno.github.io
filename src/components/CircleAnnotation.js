import React from "react";
import Arrow from "./Arrow";

export default function CircleAnnotation({children, rotateClass}) {
    return <div className="aspect-h-1 aspect-w-1 group text-center relative">

        <div
            className="absolute w-full h-full rounded-full inset-0 border-2 border-current flex items-center justify-center">
            <Arrow outline className={"scale-[4] " + rotateClass}/>
        </div>
        <div
            className="w-full h-full flex rounded-full bg-black text-white items-center justify-center scale-0 transition-all duration-700 group-hover:transform-none">
            <span className="inline-block">
                {children}
            </span>
        </div>

    </div>
}