import React, {useState} from 'react';
import {useTranslation} from "next-i18next";
import SalonCard from "@/components/customer/salons/SalonCard";
import TestPNG from "@/public/assets/images/png/testSalon.png";
import LeftIcon from "@/public/assets/images/svg/frame18.svg";
import RightIcon from "@/public/assets/images/svg/frame15.svg";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";
import Container from "@/components/container/Container";
import {Heading} from "@/components/heading/Heading";
import Filter from "@/components/filter/Filter";
import {Pagination} from "antd";


export default function Salons() {
    const {t} = useTranslation();
    const [meta, setMeta] = useState();
    const handlePageChange = () => {
    }

    return (
        <>
            <Container
                className="relative pt-[30px] pb-10" bg="#FAF8FF">
                <Heading>ჩემი სალონები</Heading>
                <LeftIcon className="absolute left-0 rotate-90 lg:rotate-0 lg:left-8 -top-5 lg:top-16"/>
                <CustomLinkWithArrow href="/">
                    ყველას ნახვა
                </CustomLinkWithArrow>
                <div className="grid grid-cols-sm lg:grid-cols-auto gap-6">
                    {[...Array(3)].map((_, index) => (
                        <SalonCard
                            key={index}
                            id={index + 1}
                            img={TestPNG}
                            title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER"
                            time="10:00 - 21:00"
                            phone="+995 571 689889"
                            location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                        />
                    ))}
                </div>
                <RightIcon className="absolute right-0 bottom-10 hidden lg:block"/>
            </Container>

            <Container
                className="pt-[30px] pb-10">
                <Heading>{t('salons')}</Heading>
                <Filter/>
                <div className="grid grid-cols-sm lg:grid-cols-auto gap-6">
                    {[...Array(12)].map((_, index) => (
                        <SalonCard
                            key={index}
                            id={index + 1}
                            img={TestPNG}
                            title="გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY CENTER"
                            time="10:00 - 21:00"
                            phone="+995 571 689889"
                            location="6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia"
                        />
                    ))}
                </div>
                <Pagination rootClassName="flex justify-center py-5" defaultCurrent={1} total={50}
                            defaultPageSize={10} onChange={handlePageChange} showSizeChanger={false}/>
            </Container>
        </>
    );
}
Salons.layout = 'GuestLayout';
