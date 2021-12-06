import React from "react";
import {navigate} from "gatsby";
import classNames from "classnames";


export default function Marquee({children, link}) {

    return <div className="marquee overflow-hidden py-16 text-8xl whitespace-nowrap cursor-pointer "
                onClick={() => link && navigate(link)}>
        <div className="marquee_inner flex gap-8 text-stroke ">
            {[0, 0, 0, 0, 0, 0, 0].map((_i, i) => <>
                <span className={classNames(link && "hover:text-black transition-all")}>{children}</span>
                –
                <span className={classNames('italic', link && "hover:text-black transition-all")}>{children}</span>
                –
            </>)}
        </div>
    </div>

}