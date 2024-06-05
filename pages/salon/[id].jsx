import {useRouter} from 'next/router';
import React from "react";
import LeftIcon from "@/public/assets/images/svg/frame18.svg";
import RightIcon from "@/public/assets/images/svg/frame15.svg";
import TestPNG from "@/public/assets/images/png/testSalon.png";
import TimeIcon from "@/public/assets/images/svg/time.svg";
import PhoneIcon from "@/public/assets/images/svg/phone.svg";
import LocationIcon from "@/public/assets/images/svg/location.svg";
import DirectionIcon from "@/public/assets/images/svg/direction.svg";
import Image from 'next/image';
import Container from "@/components/container/Container";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import Procedures from "@/components/customer/procedures/Procedures";

const salonImages = Array.from({length: 10}, (_, index) => "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png");


export default function Salon() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Container className="flex lg:gap-x-10 text-sm xl:text-base relative py-[50px] overflow-hidden"
                       bg="#FAF8FF">
                <div>
                    <LeftIcon className="absolute left-10 rotate-90 lg:rotate-0 -top-14 lg:top-12"/>
                    <Image src={TestPNG} className="hidden lg:block min-w-[250px]" alt="salon_logo" width={250}
                           height={250}/>
                </div>
                <div className="flex flex-col gap-y-5">
                    <h3 className="font-customBold font-bold text-2xl">გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY
                        CENTER</h3>
                    <p className="flex gap-x-2.5"><TimeIcon/>10:00 - 21:00</p>
                    <a className="flex gap-x-2.5 w-fit" href="tel:+995571689889" rel="noopener noreferrer">
                        <PhoneIcon/> +995 571 689889
                    </a>
                    <a className="flex gap-x-2.5 bg-[#F5F1FD] rounded-[5px] p-2.5 w-fit -translate-x-1 cursor-pointer"
                       href="https://maps.app.goo.gl/VQhQdontEsvFhxY96" target="_blank">
                        <LocationIcon width={20}/> 6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia <DirectionIcon
                        width={28}/>
                    </a>
                    <div className="salon-images gap-2.5 flex-wrap lg:flex hidden">
                        <ImageGallery images={salonImages}/>
                    </div>
                </div>
                <RightIcon className="absolute right-5 hidden lg:block"/>
                <LeftIcon className="absolute right-0 lg:hidden"/>
            </Container>

            <Container className="salon-images flex gap-x-2.5 items-center lg:hidden">
                <Image src={TestPNG} alt="salon_logo" width={70} height={70}/>
                <div className="flex gap-x-2.5 items-center overflow-x-auto">
                    <ImageGallery images={salonImages}/>
                </div>
            </Container>
            <Procedures title="ჩემი პროცედურები"/>
            <Procedures title="პროცედურები" bg="#FAF8FF"/>
        </>
    );
}

Salon.layout = 'GuestLayout';
