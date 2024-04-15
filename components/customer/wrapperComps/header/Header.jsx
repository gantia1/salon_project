import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'next-i18next';
import PrimaryButton from "@/components/button/PrimaryButton";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";

function Header() {
    const {t} = useTranslation();
    const currentPath = usePathname();

    const menuItems = [
        {path: '/', label: t('home')},
        {path: '/salons', label: t('salons')},
        {path: '/about-us', label: t('about')},
        {path: '/contact', label: t('contact')},
        {path: '/salon-registration', label: t('salonRegistration')}
    ];

    const isActive = (path) => currentPath === path ? 'text-primary-purple border-b border-primary-purple pb-5' : 'text-primary-black';

    return (
        <header className="w-full">
            <nav
                className="flex justify-between h-[62px] items-center max-w-[1440px] m-auto px-[100px] text-sm xl:text-base">
                <Link href="/">LOGO</Link>
                <ul className="flex gap-x-3.5 xl:gap-x-[30px]">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} className={isActive(item.path)}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-5 items-center">
                    <button className="text-sm font-customBold font-bold text-primary"
                            type="button">{t('login')}</button>
                    <PrimaryButton type="button" onClick={() => console.log('test')} children={t('register')}/>
                    <LanguageSelector/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
