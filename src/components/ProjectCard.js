import * as React from 'react';
import {graphql, Link, navigate, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useState} from 'react';
import Image from './Image';
import Button from './Button';
import {AnimatedLink, H3} from './Typography';
import Arrow from './Arrow';

export function ProjectCard({project, position, className, version}) {
  const [showImg, setShowImg] = useState(false);

  const {projects} = useStaticQuery(graphql`
    {
      projects: allProjectsCsv {
        nodes {
          ...ProjectFragment
        }
      }
    }
  `);

  const {name, year, type, slug, tagline, thumbnail, cover} =
    projects.nodes.find(({slug}) => slug === project) ||
    console.error(`Project ${project} not found`);
  const link = `/projects/${slug}/`;
  if (version === 2) {
    return (
      <div
        className={classNames(
          'group overflow-hidden cursor-pointer',
          'aspect-[16/9]  border-r relative',
          className
        )}
      >
        <Image
          image={thumbnail}
          className="bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-50 transition-all group-hover:scale-105"
        />
        <div className="absolute inset-0 grid grid-rows-[12rem_auto_auto] px-32 py-32 ">
          <h3 className="fs-3xl">
            {/* {position.toString().padStart(2, 0)}/ */}
            {name}
          </h3>
          <div className="text-">
            <p className="group-hover:translate-y-full group-hover:opacity-0 transition-all text-gray">
              {type.join(' / ')}
            </p>
          </div>
          <div className="self-end">
            <AnimatedLink as={Link} to={link} before>
              View
            </AnimatedLink>
          </div>
        </div>
      </div>
    );
  }

  if (version === 3) {
    return (
      <div
        className={classNames(
          'ver-3 group overflow-hidden',
          'aspect-[4/5] border relative',
          className
        )}
        role="group"
        onClick={() => navigate(link)}
      >
        <Image
          image={thumbnail}
          className="bg-white object-cover h-full w-full absolute inset-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="bg-white absolute inset-0 opacity-50" />
        <div className="relative h-full inset-0 grid gap-x-0 grid-rows-3 lg:grid-rows-[8rem_auto_auto] px py  mix-blend-multiply">
          <H3>{name}</H3>
          <div>
            <div className="overflow-hidden pb">
              <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all fs-lg">
                <h4 className="">{tagline}</h4>
                <p className="text-gray">{type.join(' + ')}</p>
              </div>
            </div>
          </div>
          <div className="self-end">
            <AnimatedLink as={Link} to={link}>
              View →
            </AnimatedLink>
          </div>
        </div>
      </div>
    );
  }

  /**
   * CARD DEFAULT
   */
  return (
    <>
      <div className="fixed inset-16 -z-10 px py">
        <div className=" h-1/2 w-1/2  right-0 top-1/2 -translate-y-1/2 absolute">
          <Image
            image={cover || thumbnail}
            className={classNames(
              'bg-white object-cover aspect-[9/16] h-full transition-all ',
              showImg ? 'opacity-100 ' : 'opacity-0 '
            )}
          />
        </div>
      </div>
      <Link to={link} className={classNames('group block  border-b px py', className)}>
        <div
          className=" relative "
          onMouseEnter={e => {
            setShowImg(true);
          }}
          onMouseLeave={e => {
            setShowImg(false);
          }}
        >
          <div className="lg:max-w-[75%]">
            <h2 className="fs-3xl inline ">
              {/* {position.toString().padStart(2, 0)}/ */}
              {name}
            </h2>
            <div className="inline-grid gap-0 fs-base  !leading-none  pt-4 text-gray align-top">
              <span className="">{type.join(' + ')}</span>
            </div>
          </div>
          <h3 className="fs-xl text-gray">{tagline}</h3>
        </div>
      </Link>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
};
