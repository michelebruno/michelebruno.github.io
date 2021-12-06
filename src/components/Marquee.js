import React from "react";
import {navigate} from "gatsby";
import classNames from "classnames";


export default function Marquee({children, link}) {

    return <div className={classNames("marquee overflow-hidden py-16 text-8xl whitespace-nowrap", link && 'cursor-pointer')}
                onClick={() => link && navigate(link)}>
        <div className={classNames("marquee_inner flex gap-8 text-stroke ", link && "hover:text-black transition-all")}>
            {[0, 0, 0, 0, 0, 0, 0].map((_i, i) => <>
                <span>{children}</span>
                –
                <span className={classNames('italic')}>{children}</span>
                –
            </>)}
        </div>
    </div>

}