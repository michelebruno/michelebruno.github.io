import classNames from 'classnames';
import {Link} from 'gatsby';
import * as React from 'react';
import {useEffect} from 'react';
import {AnimatedLink} from './Typography';

export default function Navbar({fixed, className}) {
  // gets the height of the navbar and sets it as a css variable called --navbar-height
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const height = navbar.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
  }, []);
  return (
    <nav
      className={classNames(
        'top-0 w-full flex justify-between z-50 ',
        //        'bg-navbar',
        'text-sm uppercase',
        fixed && 'fixed',
        !fixed && 'sticky',
        className
      )}
      id="navbar"
    >
      <Link to="/" className="group h-full self-center pr-8 ">
        Michele Bruno
      </Link>
      <ul className="flex">
        {/* TODO pagina dei progetti */}
        {/* <li className="px py-6 hidden ">
          <AnimatedLink component={Link} to="/projects">
            Projects
          </AnimatedLink>
        </li> */}
        <li className="pl-8 py-6 ">
          <AnimatedLink component={Link} to="/about" className="!font-normal">
            About
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
}
