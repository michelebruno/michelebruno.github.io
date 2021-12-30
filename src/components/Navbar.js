import classNames from 'classnames';
import {Link} from 'gatsby';
import * as React from 'react';
import {AnimatedLink} from './Typography';

export default function Navbar({fixed, className}) {
  return (
    <nav
      className={classNames(
        'top-0 w-full flex justify-between py-8 z-50',
        fixed && 'fixed',
        !fixed && 'sticky',
        className
      )}
    >
      <Link to="/" className="group ">
        michelebruno
      </Link>
      <ul className="flex gap-x-8">
        <li>
          <AnimatedLink component={Link} to="/projects">
            Projects
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink component={Link} to="/about">
            About
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
}
