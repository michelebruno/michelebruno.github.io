import * as React from 'react';
import Image from '../Image';

export default function ({cover, thumbnail}) {
  return (
    <div className="h-screen overflow-hidden border-t border-b">
      <Image
        image={typeof cover !== 'undefined' && cover?.childImageSharp ? cover : thumbnail}
        className="h-full w-full object-cover scale-110 object-center"
      />
    </div>
  );
}
