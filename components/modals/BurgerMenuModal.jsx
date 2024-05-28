import React, {useContext, useEffect} from 'react';
import {Drawer} from "antd";
import {ModalsContext} from "@/components/contexts/ModalsContexts";
import Link from "next/link";
import GeSVG from '@/public/assets/images/svg/ge.svg';
import EnSVG from '@/public/assets/images/svg/en.svg';
import {useTranslation} from "next-i18next";
import {useRouter} from 'next/router';

function BurgerMenuModal() {
    const {showBurgerModal, setShowBurgerModal} = useContext(ModalsContext);
    const {t} = useTranslation();
    const router = useRouter();
    const {i18n} = useTranslation();
    const menuItems = [
        {path: '/', label: t('home')},
        {path: '/salons', label: t('salons')},
        {path: '/about-us', label: t('about')},
        {path: '/contact', label: t('contact')},
    ];

    useEffect(() => {
        const handleCloseDrawer = () => {
            setShowBurgerModal(false);
        };

        router.events.on('routeChangeComplete', handleCloseDrawer);

        return () => {
            router.events.off('routeChangeComplete', handleCloseDrawer);
        };
    }, [router.events, setShowBurgerModal]);


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowBurgerModal(false);
    };

    return (
        <Drawer title={false} onClose={() => setShowBurgerModal(false)} open={showBurgerModal} size={"430px"}>
            <ul className="flex flex-col items-center text-3xl text-white text-center w-fit m-auto">
                {menuItems.map((item, index) => (
                    <li key={index} className="border-b border-secondary-gray py-[50px] w-[200px]">
                        <Link href={item.path} className="block">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col items-center text-xl text-white gap-y-5 w-fit m-auto pt-12">
                <li>
                    <button
                        className={`flex items-center gap-x-5 rounded px-5 py-2.5 lng-btn w-[180px] ${i18n.language === 'ka' ? 'active' : ''}`}
                        type="button"
                        onClick={() => changeLanguage('ka')}
                    >
                        <GeSVG/> ქართული
                    </button>
                </li>
                <li>
                    <button
                        className={`flex items-center gap-x-5 rounded px-5 py-2.5 lng-btn w-[180px] ${i18n.language === 'en' ? 'active' : ''}`}
                        type="button"
                        onClick={() => changeLanguage('en')}
                    >
                        <EnSVG/> English
                    </button>
                </li>
            </ul>
        </Drawer>
    );
}

export default BurgerMenuModal;
