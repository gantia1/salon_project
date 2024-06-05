import React from 'react';
import BaseLayout from './BaseLayout';
import AuthorizationModal from "@/components/modals/AuthorizationModal";
import RegisterModal from "@/components/modals/RegisterModal";

function GuestLayout({ children }) {
    return (
        <BaseLayout>
            {children}
            <AuthorizationModal />
            <RegisterModal />
        </BaseLayout>
    );
}

export default GuestLayout;
