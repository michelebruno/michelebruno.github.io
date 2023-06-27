import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import classNames from 'classnames';
import gsap from 'gsap';
import {useTriggerTransition} from 'gatsby-plugin-transition-link';
import {useTransitionState} from 'gatsby-plugin-transition-link/hooks';
import {useEffect} from 'react';
import {useLocation} from '@reach/router';
import {AnimatedLink, H1} from '../Typography';
import Cover from './Cover';

export default function Heading({
  name,
  year,
  tagline,
  roles,
  client,
  slug,
  websiteUrl,
  links,
  children,
  thumbnail,
  cover,
  isNextProject,
}) {
  const navigate = useTriggerTransition();
  const transitionState = useTransitionState();

  const headerEl = React.useRef(null);
  const wrapperEl = React.useRef(null);

  const route = useLocation();

  const isCurrentProject = route.pathname === `/projects/${slug}`;

  function nextProjectTransition() {
    const tl = gsap.timeline({
      duration: 0.5,
    });

    tl.to(wrapperEl.current?.querySelector('.next-project-heading'), {
      opacity: 0,
      yPercent: 10,
      ease: 'power2.out',
    });

    tl.to(wrapperEl.current?.querySelector('.cover-img'), {
      opacity: 100,
    });
  }

  useEffect(() => {
    const {transitionStatus} = transitionState;

    if (isNextProject && isCurrentProject && transitionStatus === 'exiting') {
      console.log('heyyy', name);

      nextProjectTransition();
    } else if (isNextProject && transitionStatus === 'entering') {
      const tl = gsap.timeline({
        duration: 0.5,
      });

      tl.from(wrapperEl.current, {
        opacity: 0,
        delay: 3,
      });
    } else if (['entering', 'exiting'].includes(transitionStatus)) {
      console.log(name, transitionStatus, transitionState);
      const tl = gsap.timeline({
        duration: 0.5,
      });

      tl.paused();

      tl.from(headerEl.current?.querySelector('div:first-child'), {
        opacity: 0,
        yPercent: 10,
        ease: 'power2.out',
      });
      tl.from(headerEl.current?.querySelectorAll('div:nth-child(2) ul li'), {
        stagger: 0.2,
        opacity: 0,
        yPercent: 10,
        ease: 'power2.out',
      });

      if (transitionStatus === 'entering') {
        tl.play();
      } else if (!isNextProject && transitionStatus === 'exiting') {
        tl.reverse();
      }
    }
  }, [transitionState]);

  return (
    <div ref={wrapperEl}>
      {!isNextProject && (
        <header className="grid grid-cols-1 md:grid-cols-4 items-end px py" ref={headerEl}>
          <div className="md:col-span-3 pb md:pb-0">
            <div>
              <H1 className="lg:inline break-words">{name}</H1>
              <span className="fs-xl"> ({year})</span>
            </div>
            <h2 className="fs-xl text-gray pt-2">{tagline}</h2>
          </div>
          <div className="md:pt-8 text-base flex flex-col">
            <ul>
              {roles && (
                <li>
                  <strong>Role:</strong> {roles.join(', ')}
                </li>
              )}
              {client && (
                <li>
                  <strong>Client:</strong> {client}
                </li>
              )}
              {websiteUrl && (
                <li>
                  <AnimatedLink href={websiteUrl} target="_blank" className="font-semibold">
                    Visit the website ↗
                  </AnimatedLink>
                </li>
              )}
              {links &&
                links.map(([text, url]) => (
                  <li>
                    <AnimatedLink href={url} target="_blank" className="font-semibold">
                      {text} ↗
                    </AnimatedLink>
                  </li>
                ))}
              {children}
            </ul>
          </div>
        </header>
      )}
      {(cover || thumbnail) && (
        <Cover
          cover={cover}
          thumbnail={thumbnail}
          className={classNames(isNextProject && 'cursor-pointer')}
          onClick={() =>
            isNextProject &&
            navigate({
              to: `/projects/${slug?.current || slug}`,
              exit: {length: 3},
              entry: {length: 3, delay: 1},
            })
          }
        >
          {isNextProject && (
            <>
              <div className="next-project-heading col-span-2 col-start-1 pb lg:pb-0 relative mix-blend-multiply">
                <div>
                  <p className="fs-lg">Next project</p>
                  <H1
                    tag={Link}
                    to={`/projects/${slug?.current || slug}`}
                    className="lg:inline leading-none transition-all break-words"
                  >
                    {name}
                  </H1>
                  <span className="fs-xl"> ({year})</span>
                </div>
                <h2 className="fs-xl text-gray ">{tagline}</h2>
              </div>
              <div className="pt-8 text-base flex flex-col" />
            </>
          )}
        </Cover>
      )}
    </div>
  );
}

Heading.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({text: PropTypes.string.isRequired, url: PropTypes.string.isRequired})
  ),
};
