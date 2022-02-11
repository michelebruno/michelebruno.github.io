import '../style/global.css';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {AnimatedLink} from './Typography';
import Seo from './Seo';
import Navbar from './Navbar';

const today = new Date();

console.log(
  "Hey, what are you looking for in this console? I'm a good developer, check my GitHub profile https://github.com/michelebruno/"
);

export default function Layout({
  children,
  className,
  title,
  description,
  image,
  pathname,
  fixed,
  navbar,
}) {
  const [showWip, setShowWip] = useState();
  useEffect(() => {
    const wip = localStorage.getItem('wip');

    if (!wip || new Date() > wip) {
      setShowWip(true);
    }
  }, []);

  function handleCloseWip() {
    setShowWip(false);
    localStorage.setItem('wip', new Date().setDate(today.getDate() + 1));
  }

  return (
    <div className="font-sans text-black">
      {showWip && (
        <div className="fixed inset-0 z-50">
          <div className="h-full w-full relative">
            <div className="absolute inset-0 z-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/12 bg-white px py-8 text-xl">
                <p>Hey. This website is still under construction.</p>
                <p className="pt-4 text-right">
                  <button
                    className="py-1 px-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black"
                    onClick={handleCloseWip}
                  >
                    Ok, got it.
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Seo title={title} description={description} pathname={pathname} />
      {navbar && <Navbar fixed={fixed} className="px" />}
      <main className={className}>{children}</main>
      <footer className="w-full px my-8 flex justify-between">
        <div>@ 2021</div>
        <ul className="flex gap-8">
          <li>
            <AnimatedLink href="https://www.linkedin.com/in/brunomichele/" target="_blank">
              Linkedin
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="https://github.com/michelebruno/" target="_blank">
              Github
            </AnimatedLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

Layout.defaultProps = {
  navbar: true,
};
