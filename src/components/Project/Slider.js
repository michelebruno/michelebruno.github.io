import {Swiper, SwiperSlide} from 'swiper/react';
import * as React from 'react';
import {Autoplay} from 'swiper';
import Image from '../Image';
import 'swiper/css';

export default function Slider({images, className}) {
  return (
    <Swiper className={className} autoplay modules={[Autoplay]}>
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <Image className="w-full" image={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
