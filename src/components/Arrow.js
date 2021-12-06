import React from "react";
import {ReactComponent} from './arrow.svg'
import classNames from "classnames";


/**
 * @var function Arrow
 */


export default function Arrow({inline, down, outline}) {
    return <span className={"inline-block align-middle"}>
        <ReactComponent height={"1em"} width={"1em"}
                        className={classNames(!down && "rotate-[-135deg]", outline && 'text-transparent  fill-current stroke-2 stroke-[black]')}/>
    </span>
}