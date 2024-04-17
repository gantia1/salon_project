import React from 'react';
import {useTranslation} from "next-i18next";
import ProceduresCard from "@/components/customer/procedures/ProceduresCard";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";

function Procedures() {
    const {t} = useTranslation();

    return (
        <div className="pt-[30px] pb-10 px-5 lg:px-[100px] max-w-[1440px] m-auto">
            <h3 className="text-center font-customBold text-2xl font-bold">{t('procedures')}</h3>
            <CustomLinkWithArrow href="/about-us">
                ყველას ნახვა
            </CustomLinkWithArrow>
            <div className="procedures-card flex gap-5 lg:flex-wrap overflow-x-auto pb-5 lg:pb-0">
                {[...Array(12)].map((_, index) => (
                    <ProceduresCard text="თმა (ქალი)" key={index}/>
                ))}
            </div>
        </div>
    );
}

export default Procedures;
