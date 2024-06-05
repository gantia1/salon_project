import React from 'react';
import SalonCard from "@/components/customer/salons/SalonCard";
import {useTranslation} from "next-i18next";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";
import CustomSwiper from "@/components/customSwiper/CustomSwiper";
import {SwiperSlide} from "swiper/react";
import Container from "@/components/container/Container";
import {Heading} from "@/components/heading/Heading";
import TestPNG from "@/public/assets/images/png/testSalon.png";

export default function Salons() {
    const {t} = useTranslation();
    const breakpoints = {
        710: {
            slidesPerView: 2
        },
        1260: {
            slidesPerView: 3
        }
    };

    return (
        <Container className="pt-[30px] pb-10 px-0" bg="#FAF8FF">
            <Heading>{t('salons')}</Heading>
            <CustomLinkWithArrow href="/salons">
                ყველას ნახვა
            </CustomLinkWithArrow>
            <CustomSwiper className="salons-swiper"  breakpoints={breakpoints}>
                {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <SalonCard
                            img={TestPNG}
                            key={index}
                            id={index + 1}
                            title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER"
                            time="10:00 - 21:00"
                            phone="+995 571 689889"
                            location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                        />
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </Container>
    );
}
