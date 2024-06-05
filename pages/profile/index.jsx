import React from 'react';
import Image from "next/image";
import TestPNG from "@/public/assets/images/png/testSalon.png";
import LeftSVG from "@/public/assets/images/svg/frame18.svg";
import RightSVG from "@/public/assets/images/svg/frame15.svg";
import Phone from "@/public/assets/images/svg/phone.svg";
import Mail from "@/public/assets/images/svg/mail.svg";
import SalonCard from "@/components/customer/salons/SalonCard";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";
import Container from "@/components/container/Container";

export default function Profile() {
    return (
        <>
            <Container
                className="relative pt-[50px] pb-10 justify-center flex gap-x-10" bg="#FAF8FF">
                <Image className="rounded-full" src={TestPNG} alt={'d'} width={140} height={140}/>
                <div className="flex flex-col gap-y-5">
                    <h3 className="font-customBold font-bold text-2xl">სალომე ველიჯანაშვილი</h3>
                    <p className="flex gap-x-1 items-center"><Phone/> +995 595 784432</p>
                    <p className="flex gap-x-1 items-center"><Mail/> salome.velijanashvili@gmail.com</p>
                </div>
                <LeftSVG className="absolute left-24"/>
                <RightSVG className="absolute right-[100px]"/>
            </Container>

            <Container
                className="pt-[50px] pb-10">
                <h3 className="font-customBold font-bold text-2xl text-center">მიმდინარე პროცედურები</h3>
                <CustomLinkWithArrow href="/">ისტორია</CustomLinkWithArrow>
                <div className="grid grid-cols-sm lg:grid-cols-auto gap-6">
                    {[...Array(3)].map((_, index) => (
                        <SalonCard
                            key={index}
                            fontSize="20px"
                            title="შილაკი"
                            time="18:30 | Thursday | March 21 "
                            phone="+995 591 612 525"
                            location="13 Alexander Kazbegi Ave, Tbilisi"
                        />
                    ))}
                </div>
            </Container>
        </>
    );
}

Profile.layout = 'CustomerLayout';
