import React, { useContext, useEffect } from 'react';
import { Drawer } from "antd";
import { ModalsContext } from "@/components/contexts/ModalsContexts";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';

function BurgerMenuModal() {
    const { showBurgerModal, setShowBurgerModal } = useContext(ModalsContext);
    const { t } = useTranslation();
    const router = useRouter();
    const menuItems = [
        { path: '/', label: t('home') },
        { path: '/salons', label: t('salons') },
        { path: '/about-us', label: t('about') },
        { path: '/contact', label: t('contact') },
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

    return (
        <Drawer title={false} onClose={() => setShowBurgerModal(false)} open={showBurgerModal} size={"430px"}>
            <ul className="flex flex-col items-center text-[30px] text-white text-center w-fit m-auto">
                {menuItems.map((item, index) => (
                    <li key={index} className="border-b border-secondary-gray py-[50px] w-[200px]">
                        <Link href={item.path} className="block">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </Drawer>
    );
}

export default BurgerMenuModal;
