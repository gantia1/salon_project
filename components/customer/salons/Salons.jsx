import React from 'react';
import SalonCard from "@/components/customer/salons/SalonCard";
import {useTranslation} from "next-i18next";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";

function Salons() {
    const {t} = useTranslation();
    return (
        <div className="w-full bg-light-purple">
            <div className="pt-[30px] pb-10 px-[100px] max-w-[1440px] m-auto">
                <h3 className="text-center font-customBold text-2xl font-bold">{t('salons')}</h3>
                <CustomLinkWithArrow href="/salons">
                    ყველას ნახვა
                </CustomLinkWithArrow>
                <div className="salon-cards pb-5 flex gap-5 overflow-x-auto">
                    {[...Array(12)].map((_, index) => (
                        <SalonCard
                            key={index}
                            title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER" time="10:00 - 21:00"
                            phone="+995 571 689889" location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Salons;
