import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import EventCard from "./EventCard"

import 'swiper/css';
import 'swiper/css/navigation';


export default function EventCarousel(){
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={{
            clickable:true,
        }}
        modules={[Navigation]}
        className='event-swiper'
        >
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       <SwiperSlide><EventCard /></SwiperSlide>
       
        </Swiper>
    )
}