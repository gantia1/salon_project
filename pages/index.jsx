import React from 'react';
import Banner from "@/components/customer/banner/Banner";
import Procedures from "@/components/customer/procedures/Procedures";
import Salons from "@/components/customer/salons/Salons";
import BannerLower from "@/components/customer/banner/BannerLower";
import Feedback from "@/components/customer/feedback/Feedback";
import {useTranslation} from "next-i18next";

export default function Home() {
    const {t} = useTranslation();
    return (
        <>
            <Banner/>
            <Procedures title={t('procedures')}/>
            <Salons/>
            <BannerLower/>
            <Feedback/>
        </>
    );
}

Home.layout = 'GuestLayout';
