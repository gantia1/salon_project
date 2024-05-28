import React from 'react';
import Time from "@/public/assets/images/svg/time.svg";
import Phone from "@/public/assets/images/svg/phone.svg";
import Location from "@/public/assets/images/svg/location.svg";
import Direction from "@/public/assets/images/svg/direction.svg";


function SalonCard({title, time, phone, location}) {
    return (
        <div className="p-[30px] rounded-[10px] bg-white  shadow-custom flex flex-col gap-y-4 lg:min-w-[345px]">
            <h3 className="text-left font-customBold text-2xl font-bold line-clamp-2">{title}</h3>
            <p className="flex gap-x-2.5"><Time/> {time}</p>
            <a className="flex gap-x-2.5 w-fit" href={`tel:${phone}`} rel="noopener noreferrer">
                <Phone/> {phone}
            </a>
            <p className="flex gap-x-2.5"><Location width={20}/> {location} <Direction width={28}/> </p>
        </div>
    );
}

export default SalonCard;
