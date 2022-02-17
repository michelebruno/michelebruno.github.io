import * as React from 'react';
import {H3} from '../Typography';

export default function Footer({children}) {
  return (
    <footer className="grid lg:grid-cols-4 pb-lg">
      <div className="col-span-2 col-start-2">{children}</div>
    </footer>
  );
}
