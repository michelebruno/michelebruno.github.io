import React from 'react';
import classNames from 'classnames';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';

export function H1({children, className, id, tag: Heading, ...props}) {
  return (
    <Heading className={classNames('fs-4xl', className)} id={id} {...props}>
      {children}
    </Heading>
  );
}
H1.defaultProps = {
  tag: 'h1',
};

export function H2({children, className, id, tag: Heading, ...props}) {
  return (
    <Heading className={classNames('fs-3xl', className)} id={id} {...props}>
      {children}
    </Heading>
  );
}

H2.defaultProps = {
  tag: 'h2',
};

export function H3({children, className, id, tag: Heading, ...props}) {
  return (
    <Heading className={classNames('fs-2xl', className)} id={id} {...props}>
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

export function TextBox({children, padding, containBorder, className, description, title, layout}) {
  if (layout === 'stacked') {
    return (
      <div className={classNames('fs-lg leading-relaxed', padding && 'pb-lg', className)}>
        <h2 className="fs-3xl pb">{title}</h2>
        <div className="">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'fs-lg grid grid-cols-1 lg:grid-cols-4 px',
        padding && 'pb-lg',
        className
      )}
    >
      {title && <h2 className="fs-2xl pb">{title}</h2>}
      <div className="lg:col-span-2 leading-relaxed">
        {description && <p className="fs-xl pb-8 leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  );
}
TextBox.propTypes = {
  layout: PropTypes.oneOf(['stacked']),
};
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
      target={target}
      to={to}
      className={classNames('!cursor-pointer ', className)}
      activeClassName={typeof C === 'string' ? undefined : classNames(activeClassName, 'current')}
    >
      <span
        className={
          'inline relative before:cursor-pointer ' +
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
  target: '_blank',
};

const Typography = {
  H1,
  H2,
  TextBox,
  AnimatedLink,
};
export default Typography;
