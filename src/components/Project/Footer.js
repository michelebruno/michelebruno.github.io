import * as React from 'react';

export default function Footer({children}) {
  return (
    <footer className="pb-lg px-screen grid sm:grid-cols-2 lg:grid-cols-4  w-full">
      {children}
    </footer>
  );
}
