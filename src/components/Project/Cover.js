import * as React from 'react';
import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from '../Image';

export default function ({cover, thumbnail}) {
  const imageRef = React.useRef(null);

  useEffect(() => {
    const an = gsap.to(imageRef.current, {
      duration: 1,
      yPercent: -20,
      plugins: [ScrollTrigger],
      scrollTrigger: {
        // trigger: imageRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    return an.stop;
  }, [cover, thumbnail]);

  return (
    <div className="h-[80vh] overflow-hidden border-t border-b">
      <Image
        ref={imageRef}
        image={
          typeof cover !== 'undefined' && (cover?.childImageSharp || cover?.asset)
            ? cover?.asset || cover
            : thumbnail
        }
        className="h-full w-full object-cover scale-[120%] object-center"
      />
    </div>
  );
}
