import * as React from 'react';
import Button from './Button';

export default function WorkTogether({...props}) {
  return (
    <section className="min-h-[80vh] border-b grid items-center" {...props}>
      <div className="px items-center leading-tight">
        <p className="fs-3xl">
          Let's work together! <br />
          <Button before href="mailto:bm.michelebruno@gmail.com">
            Drop me a line.
          </Button>
        </p>
        <p className="pt-4 fs-lg hidden">
          I'm currently looking for an internship, however you can write me <br />
          if you need a freelance creative developer.
        </p>
      </div>
    </section>
  );
}
