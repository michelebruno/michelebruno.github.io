import React from 'react';
import classNames from 'classnames';

export default function Button({children, before, after, className, as: Component, ...props}) {
  const buttonClassName = classNames(' inline-block transition-all', 'button-child');

  const asideClassName = classNames(
    buttonClassName,
    'w-0 group-hover:w-[1em] group-hover:pr-2 overflow-hidden inline-block ',
    'transition-all align-bottom'
  );
  return (
    <Component
      className={classNames(
        'rounded-button group border-b-4 border-current inline-block ',
        className
      )}
      {...props}
    >
      {before && <span className={asideClassName}>→</span>}
      <span className={classNames(buttonClassName, 'py-1 text-current')}>{children}</span>
      {after && <span className={asideClassName}>→</span>}
    </Component>
  );
}

Button.defaultProps = {
  as: 'a',
};
