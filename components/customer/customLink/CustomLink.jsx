import React from 'react';
import Arrow from "@/public/assets/images/svg/rightArrow.svg";
import Link from "next/link";

const CustomLinkWithArrow = ({ href, children }) => {
    return (
        <div className="flex justify-center lg:justify-end">
            <Link href={href} className="font-customBold font-bold text-base items-center flex justify-end w-fit gap-x-1 lg:gap-x-8 my-5">
                {children} <Arrow />
            </Link>
        </div>
    );
};

export default CustomLinkWithArrow;
