import React from "react";
import {ReactComponent} from './arrow.svg'


/**
 * @var function Arrow
 */


export default function Arrow({inline}) {
    return <span className={"inline-block align-middle"}>
        <ReactComponent height={"1em"} width={"1em"} className={"rotate-[-135deg]"} />
    </span>
}