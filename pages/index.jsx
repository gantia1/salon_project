import React from 'react';
import Banner from "@/components/customer/banner/Banner";
import Procedures from "@/components/customer/procedures/Procedures";
import Salons from "@/components/customer/salons/Salons";
import BannerLower from "@/components/customer/banner/BannerLower";

export default function Home() {
    return (
        <>
            <Banner/>
            <Procedures/>
            <Salons/>
            <BannerLower/>
        </>
    );
}

Home.layout = 'CustomerLayout';
