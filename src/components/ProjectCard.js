import * as React from 'react';
import {graphql, Link, navigate, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './Image';
import Button from './Button';
import {H3} from './Typography';

export function ProjectCard({project, position, className, version}) {
  const {projects} = useStaticQuery(graphql`
    {
      projects: allProjectsCsv {
        nodes {
          ...ProjectFragment
        }
      }
    }
  `);

  const {name, year, type, link, tagline, thumbnail} =
    projects.nodes.find(({slug}) => slug === project) ||
    console.error(`Project ${project} not found`);

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
          className="bg-white object-cover h-full w-full absolute inset-0 opacity-0 group-hover:opacity-50 transition-all group-hover:scale-105"
        />
        <div className="absolute inset-0 grid grid-rows-[14rem_auto_auto] px-32 py-32 ">
          <h3 className="fs-3xl leading-tight">
            {/* {position.toString().padStart(2, 0)}/ */}
            {name}
          </h3>
          <div className="text-">
            <p className="group-hover:translate-y-full group-hover:opacity-0 transition-all text-gray">
              {type.join(' / ')}
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
        className={classNames(
          'ver-3 group overflow-hidden',
          'min-aspect-[2/3] border-r border-b relative',
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
        <div className="relative h-full inset-0 grid gap-x-0 grid-rows-3 lg:grid-rows-[13rem_auto_auto] px py">
          <H3>{name}</H3>
          <div>
            <div className="overflow-hidden pb-4">
              <div className="group-hover:translate-y-full group-hover:opacity-0 transition-all fs-lg">
                <h4 className="">{tagline}</h4>
                <p className="text-gray">{type.join(' / ')}</p>
              </div>
            </div>
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
        <p className="fs-2xl">{type.join(', ')}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.string.isRequired,
};
