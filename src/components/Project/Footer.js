import * as React from 'react';

export default function Footer({children}) {
  return (
    <footer className=" pb-lg px flex justify-center w-full gap ">
      {children.map((c, i) => (
        <div className="w-full lg:w-1/4" key={i}>
          {c}
        </div>
      ))}
    </footer>
  );
}
