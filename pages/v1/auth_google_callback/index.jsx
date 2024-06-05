import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import {message, Spin} from 'antd';
import api from '../../../utils/api';
import {CustomerContext} from "@/components/contexts/CustomerContext";
import {ModalsContext} from "@/components/contexts/ModalsContexts";
import {useTranslation} from "next-i18next";

const type = 'google';
export default function GoogleRedirect() {
    const { push, query } = useRouter();
    const {setShowAuthorizationModal} = useContext(ModalsContext);
    const {getUser, setAccessToken} = useContext(CustomerContext);
    const {t} = useTranslation();

    useEffect(() => {
        if (query?.error === 'access_denied') {
            push('/');
            message.error(t('authFailed'));
            setShowAuthorizationModal(true);
        } else if (query?.code !== undefined) {
            api.get(`/auth/${type}/callback?code=${query.code}`)
                .then(async (res) => {
                    console.log(res);
                    if (res.status === 200) {
                        localStorage.setItem('accessToken', res.data.token);
                        await Promise.all([setAccessToken(res.data.token), getUser()]);
                        await push('/');
                    }
                }).catch((e) => {
                console.log(e);
            });
        }
    }, [query]);

    return (
        <Spin spinning className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    );
}

GoogleRedirect.layout = 'NoLayout';
