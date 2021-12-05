import React from "react";


export default function Marquee({children,onClick}) {

    return <div className="marquee overflow-hidden py-16 text-8xl whitespace-nowrap" onClick={onClick}>
        <div className="marquee_inner flex gap-8">
            {[0,0,0,0,0,0,0].map((_i, i) => <>
                <span>{children}</span>
                –
                <span className={" italic"}>{children}</span>
                –
            </>)}
        </div>
    </div>

}