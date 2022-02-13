import React from 'react';
import classNames from 'classnames';

export function H1({children, className, id, tag: Heading}) {
  return (
    <Heading className={classNames('fs-4xl', className)} id={id}>
      {children}
    </Heading>
  );
}
H1.defaultProps = {
  tag: 'h1',
};

export function H2({children, className, id, tag: Heading}) {
  return (
    <Heading className={classNames('fs-3xl', className)} id={id}>
      {children}
    </Heading>
  );
}

H2.defaultProps = {
  tag: 'h2',
};

export function H3({children, className, id, tag: Heading}) {
  return (
    <Heading className={classNames('fs-2xl', className)} id={id}>
      {children}
    </Heading>
  );
}

H3.defaultProps = {
  tag: 'h3',
};

export function Tag({title, children}) {
  return (
    <div className="pb last:pb-0">
      <p className="text-gray">{title}</p>
      <div className="">{children}</div>
    </div>
  );
}

export function TextBox({children, padding, containBorder, className, title}) {
  return (
    <div
      className={classNames(
        'fs-lg grid grid-cols-1 lg:grid-cols-12 px',
        padding && 'pb-lg last:pb-0',
        className
      )}
    >
      <h2 className="fs-lg lg:col-span-3 lg:col-start-2 text-right text-gray ">{title}</h2>
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
  component: C,
  target,
  children,
  icon,
  className,
}) {
  return (
    <C
      href={href}
      to={to}
      target={target}
      className={classNames('cursor-pointer', className)}
      activeClassName={classNames(activeClassName, 'current')}
    >
      <span
        className={
          'inline-block relative ' +
          'animated-link before:absolute before:bottom-0 before:border-b before:border-b-black before:transition-all before:w-full '
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
