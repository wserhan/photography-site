// Import Swiper React components
import Image from 'next/image';

import styles from '../styles/Slideshow.module.scss';

import { Navigation, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// const images = [
//   '/images/slide_2.jpg',
//   '/images/slide_3.jpg',
//   '/images/slide_4.jpg'
// ];

export default function Slideshow({ photos }) {
  return (
    <section className={styles.gallery} style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        keyboard
        autoplay
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                layout="intrinsic"
                width="1024"
                height="683"
                src={photo.image}
                alt="photographs"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
