import React from 'react';
import '../../styles/globals.css';
import Header from "@/components/customer/wrapperComps/header/Header";
import Footer from "@/components/customer/wrapperComps/footer/Footer";


function CustomerLayout({ children }) {
    return (
        <>
            <Header/>
            <main className="container mx-auto grow">
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default CustomerLayout;
