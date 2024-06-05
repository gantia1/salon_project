import React, { createContext, useEffect, useState } from 'react';
import api from '@/utils/api';

export const CustomerContext = createContext({
    accessToken: null,
    setAccessToken: () => {},
    user: null,
    setUser: () => {},
    getUser: () => {},
    language: "ka",
    setLanguage: () => {},
});

export default function CustomerContextProvider({children}) {
    const defaultLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'ka' : 'ka';

    const [language, setLanguage] = useState(defaultLanguage);
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

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <CustomerContext.Provider
            value={{
                accessToken,
                setAccessToken,
                user,
                setUser,
                getUser,
                language,
                setLanguage,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
}
