import React from 'react';
import Image from "next/image";
import Logo from "@/public/assets/images/png/GlowHubW.png";
import Linkedin from "@/public/assets/images/svg/linkedin.svg";
import Facebook from "@/public/assets/images/svg/facebook.svg";
import Instagram from "@/public/assets/images/svg/instagram.svg";
import Twitter from "@/public/assets/images/svg/twitter.svg";
import Whatsapp from "@/public/assets/images/svg/whatsapp.svg";
import {useTranslation} from "next-i18next";
import Link from "next/link";

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
            <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px] pt-5 pb-5">
                <div className="flex items-center gap-5 justify-center flex-wrap sm:justify-between sm:flex-nowrap">

                    <Image src={Logo} alt="logo"/>

                    <ul className="lg:flex gap-x-3 text-secondary-gray hidden">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path}
                                      className={`${index !== 0 ? 'border-l border-secondary-gray pl-3' : ''}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>


                    <ul className="flex gap-x-5 items-center">
                        {socialMediaLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <hr/>
            <p className="text-center py-2.5">GlowHub {year} &copy; {t('allRights')}</p>
        </footer>
    );
}

export default Footer;
