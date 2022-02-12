import React from 'react';
import classNames from 'classnames';
import Arrow from './Arrow';

export default function Button({children, before, after, className, as: Component, ...props}) {
  const buttonClassName = classNames(' inline-block transition-all', 'button-child');

  const asideClassNmae = classNames(
    buttonClassName,
    'w-0 group-hover:w-[1em] group-hover:pr-2 overflow-hidden inline-block ',
    'transition-all'
  );
  return (
    <Component
      className={classNames(
        'rounded-button group border-b-4 border-current inline-block ',
        className
      )}
      {...props}
    >
      {before && (
        <span className={asideClassNmae}>
          <Arrow className=" -rotate-90 -translate-x-6 group-hover:translate-x-0 transition-all" />
        </span>
      )}
      <span className={classNames(buttonClassName, 'py-1 text-current')}>{children}</span>
      {after && (
        <span className={asideClassNmae}>
          <Arrow className="-rotate-90 relative bottom-0 -translate-x-6 group-hover:translate-x-0 transition-all" />
        </span>
      )}{' '}
    </Component>
  );
}

Button.defaultProps = {
  as: 'a',
};
