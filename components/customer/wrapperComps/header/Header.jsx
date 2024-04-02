'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';

function Header() {
    const { t, i18n  } = useTranslation();
    const currentPath = usePathname();
    const menuItems = [
        { path: '/', label: t('home') },
        { path: '/salons', label: t('salons') },
        { path: '/about-us', label: t('about') },
        { path: '/contact', label: t('contact') },
        { path: '/salon-registration', label: t('salonRegistration') }
    ];
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const isActive = (path) => currentPath === path ? 'text-[#7E41FF] border-b border-[#7E41FF] pb-5' : 'text-black';
    const buttonClass = "font-bold text-[#353535]";

    return (
        <header className="w-100">
            <nav className="flex justify-between h-[62px] items-center w-[1440px] m-auto px-[100px]">
                <Link href="/">LOGO</Link>
                <ul className="flex gap-[30px]">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} className={isActive(item.path)}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-5">
                    <button className={buttonClass} type="button">შესვლა</button>
                    <button className={`${buttonClass} rounded-sm border-2 border-[#7E41FF] py-2.5 px-5`} type="button">დარეგისტრირება</button>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                    <button onClick={() => changeLanguage('ka')}>KA</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
