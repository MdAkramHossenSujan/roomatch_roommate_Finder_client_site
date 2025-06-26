import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import one from '../assets/rooms/pexels-cottonbro-4778421.jpg'
import two from '../assets/rooms/pexels-cottonbro-4778635.jpg'
import three from '../assets/rooms/pexels-cottonbro-4781426.jpg';
import four from '../assets/rooms/pexels-pixabay-265004.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Bannercard from './Bannercard';

const Banner = () => {
const webInfo = [
  {
    country: "Dhaka",
    image: one,
    comment: "Looking for a clean, cozy space in the heart of Dhaka — ideally with a…"
  },
  {
    country: "Chattagram",
    image: two,
    comment: "Seeking a friendly roommate to share a peaceful flat in vibrant Chatta…"
  },
  {
    country: "Brahmanbaria",
    image: three,
    comment: "Looking for a reliable roommate to share a calm and affordable space i…"
  },
  {
    country: "Rajshahi",
    image: four,
    comment: "Searching for a tidy and respectful roommate in serene Rajshahi — idea…"
  }
];

    return (
        <>
        
         <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
      >
        {
            webInfo.map((info,index)=><SwiperSlide key={index}><Bannercard info={info}></Bannercard></SwiperSlide>)
        }
      </Swiper>
         </div>
        </>
    );
};

export default Banner;