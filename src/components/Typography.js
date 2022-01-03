import React from 'react';
import classNames from 'classnames';

export function H1({children, title, fullScreen}) {
  return (
    <header
      className={classNames(
        'items-center flex flex-col justify-center',
        fullScreen && 'min-h-screen'
      )}
    >
      <div className="grid grid-cols-12 gap-x-8 auto-rows-min pt-32 w-full">
        <h1 className="col-start-4 col-span-5 text-9xl ">{title}</h1>
        {children}
      </div>
    </header>
  );
}

export function H2({children, padding, containBorder, className}) {
  return (
    <div
      className={classNames(
        'grid grid-cols-12 gap-x-16 gap-y-8 text-5xl',
        padding && 'py-32',
        className
      )}
    >
      <h2 className={classNames(startClasses, spanClasses)}>{children}</h2>
    </div>
  );
}

export function Tag({title, children}) {
  return (
    <div className="pb-16">
      <p className="text-base">{title}</p>
      <div className="text-2xl">{children}</div>
    </div>
  );
}

let startClasses = ' lg:col-start-2 px-8 lg:px-16';
let spanClasses = 'col-span-3 lg:col-span-2 ';

export function TextBox({children, padding, containBorder, className, title}) {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8 text-2xl',
        padding && 'py-32',
        className
      )}
    >
      <div className={classNames(startClasses, containBorder ? spanClasses : 'col-span-3')} />
      <h2 className="px-8 lg:px-16 text-2xl">{title}</h2>
      <div className={classNames(startClasses, spanClasses)}>{children}</div>
    </div>
  );
}

TextBox.defaultProps = {
  padding: true,
};

export function AnimatedLink({
  href,
  to,
  activeClassName,
  component,
  target,
  children,
  icon,
  className,
}) {
  const C = component;
  return (
    <C
      href={href}
      to={to}
      target={target}
      className={className}
      activeClassName={classNames(activeClassName, 'current')}
    >
      <span
        className={
          'inline-block relative ' +
          ' animated-link before:absolute before:bottom-0 before:border-b-2 before:border-b-black before:transition-all before:w-full ' +
          ''
        }
      >
        {children}
      </span>
      {icon}
    </C>
  );
}

AnimatedLink.defaultProps = {
  component: 'a',
};

const Typography = {
  H1,
  H2,
  TextBox,
  AnimatedLink,
};
export default Typography;
