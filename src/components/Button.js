import React from 'react';
import classNames from 'classnames';
import Arrow from './Arrow';

export default function Button({children, before, after, className, as: Component, ...props}) {
  const buttonClassName = classNames(' inline-block transition-all', 'button-child');

  const asideClassNmae = classNames(
    buttonClassName,
    'w-0 group-hover:w-8 group-hover:pr-2 h-full overflow-hidden inline-block ',
    'transition-all duration-500'
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
          <Arrow className="w-4 -rotate-90 -translate-x-6 group-hover:translate-x-0 transition-all duration-500" />
        </span>
      )}
      <span className={classNames(buttonClassName, 'p-4 text-current')}>{children}</span>
      {after && (
        <span className={asideClassNmae}>
          <Arrow className="w-4 -rotate-90 -translate-x-6 group-hover:translate-x-0 transition-all duration-500" />
        </span>
      )}{' '}
    </Component>
  );
}

Button.defaultProps = {
  as: 'a',
};
