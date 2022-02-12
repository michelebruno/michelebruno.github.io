import * as React from 'react';
import {AnimatedLink, H1} from '../Typography';
import Arrow from '../Arrow';

export default function Heading({name, year, tagline, roles, client, websiteUrl, githubRepo}) {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-3 items-end px pt-32 pb-16 lg:py-32">
      <div className="col-span-2 pb-16 lg:pb-0">
        <div>
          <H1 className="lg:inline leading-none">{name}</H1>
          <span className="fs-xl"> ({year})</span>
        </div>
        <h2 className="fs-xl leading-tight text-gray">{tagline}</h2>
      </div>
      <div className="pt-8 text-base flex flex-col justify-between h-full">
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
        </ul>
        <ul>
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
          {githubRepo && (
            <li>
              <AnimatedLink
                href={githubRepo}
                target="_blank"
                className="font-bold "
                icon={<Arrow className="-rotate-45" />}
              >
                Check the repo
              </AnimatedLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
