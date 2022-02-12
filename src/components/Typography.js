import React from 'react';
import classNames from 'classnames';

export function H1({children, className, id, tag: Heading}) {
  return (
    <Heading className={classNames('text-9xl', className)} id={id}>
      {children}
    </Heading>
  );
}
H1.defaultProps = {
  tag: 'h1',
};

export function H2({children, className, id, tag: Heading}) {
  return (
    <Heading className={classNames('text-3xl lg:text-7xl', className)} id={id}>
      {children}
    </Heading>
  );
}

H2.defaultProps = {
  tag: 'h2',
};

export function H3({children, className, id, tag: Heading}) {
  return (
    <Heading className={classNames('text-4xl lg:text-6xl', className)} id={id}>
      {children}
    </Heading>
  );
}

H3.defaultProps = {
  tag: 'h3',
};

export function Tag({title, children}) {
  return (
    <div className="pb-12 text-2xl">
      <p className="text-gray">{title}</p>
      <div className="">{children}</div>
    </div>
  );
}

export function TextBox({children, padding, containBorder, className, title}) {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 lg:grid-cols-12 gap-x-6 lg:gap-x-12 px text-2xl',
        padding && ' py-lg',
        className
      )}
    >
      <h2 className="text-2xl lg:col-span-2 lg:col-start-2 ">{title}</h2>
      <div className="lg:col-span-6">{children}</div>
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
          'animated-link before:absolute before:bottom-0 before:border-b-2 before:border-b-black before:transition-all before:w-full '
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
