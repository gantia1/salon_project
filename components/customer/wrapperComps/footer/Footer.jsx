import React from 'react';
import Image from "next/image";
import Logo from "@/public/assets/images/png/GlowHubW.png";
import Linkedin from "@/public/assets/images/svg/linkedin.svg";
import Facebook from "@/public/assets/images/svg/facebook.svg";
import Instagram from "@/public/assets/images/svg/instagram.svg";
import Twitter from "@/public/assets/images/svg/twitter.svg";
import Whatsapp from "@/public/assets/images/svg/whatsapp.svg";
import GooglePlay from "@/public/assets/images/svg/GooglePlay.svg";
import AppStore from "@/public/assets/images/svg/AppStore.svg";
import Mail from "@/public/assets/images/svg/mail.svg";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {Input} from "antd";

function Footer() {

    const year = new Date().getFullYear();
    const {t} = useTranslation();

    const socialMediaLinks = [
        {href: "https://www.linkedin.com/", icon: <Linkedin/>},
        {href: "https://www.facebook.com/", icon: <Facebook/>},
        {href: "https://www.instagram.com/", icon: <Instagram/>},
        {href: "https://www.twitter.com/", icon: <Twitter/>},
        {href: "https://www.whatsapp.com/", icon: <Whatsapp/>}
    ];

    const menuItems = [
        {path: '/', label: t('home')},
        {path: '/salons', label: t('salons')},
        {path: '/about-us', label: t('about')},
        {path: '/contact', label: t('contact')},
    ];

    return (
        <footer className="w-100 bg-[#302B39] text-white">
            <div className="max-w-[1440px] mx-auto px-[100px] pt-[70px] pb-7">
                <div className="flex justify-between">

                    <div className="flex flex-col justify-between gap-y-9">
                        <Image src={Logo} alt="logo"/>
                        <ul className="flex gap-x-5 items-center">
                            {socialMediaLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center -translate-x-1.5">
                            <a className="" href="https://play.google.com/store/apps" target="_blank"
                               rel="noopener noreferrer">
                                <GooglePlay/>
                            </a>
                            <a className="w-fit" href="https://www.apple.com/app-store/" target="_blank"
                               rel="noopener noreferrer">
                                <AppStore/>
                            </a>
                        </div>
                    </div>

                    <ul className="flex flex-col gap-y-7">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-y-5">
                        <p>გამოიწერეთ სიახლეები. გააუქმეთ გამოწერა ნებისმიერ დროს.</p>
                        <Input rootClassName="rounded-[2px] p-3" placeholder="example@gmail.com" prefix={<Mail />}/>
                        <button className="bg-transparent border border-white py-2.5 w-full rounded-[2px]" type="button">
                            {t('subscribeNews')}
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="text-center py-2.5">GlowHub {year} &copy; {t('allRights')}</p>
        </footer>
    );
}

export default Footer;
