import React, {useContext} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'next-i18next';
import PrimaryButton from "@/components/button/PrimaryButton";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";
import {ModalsContext} from "@/components/contexts/ModalsContexts";
import {CustomerContext} from "@/components/contexts/CustomerContext";
import ProfileSVG from "@/public/assets/images/svg/profile.svg";
import BurgerSVG from "@/public/assets/images/svg/burger.svg";

function Header() {
    const {t} = useTranslation();
    const {setShowAuthorizationModal, setShowRegisterModal, setShowBurgerModal} = useContext(ModalsContext);
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
                className="flex justify-between h-[62px] items-center max-w-[1440px] m-auto text-sm xl:text-base px-5 lg:px-[100px]">
                <div className="flex gap-2">
                    <button className="lg:hidden block" type="button" onClick={() => setShowBurgerModal(true)}>
                        <BurgerSVG/>
                    </button>
                    <Link href="/">LOGO</Link>
                </div>
                <ul className="lg:flex gap-x-3.5 xl:gap-x-[30px] hidden">
                    {menuItems.map((item, index) => (
                        <li key={index}
                            className={`${index === menuItems.length - 1 ? 'border-l border-dark-purple pl-3.5 xl:pl-[30px]' : ''} ${isActive(item.path) ? 'slide-border active' : 'slide-border'}`}>
                            <Link href={item.path} className="block">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="lg:flex gap-5 items-center">
                    {user ? (
                        <Link href="/profile" className="flex gap-5 items-center">
                            <ProfileSVG/>
                            {/*<p className="font-customBold font-bold">{user.username}</p>*/}
                            <p className="font-customBold font-bold">პროფილი</p>
                        </Link>
                    ) : (
                        <div className="flex gap-2.5 text-[12px] sm:text-base">
                            <button className="font-customBold font-bold text-primary" type="button"
                                    onClick={() => setShowAuthorizationModal(true)}>
                                {t('login')}
                            </button>
                            <PrimaryButton type="button" className="text-[12px] sm:text-base"
                                           onClick={() => setShowRegisterModal(true)}>{t('register')}
                            </PrimaryButton>
                        </div>
                    )}
                    <LanguageSelector/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
