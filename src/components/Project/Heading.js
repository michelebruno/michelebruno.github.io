import * as React from 'react';
import {AnimatedLink, H1} from '../Typography';
import Arrow from '../Arrow';

export default function Heading({name, year, tagline, roles, client, websiteUrl, children}) {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-3 items-end px py-lg">
      <div className="col-span-2 pb lg:pb-0">
        <div>
          <H1 className="lg:inline leading-none">{name}</H1>
          <span className="fs-xl"> ({year})</span>
        </div>
        <h2 className="fs-xl text-gray">{tagline}</h2>
      </div>
      <div className="pt-8 text-base flex flex-col">
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
              <AnimatedLink href={websiteUrl} target="_blank" className="font-bold">
                Visit the website ↗
              </AnimatedLink>
            </li>
          )}
          {children}
        </ul>
      </div>
    </header>
  );
}
