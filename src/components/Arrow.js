import React from 'react';
import classNames from 'classnames';
import { ReactComponent } from './arrow.svg';

/**
 * @var function Arrow
 */

export default function Arrow({
  inline, down, outline, className, ...props
}) {
  return (
    <span className="inline-block align-middle">
      <ReactComponent
        height="1em"
        width="1em"
        {...props}
        className={classNames(className, down && 'rotate-[-135deg]', outline && 'text-transparent  fill-current stroke-2 stroke-[black]')}
      />
    </span>
  );
}
