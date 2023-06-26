import * as React from 'react';
import {useEffect} from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import Image from '../Image';

export default function ({cover, thumbnail, children, className, ...props}) {
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const an = gsap.fromTo(
      imageRef.current,
      {yPercent: 10},
      {
        yPercent: -10,
        ease: 'none',
        delay: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: '+=100%',
          markers: true,
          scrub: 0.001,
        },
      }
    );

    return an.stop;
  }, []);

  return (
    <div
      className={classNames('h-[80vh] overflow-hidden border-t border-b relative group', className)}
      ref={containerRef}
      {...props}
    >
      <Image
        ref={imageRef}
        image={
          typeof cover !== 'undefined' && (cover?.childImageSharp || cover?.asset)
            ? cover?.asset || cover
            : thumbnail
        }
        className={classNames(
          'h-full w-full object-cover scale-[120%] object-center',
          children && 'opacity-0 transition-all group-hover:opacity-30 '
        )}
      />
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3 items-end px py-lg  overflow-hidden">
        {children}
      </div>
    </div>
  );
}
