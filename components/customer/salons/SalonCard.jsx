import React from 'react';
import Time from "@/public/assets/images/svg/time.svg";
import Phone from "@/public/assets/images/svg/phone.svg";
import Location from "@/public/assets/images/svg/location.svg";
import Image from "next/image";
import Link from "next/link";

export default function SalonCard({title, time, phone, location, img, fontSize, id}) {
    return (
        <div className="p-[30px] rounded-[10px] bg-white shadow-custom flex flex-col gap-y-4 lg:min-w-[345px]">
            <div className="flex gap-x-2.5">
                {img && <Image src={img} alt={title} width={65} height={65}/>}
                <Link href={`/salon/${id}`} passHref>
                    <h3 className="text-left font-customBold font-bold line-clamp-2" style={{ fontSize: fontSize || '1.5rem' }}>
                        {title}
                    </h3>
                </Link>
            </div>
            <p className="flex gap-x-2.5"><Time/> {time}</p>
            <a className="flex gap-x-2.5 w-fit" href={`tel:${phone}`} rel="noopener noreferrer">
                <Phone/> {phone}
            </a>
            <p className="flex gap-x-2.5"><Location width={20}/> {location}</p>
        </div>
    );
}

