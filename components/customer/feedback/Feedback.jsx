import React from 'react';
import FeedbackCard from "@/components/customer/feedback/FeedbackCard";
import {SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import CustomSwiper from "@/components/customSwiper/CustomSwiper";
import Container from "@/components/container/Container";
import {Heading} from "@/components/heading/Heading";

export default function Feedback() {

    const breakpoints = {
        620: {
            slidesPerView: 2
        },
        850: {
            slidesPerView: 3
        }
    };

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
        <Container className="pt-[30px] pb-10">
            <Heading>რას ამბობენ ჩვენზე</Heading>
            <CustomSwiper breakpoints={breakpoints} className='feedback-swiper'>
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
            </CustomSwiper>
        </Container>
    );
}
