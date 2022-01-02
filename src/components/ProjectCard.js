import * as React from 'react';
import {graphql, Link, navigate, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './Image';

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
          'border-r border-b px-32 py-16 relative',
          className
        )}
        onClick={() => navigate(link)}
      >
        <Image
          image={thumbnail}
          className="bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white opacity-20" />
        <div className="justify-between relative mt-4  ">
          <h3 className="text-4xl font-medium">
            {/* {position.toString().padStart(2, 0)}/ */}
            {name}
          </h3>
          <p className="font-extralight  text-2xl">{roles.join(' | ')}</p>
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
        <p className="font-extralight  text-2xl">{roles.join(', ')}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
};
