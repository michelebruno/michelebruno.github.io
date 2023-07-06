import * as React from 'react';
import classNames from 'classnames';
import {useEffect, useRef, useState} from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';
import Image from './Image';

export function ProjectCard({project, position, className, version, ...props}) {
  const [showImg, setShowImg] = useState(false);

  const el = useRef(null);

  // GSAP fade in animation on scroll
  useEffect(() => {
    const an = gsap.from(el.current, {
      duration: 0.5,
      opacity: 0,
      yPercent: 10,
      scrollTrigger: {
        trigger: el.current,
        start: 'top bottom-=100px',
      },
    });

    return () => an.kill();
  }, []);

  const {name, roles, slug, tagline, thumbnail, cover} = project;
  const link = `/projects/${slug}/`;

  return (
    <div className="project-card relative border-b py-4 lg:py-0" {...props} ref={el}>
      <TransitionLink
        to={link}
        className={classNames('relative group block px-screen py z-10', className)}
        onMouseEnter={() => {
          setShowImg(true);
        }}
        onMouseLeave={() => {
          setShowImg(false);
        }}
      >
        <div className=" lg:hidden py block">
          <Image
            image={cover || thumbnail}
            className={classNames(
              'bg-white object-cover aspect-[16/9] h-full transition-all ',
              showImg ? 'opacity-100 ' : 'lg:opacity-0'
            )}
          />
        </div>

        <div className=" relative ">
          <div className="lg:max-w-[75%]">
            <h2 className="fs-3xl inline mr-2">
              {/* {position.toString().padStart(2, 0)}/ */}
              {name}
            </h2>
            <div className="hidden xl:inline-grid gap-0 fs-base  !leading-none xl:pt-4 text-gray xl:align-top ">
              <span className="">{roles.join(' + ')}</span>
            </div>
          </div>
          <h3 className="text-lg lg:fs-xl text-gray">{tagline}</h3>
        </div>
      </TransitionLink>
    </div>
  );
}
