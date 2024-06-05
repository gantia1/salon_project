import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import BaseLayout from './BaseLayout';
import { CustomerContext } from "@/components/contexts/CustomerContext";

export default function CustomerLayout({ children }) {
    const { user } = useContext(CustomerContext);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    );
}
