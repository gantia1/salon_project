import React from 'react';
import SalonCard from "@/components/customer/salons/SalonCard";
import {useTranslation} from "next-i18next";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";
import CustomSwiper from "@/components/customSwiper/CustomSwiper";
import {SwiperSlide} from "swiper/react";

function Salons() {
    const {t} = useTranslation();
    const breakpoints={
        710: {
            slidesPerView: 2
        },
        1260: {
            slidesPerView: 3
        }
    };

    return (
        <div className="w-full bg-light-purple">
            <div className="pt-[30px] pb-10 px-5 lg:px-[100px] max-w-[1440px] m-auto">
                <h3 className="font-customBold text-2xl font-bold">{t('salons')}</h3>
                <CustomLinkWithArrow href="/salons">
                    ყველას ნახვა
                </CustomLinkWithArrow>
                <CustomSwiper className="salons-swiper" pagination={false} breakpoints={breakpoints}>
                    {[...Array(12)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <SalonCard
                                title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER"
                                time="10:00 - 21:00"
                                phone="+995 571 689889"
                                location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                            />
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
            </div>
        </div>
    );
}

export default Salons;
