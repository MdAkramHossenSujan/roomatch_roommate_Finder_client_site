import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Bannercard from './Bannercard';

const Banner = ({webInfo}) => {
// console.log(webInfo)
    return (
        <>
        
         <div className=''>
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