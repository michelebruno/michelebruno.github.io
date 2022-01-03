import * as React from 'react';
import {graphql, Link, navigate, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './Image';
import Button from './Button';

export function ProjectCard({project, position, className, version}) {
  const {projects} = useStaticQuery(graphql`
    {
      projects: allContentfulProjects {
        nodes {
          ...ProjectFragment
        }
      }
    }
  `);

  const {
    name,
    year,
    roles,
    link,
    images: [thumbnail],
  } = projects.nodes.find(({slug}) => slug === project) || console.error('Project not found');

  if (version === 2) {
    return (
      <div
        className={classNames(
          'group overflow-hidden cursor-pointer',
          'aspect-[2/3] border-r relative',
          className
        )}
      >
        <Image
          image={thumbnail}
          className="bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white opacity-30" />
        <div className="absolute inset-0 grid grid-rows-[12rem_auto_auto] px-32 py-32 ">
          <h3 className="text-5xl leading-tight">
            {/* {position.toString().padStart(2, 0)}/ */}
            {name}
          </h3>
          <div className=" text-xl">
            <p className=" group-hover:translate-y-full group-hover:opacity-0 transition-all duration-500">
              {roles.join(' | ')}
            </p>
          </div>
          <div className="self-end">
            <Button as={Link} to={link} before>
              View
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (version === 3) {
    return (
      <div
        className={classNames('group overflow-hidden  ', 'aspect-[2/3] border relative', className)}
      >
        <Image
          image={thumbnail}
          className="bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white opacity-30" />
        <div className="absolute inset-0 grid grid-rows-[12rem_auto_auto] px-16 py-16 ">
          <h3 className="text-5xl leading-tight">
            {/* {position.toString().padStart(2, 0)}/ */}
            {name}
          </h3>
          <div className=" text-xl">
            <p className=" group-hover:translate-y-full group-hover:opacity-0 transition-all duration-500">
              {roles.join(' | ')}
            </p>
          </div>
          <div className="self-end">
            <Button as={Link} to={link} before>
              View
            </Button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * CARD DEFAULT
   */
  return (
    <div className={classNames('group', className)} onClick={() => navigate(link)}>
      <div className="aspect-h-9 aspect-w-16 overflow-hidden">
        <Image
          image={thumbnail}
          className="bg-white object-cover h-full w-full transition-all duration-1000 group-hover:scale-125"
        />
      </div>

      <div className="flex justify-between relative mt-4  ">
        <h3 className="text-6xl font-medium">
          {/* {position.toString().padStart(2, 0)}/ */}
          {name}
        </h3>
        <p className="text-2xl">{roles.join(', ')}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
};
