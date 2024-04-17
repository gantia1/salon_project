import React, {useContext} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'next-i18next';
import PrimaryButton from "@/components/button/PrimaryButton";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";
import {ModalsContext} from "@/components/contexts/ModalsContexts";
import {CustomerContext} from "@/components/contexts/CustomerContext";
import ProfileSVG from "@/public/assets/images/svg/profile.svg";

function Header() {
    const {t} = useTranslation();
    const {setShowAuthorizationModal, setShowRegisterModal} = useContext(ModalsContext);
    const {user} = useContext(CustomerContext);
    const currentPath = usePathname();

    const menuItems = [
        {path: '/', label: t('home')},
        {path: '/salons', label: t('salons')},
        {path: '/about-us', label: t('about')},
        {path: '/contact', label: t('contact')},
        {path: '/salon-registration', label: t('salonRegistration')}
    ];

    const isActive = (path) => currentPath === path;

    return (
        <header className="w-full">
            <nav
                className="flex justify-between h-[62px] items-center max-w-[1440px] m-auto px-[100px] text-sm xl:text-base">
                <Link href="/">LOGO</Link>
                <ul className="flex gap-x-3.5 xl:gap-x-[30px]">
                    {menuItems.map((item, index) => (
                        <li key={index}
                            className={`${index === menuItems.length - 1 ? 'border-l border-dark-purple pl-3.5 xl:pl-[30px]' : ''} ${isActive(item.path) ? 'slide-border active' : 'slide-border'}`}>
                            <Link href={item.path} className="block">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-5 items-center">
                    {user ? (
                        <>
                            <ProfileSVG/>
                            <p>{user.username}</p>
                        </>
                    ) : (
                        <>
                            <button className="text-sm font-customBold font-bold text-primary" type="button"
                                    onClick={() => setShowAuthorizationModal(true)}>
                                {t('login')}
                            </button>
                            <PrimaryButton type="button" onClick={() => setShowRegisterModal(true)}
                                           children={t('register')}/>
                        </>
                    )}
                    <LanguageSelector/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
