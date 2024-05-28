import React from 'react';
import {Pagination} from "swiper/modules";
import {Swiper} from "swiper/react";


function CustomSwiper({children, className, pagination, breakpoints}) {
    return (
        <Swiper
            className={className}
            slidesPerView={1}
            spaceBetween={30}
            pagination={
                pagination === false ? false : {clickable: true,}
            }
            breakpoints={breakpoints}
            modules={[Pagination]}
        >
            {children}
        </Swiper>
    );
}

export default CustomSwiper;
