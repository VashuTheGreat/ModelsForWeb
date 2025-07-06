import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from './assets/images/slide1.webp';
import slide2 from './assets/images/slide2.webp';
import slide3 from './assets/images/slide3.webp';
import slide4 from './assets/images/slide4.webp';
import slide5 from './assets/images/slide5.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import Section from './components/section.jsx'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='h-[300px]'>
        
 <Swiper
  direction="horizontal"
  navigation={true}
  pagination={{ clickable: true }}
  mousewheel={true}
  keyboard={true}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
  className="mySwiper"
>


        <SwiperSlide><img src={slide1} alt='Slide 1'/></SwiperSlide>
<SwiperSlide><img src={slide2} alt='Slide 2'/></SwiperSlide>
<SwiperSlide><img src={slide3} alt='Slide 3'/></SwiperSlide>
<SwiperSlide><img src={slide4} alt='Slide 4'/></SwiperSlide>
<SwiperSlide><img src={slide5} alt='Slide 5'/></SwiperSlide>
       
      </Swiper>
    </div>

<div className='pt-10'>
       <Section/>

</div>
    </>
  );
}
