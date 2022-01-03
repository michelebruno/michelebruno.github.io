import React from 'react';
import classNames from 'classnames';
import Arrow from './Arrow';

export default function Button({children, before, after, className, as: Component, ...props}) {
  const buttonClassName = classNames('  transition-all', 'button-child');

  const asideClassNmae = classNames(
    buttonClassName,
    'w-0 group-hover:w-5 overflow-hidden inline-block',
    'transition-all duration-500'
  );
  return (
    <Component className={classNames('rounded-button p-2', className)} {...props}>
      {before && (
        <span className={asideClassNmae}>
          <Arrow className="w-4 -rotate-90 -translate-x-6 group-hover:translate-x-0 transition-all duration-500" />
        </span>
      )}
      <span className={classNames(buttonClassName, 'px-4 py-2')}>{children}</span>
      {after && <span className={asideClassNmae}>{after}</span>}
    </Component>
  );
}

Button.defaultProps = {
  as: 'button',
};
