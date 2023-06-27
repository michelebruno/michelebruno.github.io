import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import classNames from 'classnames';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useTriggerTransition} from 'gatsby-plugin-transition-link';
import {useTransitionState} from 'gatsby-plugin-transition-link/hooks';
import {useEffect} from 'react';
import {useLocation} from '@reach/router';
import {AnimatedLink, H1} from '../Typography';
import Cover from './Cover';

function ProjectTitle({name, year, tagline, className, isNextProject}) {
  // TODO aggiungere link per SEO
  return (
    <div className={classNames('md:col-span-3 pb md:pb-0', className)}>
      {isNextProject && <p className="fs-lg next-project-label">Next project</p>}
      <div>
        <H1 className="lg:inline break-words">{name}</H1>
        <span className="fs-xl"> ({year})</span>
      </div>
      <h2 className="fs-xl text-gray pt-2">{tagline}</h2>
    </div>
  );
}

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

  function onExitAnimation() {
    const el = wrapperEl.current.querySelector('.next-project-heading');

    const labelHeigth = el.querySelector('.next-project-label').getBoundingClientRect().height;

    const elParentHeight = el.parentElement.getBoundingClientRect().height;

    const ANIMATION_DURATION = 0.5;

    const tl = gsap.timeline({
      duration: ANIMATION_DURATION,
    });

    tl.to(wrapperEl.current?.querySelector('.next-project-heading'), {
      opacity: 0,
      yPercent: 10,
      ease: 'power2.out',
    });

    tl.to(wrapperEl.current?.querySelector('.cover-img'), {
      opacity: 100,
    });

    tl.to(
      wrapperEl.current.querySelector('.cover-img'),
      {
        opacity: 100,
      },
      `-=${ANIMATION_DURATION * 2}`
    );

    tl.to(document.querySelector('.project-wrapper'), {
      opacity: 0,
    });

    tl.to(
      document.querySelector('.project-wrapper'),
      {
        maxHeight: `${elParentHeight - labelHeigth}px`,
      },
      `-=${ANIMATION_DURATION}`
    );

    tl.call(() => {
      window.scrollTo(0, 0);
    });

    tl.call(() => {
      ScrollTrigger.refresh();
    });
  }

  useEffect(() => {
    const tl = gsap.timeline({
      duration: 0.5,
    });

    tl.to(headerEl.current, {
      opacity: 100,
      duration: 0,
    });

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
  }, []);

  return (
    <div ref={wrapperEl}>
      {!isNextProject && (
        <header
          className="grid grid-cols-1 md:grid-cols-4 items-end px py opacity-0"
          ref={headerEl}
        >
          <ProjectTitle year={year} name={name} tagline={tagline} />
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
              exit: {length: 3, trigger: onExitAnimation},
              entry: {delay: 3},
            })
          }
        >
          {isNextProject && (
            <>
              <ProjectTitle
                year={year}
                name={name}
                tagline={tagline}
                className="next-project-heading "
                isNextProject={isNextProject}
              />
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
