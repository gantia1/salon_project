import React from 'react';
import FeedbackCard from "@/components/customer/feedback/FeedbackCard";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {FreeMode, Pagination} from 'swiper/modules';

function Feedback() {
    const data = [
        {
            name: "ირმა ჭეიშვილი",
            date: "12/04/2024",
            text: "Here goes the review which is very nice and engaging. Here goes the review which is very nice and engaging."
        },
        {
            name: "გიორგი ბერიძე",
            date: "9/04/2024",
            text: "Here goes the review which is very nice and engaging. Here goes the review which is very nice and engaging."
        },
        {
            name: "ნინი მაისურაძე",
            date: "27/03/2024",
            text: "Here goes the review which is very nice and engaging. Here goes the review which is very nice and engaging."
        },
        {
            name: "ნინი მაისურაძე",
            date: "27/03/2024",
            text: "Here goes the review which is very nice and engaging. Here goes the review which is very nice and engaging."
        },
    ];

    return (
        <div className="pt-[30px] pb-10 px-5 lg:px-[100px] max-w-[1440px] m-auto">
            <h3 className="text-center font-customBold text-2xl font-bold">რას ამბობენ ჩვენზე</h3>
            <Swiper
                className="feedbackSwiper"
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    620: {
                        slidesPerView: 2
                    },
                    850: {
                        slidesPerView: 3
                    }
                }}
                modules={[FreeMode, Pagination]}
            >
                {data.map((feedback, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <FeedbackCard
                            name={feedback.name}
                            date={feedback.date}
                            text={feedback.text}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Feedback;
