import React from 'react';
import Image from "next/image";
import {useTranslation} from "next-i18next";
import LeftSVG from "@/public/assets/images/svg/frame18.svg";
import RightSVG from "@/public/assets/images/svg/frame15.svg";
import TopRightSVG from "@/public/assets/images/svg/frame17.svg";
import Logo from '@/public/assets/images/png/GlowHub.png';
import FirstBannerImg from '@/public/assets/images/png/rectangle2556.png';
import SecondBannerImg from '@/public/assets/images/png/rectangle2555.png';
import PrimaryButton from "@/components/button/PrimaryButton";
import AppStore from "@/public/assets/images/svg/AppStore.svg";
import GooglePlay from "@/public/assets/images/svg/GooglePlay.svg";

function Banner() {
    const {t} = useTranslation();
    const rightSide = 'flex flex-col gap-y-[62px]';

    return (
        <div className="w-full bg-light-purple">
            <div className="flex justify-between gap-x-2 max-w-[1440px] m-auto px-[100px] text-sm xl:text-base">
                <div className="relative pt-20 pb-14 max-w-[430px] flex flex-col gap-y-2.5 justify-between">
                    <div>
                        <LeftSVG className="absolute -left-16 top-[50px]"/>
                        <p>სალონში უკვე გელიან!</p>
                        <Image src={Logo} alt="logo"/>
                        <hr/>
                        <p className="my-5">
                            დაჯავშნე სასურველი სპეციალისტის პროცედურა
                            სასურველ სალონში სწრაფად და მარტივად.
                        </p>
                        <PrimaryButton type="button" className="w-fit" onClick={() => console.log('test')}>
                            {t('reservation')}
                        </PrimaryButton>
                    </div>
                    <div className="flex items-center">
                        <a className="w-fit" href="https://play.google.com/store/apps" target="_blank"
                           rel="noopener noreferrer">
                            <GooglePlay/>
                        </a>
                        <a className="w-fit" href="https://www.apple.com/app-store/" target="_blank"
                           rel="noopener noreferrer">
                            <AppStore/>
                        </a>
                    </div>
                </div>
                <div className="py-[50px] flex flex-col gap-y-[62px]">
                    <div className="flex gap-x-[5px]">
                        <div className={rightSide}>
                            <Image src={FirstBannerImg} alt="banner"/>
                            <RightSVG/>
                        </div>
                        <div className={rightSide}>
                            <TopRightSVG className="self-end"/>
                            <Image src={SecondBannerImg} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
