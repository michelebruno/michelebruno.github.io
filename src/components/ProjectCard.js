import * as React from 'react';
import {graphql, Link, navigate, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useState} from 'react';
import Image from './Image';
import Button from './Button';
import {AnimatedLink, H3} from './Typography';
import Arrow from './Arrow';

export function ProjectCard({project, position, className, version, ...props}) {
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

  const {name, year, roles, type, slug, tagline, thumbnail, cover} = project;
  const link = `/projects/${slug}/`;

  /**
   * CARD DEFAULT
   */
  return (
    <div className="project-card relative border-b py-4 lg:py-0" {...props}>
      <div className=" lg:hidden px py block">
        <Image
          image={cover || thumbnail}
          className={classNames(
            'bg-white object-cover aspect-[16/9] h-full transition-all ',
            showImg ? 'opacity-100 ' : 'lg:opacity-0'
          )}
        />
      </div>
      <Link
        to={link}
        className={classNames('relative group block px py z-10', className)}
        onMouseEnter={() => {
          setShowImg(true);
        }}
        onMouseLeave={() => {
          setShowImg(false);
        }}
      >
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
      </Link>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
};
