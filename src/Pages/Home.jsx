import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home() {
    
    let navigate = useNavigate();

    // replace with carousel
    return (
            <div className="home-container">
                <div className="banner">
                    <div className="image">
                        <img src="https://images.squarespace-cdn.com/content/v1/5b49a84f5b409b250d87a8a8/1585471853957-74GVJ580CX7XKAZ4PBKM/UCSC-Logo.png" alt="slug"></img>
                    </div>
                </div>

                <div className="home-cards">
                    <div className="announcements">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        keyboard={{
                        enabled: true,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>

    )
}