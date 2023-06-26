import * as React from 'react';
import PropTypes from 'prop-types';
import {Link, navigate} from 'gatsby';
import classNames from 'classnames';
import {AnimatedLink, H1} from '../Typography';
import Cover from './Cover';
import Image from '../Image';

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
  trasitionState,
}) {
  return (
    <>
      {!isNextProject && (
        <header className="grid grid-cols-1 md:grid-cols-4 items-end px py">
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
          onClick={() => isNextProject && navigate(`/projects/${slug?.current || slug}`)}
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
