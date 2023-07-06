import * as React from 'react';
import {useEffect} from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import Image from '../Image';

export default function Cover({cover, thumbnail, children, className, ...props}) {
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);

  useEffect(() => {
    return;
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
      className={classNames(
        'md:h-[80vh] overflow-hidden border-t border-b relative group',
        className
      )}
      ref={containerRef}
      {...props}
    >
      <Image
        ref={imageRef}
        loading="eager"
        preload
        image={
          typeof cover !== 'undefined' && (cover?.childImageSharp || cover?.asset)
            ? cover?.asset || cover
            : thumbnail
        }
        className={classNames(
          'cover-img h-full w-full object-cover md:scale-[120%] object-center bg-white lg:py',
          children && 'md:opacity-0 transition-[opacity] md:group-hover:opacity-30 '
        )}
      />
      {children && (
        <div className="md:absolute left-0 right-0 bottom-0 grid grid-cols-1 md:grid-cols-4 items-end px py overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
}
