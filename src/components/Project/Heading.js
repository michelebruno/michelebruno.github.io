import * as React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import classNames from 'classnames';
import gsap from 'gsap';
import {useTriggerTransition} from 'gatsby-plugin-transition-link';
import {useTransitionState} from 'gatsby-plugin-transition-link/hooks';
import {useEffect} from 'react';
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
  useEffect(() => {
    const {transitionStatus} = transitionState;

    return;

    if (isNextProject) {
    } else {
      const tl = gsap.timeline({
        duration: 0.5,
      });

      tl.from(headerEl.current?.querySelector('div:first-child'), {
        opacity: 0,
        yPercent: 10,
        ease: 'power2.out',
      });
      tl.from(headerEl.current?.querySelector('div:nth-child(2) ul'), {
        stagger: 0.1,
        opacity: 0,
        yPercent: 10,
        ease: 'power2.out',
      });

      if (transitionStatus === 'entered') {
        tl.play();
      } else if (transitionStatus === 'exiting') {
        // tl.reverse();
      }
    }
  }, [transitionState]);

  return (
    <>
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
            isNextProject && navigate({to: `/projects/${slug?.current || slug}`, exit: {length: 3}})
          }
        >
          {isNextProject && (
            <>
              <div className="col-span-2 col-start-1 pb lg:pb-0 relative mix-blend-multiply">
                <div>
                  <p className="fs-lg">Next project</p>
                  <Link to={`/projects/${slug?.current || slug}`}>
                    <H1
                      tag={Link}
                      to={`/projects/${slug?.current || slug}`}
                      className="lg:inline leading-none transition-all break-words"
                    >
                      {name}
                    </H1>
                    <span className="fs-xl"> ({year})</span>
                  </Link>
                </div>
                <h2 className="fs-xl text-gray ">{tagline}</h2>
              </div>
              <div className="pt-8 text-base flex flex-col" />
            </>
          )}
        </Cover>
      )}
    </>
  );
}

Heading.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({text: PropTypes.string.isRequired, url: PropTypes.string.isRequired})
  ),
};
