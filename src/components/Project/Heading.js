import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import gsap from 'gsap';
import {useTriggerTransition} from 'gatsby-plugin-transition-link';
import {useTransitionState} from 'gatsby-plugin-transition-link/hooks';
import {useEffect} from 'react';
import {useLocation} from '@reach/router';
import {AnimatedLink, H1} from '../Typography';
import Cover from './Cover';

function ProjectTitle({name, year, tagline, className, isNextProject}) {
  // TODO aggiungere link per SEO
  return (
    <div className={classNames('md:col-span-3', className)}>
      {isNextProject && <p className="fs-lg next-project-label">Next project</p>}
      <div>
        <div className="!block">
          <H1 className={classNames('break-words items-end  flex w-full')}>
            <span className="h-auto">{name}</span>
          </H1>
        </div>
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

  const headerEl = React.useRef(null);
  const wrapperEl = React.useRef(null);

  function onExitAnimation() {
    const el = wrapperEl.current.querySelector('.next-project-heading');

    // get next project heading height with padding

    const currentProjectHeadingHeight =
      wrapperEl.current.querySelector('.next-project-heading').parentElement.getBoundingClientRect()
        .height - 28;

    console.log(currentProjectHeadingHeight);

    const ANIMATION_DURATION = 0.3;

    const tl = gsap.timeline({
      duration: ANIMATION_DURATION,
    });

    tl.to(wrapperEl.current?.querySelector('.next-project-heading'), {
      opacity: 0,
      yPercent: 10,
      ease: 'power2.out',
    });

    // For mobile transition
    tl.to(wrapperEl.current?.querySelector('.next-project-heading').parentElement, {
      height: 0,
      padding: 0,
    });

    tl.to(
      wrapperEl.current?.querySelector('.cover-img'),
      {
        opacity: 100,
      },
      `-=${ANIMATION_DURATION}`
    );

    tl.to(
      wrapperEl.current.querySelector('.cover-img'),
      {
        opacity: 100,
      },
      `-=${ANIMATION_DURATION * 2}`
    );

    tl.to(
      document.querySelector('.project-wrapper'),
      {
        opacity: 0,
      },
      0
    );

    tl.to(
      document.querySelector('.project-wrapper'),
      {
        height: `${currentProjectHeadingHeight}px`,
      }
      // `-=${ANIMATION_DURATION}`
    );

    tl.call(() => {
      console.time('scroll');
      window.scroll({top: 0, behavior: 'smooth'});
    });

    tl.call(
      () => {
        console.timeEnd('scroll');

        el.style.top = el.getBoundingClientRect().top;
        el.style.left = el.getBoundingClientRect().left;
        el.style.position = 'fixed';
      },
      null,
      `+=${ANIMATION_DURATION}`
    );
  }

  useEffect(() => {
    // Stop the function if it's the current project
    if (isNextProject) return;

    document.body.style['--project-heading-height'] = `${
      headerEl.current?.getBoundingClientRect().height
    }px`;

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

    tl.from(headerEl.current?.querySelectorAll('div:nth-child(2)'), {
      height: 0,
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
          className={classNames(
            'grid grid-cols-1 md:grid-cols-4 items-end px-screen py opacity-0 current-project-heading gap-y-0',
            !isNextProject && 'py'
          )}
          ref={headerEl}
        >
          <ProjectTitle year={year} name={name} tagline={tagline} />
          <div className="md:pt-8 text-base flex flex-col">
            <ul className="pt">
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
              entry: {delay: 3 - 0.1},
            })
          }
        >
          {isNextProject && (
            <>
              <ProjectTitle
                year={year}
                name={name}
                tagline={tagline}
                className="next-project-heading"
                isNextProject={isNextProject}
              />
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
