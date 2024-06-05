import React from 'react';
import '../../styles/globals.css';
import Header from "@/components/customer/wrapperComps/header/Header";
import Footer from "@/components/customer/wrapperComps/footer/Footer";
import BurgerMenuModal from "@/components/modals/BurgerMenuModal";

function BaseLayout({children}) {
    return (
        <>
            <Header/>
            <main className="my-auto grow">
                {children}
            </main>
            <BurgerMenuModal/>
            <Footer/>
        </>
    );
}

export default BaseLayout;
