import React from 'react';
import FirstBannerImg from '@/public/assets/images/png/rectangle2556.png';
import Image from "next/image";
import {Heading} from "@/components/heading/Heading";


function FeedbackCard({name, date, text}) {
    return (
        <div className="flex flex-col gap-y-4 items-center pt-[30px] pb-[50px]">
            <Image src={FirstBannerImg} alt={"feedback"} width={150} height={150} className="rounded-full"/>
            <Heading>{name}</Heading>
            <p className="text-sm text-[#838383]">{date}</p>
            <p className="text-center text-[#838383]">{text}</p>
        </div>
    );
}

export default FeedbackCard;
