import React from 'react';
import classNames from 'classnames';
import {ReactComponent} from './arrow.svg';

/**
 * @var function Arrow
 */

export default function Arrow({inline, down, outline, className, ...props}) {
  return (
    <span className="inline-block align-middle h-full">
      <ReactComponent
        height="100%"
        width="100%"
        {...props}
        className={classNames(
          className,
          down && 'rotate-[-135deg]',
          outline && 'text-transparent  fill-current stroke-2 stroke-[black]'
        )}
      />
    </span>
  );
}
