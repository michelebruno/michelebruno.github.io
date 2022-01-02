import classNames from 'classnames';
import {Link} from 'gatsby';
import * as React from 'react';
import {AnimatedLink} from './Typography';

export default function Navbar({fixed, className}) {
  return (
    <nav
      className={classNames(
        'top-0 w-full flex justify-between z-50',
        '',
        fixed && 'fixed',
        !fixed && 'sticky',
        className
      )}
    >
      <Link to="/" className="group h-full py-6 pr-8 ">
        michelebruno
      </Link>
      <ul className="flex">
        <li className="px-8 py-6 ">
          <AnimatedLink component={Link} to="/projects">
            Projects
          </AnimatedLink>
        </li>
        <li className="pl-8 py-6 ">
          <AnimatedLink component={Link} to="/about">
            About
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
}
