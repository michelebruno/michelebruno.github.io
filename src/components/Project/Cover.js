import * as React from 'react';
import {useEffect} from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import Image from '../Image';

export default function Cover({cover, thumbnail, children, className, ...props}) {
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
          scrub: true,
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
          'cover-img h-full w-full object-cover scale-[120%] object-center bg-white',
          children && 'opacity-0 transition-[opacity] group-hover:opacity-30 '
        )}
      />
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-3 items-end px py overflow-hidden">
        {children}
      </div>
    </div>
  );
}
