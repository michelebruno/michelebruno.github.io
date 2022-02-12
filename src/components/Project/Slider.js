import {Swiper, SwiperSlide} from 'swiper/react';
import * as React from 'react';
import SwiperCore, {Autoplay} from 'swiper';
import Image from '../Image';

SwiperCore.use([Autoplay]);

export default function Slider({images}) {
  return (
    <Swiper autoplay>
      {images.map(img => (
        <SwiperSlide>
          <Image className="w-full" image={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
