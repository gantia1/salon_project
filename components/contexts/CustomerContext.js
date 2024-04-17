import React, { createContext, useEffect, useState } from 'react';
import api from '@/utils/api';

export const CustomerContext = createContext({
    accessToken: null,
    setAccessToken: () => {},
    user: null,
    setUser: () => {},
    getUser: () => {},
});

export default function CustomerContextProvider({children}) {
    const [accessToken, setAccessToken] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : ''
    );
    const [user, setUser] = useState(null);

    const getUser = async () => {
        if (!accessToken) return;
        try {
            const res = await api.get('/user');
            setUser(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUser();
    }, [accessToken]);

    return (
        <CustomerContext.Provider
            value={{
                accessToken,
                setAccessToken,
                user,
                setUser,
                getUser,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
}
