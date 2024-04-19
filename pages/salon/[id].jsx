import {useRouter} from 'next/router';
import React from "react";
import LeftSVG from "@/public/assets/images/svg/frame18.svg";
import RightSVG from "@/public/assets/images/svg/frame15.svg";
import TestPNG from "@/public/assets/images/png/testSalon.png";
import Time from "@/public/assets/images/svg/time.svg";
import Phone from "@/public/assets/images/svg/phone.svg";
import Location from "@/public/assets/images/svg/location.svg";
import Direction from "@/public/assets/images/svg/direction.svg";
import Image from 'next/image';
import {Image as AntImage} from 'antd';

export default function Salon() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div className="w-full bg-light-purple">
            <div
                className="flex gap-x-10 max-w-[1440px] m-auto px-[100px] text-sm xl:text-base relative py-[50px]">
                <div>
                    <LeftSVG className="absolute left-10"/>
                    <Image src={TestPNG} alt="salon_logo" width={250} height={250}/>
                </div>
                <div className="flex flex-col gap-y-5 ">
                    <h3 className="font-customBold font-bold text-2xl">გრაცია - სილამაზის ცენტრი / GRACIA BEAUTY
                        CENTER</h3>
                    <p className="flex gap-x-2.5"><Time/>10:00 - 21:00</p>
                    <a className="flex gap-x-2.5 w-fit" href={`tel:${4}`} rel="noopener noreferrer">
                        <Phone/> +995 571 689889
                    </a>
                    <a className="flex gap-x-2.5 bg-[#F5F1FD] rounded-[5px] p-2.5 w-fit -translate-x-1 cursor-pointer"
                       href="https://maps.app.goo.gl/VQhQdontEsvFhxY96" target="_blank">
                        <Location width={20}/> 6/2 Grigol Robakidze aven. 0159 Tbilisi, Georgia <Direction width={28}/>
                    </a>
                    <div className="salon-images flex gap-x-2.5 max-w-[550px] overflow-x-scroll">
                        <AntImage.PreviewGroup>
                            {Array.from({length: 10}, (_, index) => (
                                <AntImage key={index}
                                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                          width={70} height={70}/>
                            ))}
                        </AntImage.PreviewGroup>
                    </div>
                </div>
                <RightSVG className="absolute right-[100px]"/>
            </div>
        </div>
    );
}

Salon.layout = 'CustomerLayout';
