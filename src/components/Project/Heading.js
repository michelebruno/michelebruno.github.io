import * as React from 'react';
import {AnimatedLink, H1} from '../Typography';
import Arrow from '../Arrow';

export default function Heading({name, year, tagline, roles, client, websiteUrl}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-end pt-32 pb-16  lg:py-32">
      <div className="col-span-2 px pb-16 lg:pb-0">
        <div>
          <H1 className="lg:inline">{name}</H1>
          <span className="text-3xl ">({year})</span>
        </div>
        <h2 className="text-2xl lg:text-4xl pt-3 text-gray">{tagline}</h2>
      </div>
      <ul className="px pt-8 lg:px-32 ">
        {roles && (
          <li>
            <strong>Role:</strong> {roles.join(', ')}
          </li>
        )}
        <li>
          <strong>Client:</strong> {client}
        </li>
        {websiteUrl && (
          <li>
            <AnimatedLink
              href={websiteUrl}
              target="_blank"
              className="font-bold pt-2"
              icon={<Arrow className="-rotate-90" />}
            >
              Visit the website
            </AnimatedLink>
          </li>
        )}
      </ul>
    </div>
  );
}
