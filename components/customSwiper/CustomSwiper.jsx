import React from 'react';
import {Pagination} from "swiper/modules";
import {Swiper} from "swiper/react";


export default function CustomSwiper({children, className, breakpoints}) {
    return (
        <Swiper
            className={className}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{clickable: true}}
            breakpoints={breakpoints}
            modules={[Pagination]}
        >
            {children}
        </Swiper>
    );
}
