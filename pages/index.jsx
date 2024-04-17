import React from 'react';
import Banner from "@/components/customer/banner/Banner";
import Procedures from "@/components/customer/procedures/Procedures";
import Salons from "@/components/customer/salons/Salons";
import BannerLower from "@/components/customer/banner/BannerLower";
import AuthorizationModal from "@/components/modals/AuthorizationModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Feedback from "@/components/customer/feedback/Feedback";

export default function Home() {
    return (
        <>
            <Banner/>
            <Procedures/>
            <Salons/>
            <Feedback/>
            <BannerLower/>
            <AuthorizationModal/>
            <RegisterModal/>
        </>
    );
}

Home.layout = 'CustomerLayout';
