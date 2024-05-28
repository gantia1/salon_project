import React from 'react';
import {useTranslation} from "next-i18next";
import SalonCard from "@/components/customer/salons/SalonCard";
import TestPNG from "@/public/assets/images/png/testSalon.png";
import LeftSVG from "@/public/assets/images/svg/frame18.svg";
import RightSVG from "@/public/assets/images/svg/frame15.svg";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";


export default function Salons() {
    const {t} = useTranslation();

    return (
        <>
            <div className="w-full bg-light-purple">
                <div
                    className="relative pt-[30px] pb-10 px-5 lg:px-[100px] max-w-[1440px] m-auto">
                    <h1 className="text-center font-customBold text-2xl font-bold">ჩემი სალონები</h1>
                    <LeftSVG className="absolute left-0 rotate-90 lg:rotate-0 lg:left-8 -top-5 lg:top-16"/>
                    <CustomLinkWithArrow href="/">
                        ყველას ნახვა
                    </CustomLinkWithArrow>
                    <div className="grid grid-cols-sm lg:grid-cols-auto gap-5">
                        {[...Array(3)].map((_, index) => (
                            <SalonCard
                                key={index}
                                img={TestPNG}
                                title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER"
                                time="10:00 - 21:00"
                                phone="+995 571 689889"
                                location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                            />
                        ))}
                    </div>
                    <RightSVG className="absolute right-0 bottom-10 hidden lg:block"/>
                </div>
            </div>

            <div
                className="pt-[30px] pb-10 px-5 lg:px-[100px] max-w-[1440px] m-auto">
                <h1 className="text-center font-customBold text-2xl font-bold">{t('salons')}</h1>
                <div className="grid grid-cols-sm lg:grid-cols-auto gap-5">
                    {[...Array(12)].map((_, index) => (
                        <SalonCard
                            key={index}
                            img={TestPNG}
                            title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER"
                            time="10:00 - 21:00"
                            phone="+995 571 689889"
                            location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
Salons.layout = 'CustomerLayout';
