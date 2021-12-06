import React from "react";
import classNames from "classnames";

export default function Grid({children, className, two, six, twelve, padding}) {
    return <div
        className={classNames("grid gap-16", two && 'grid-cols-2', six && 'grid-cols-6', twelve && 'grid-cols-12', padding && 'py-32')}>
        {children}
    </div>
}

