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
import Container from "@/components/container/Container";

export default function Footer() {

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
            <Container className="pt-5 pb-5" bg="#302B39">
                <div
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-5 justify-center flex-wrap sm:justify-between sm:flex-nowrap">
                    <Image src={Logo} alt="logo"/>
                    <ul className="flex flex-col gap-3 text-secondary-gray lg:flex-row">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path}
                                      className={`${index !== 0 ? 'lg:border-l lg:border-secondary-gray lg:pl-3' : ''}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex gap-x-5 items-center justify-center w-full lg:w-fit lg:justify-start">
                        {socialMediaLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </Container>
            <hr/>
            <p className="text-center py-2.5">GlowHub {year} &copy; {t('allRights')}</p>
        </footer>
    );
}
