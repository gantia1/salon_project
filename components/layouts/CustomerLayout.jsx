import React from 'react';
import '../../styles/globals.css';
import Header from "@/components/customer/wrapperComps/header/Header";
import Footer from "@/components/customer/wrapperComps/footer/Footer";
import AuthorizationModal from "@/components/modals/AuthorizationModal";
import RegisterModal from "@/components/modals/RegisterModal";
import BurgerMenuModal from "@/components/modals/BurgerMenuModal";


function CustomerLayout({ children }) {
    return (
        <>
            <Header/>
            <main className="my-auto grow">
                {children}
            </main>
            <AuthorizationModal/>
            <RegisterModal/>
            <BurgerMenuModal/>
            <Footer/>
        </>
    );
}

export default CustomerLayout;
