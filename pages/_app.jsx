import {ModalsContextProvider} from "@/components/contexts/ModalsContexts";
import CustomerContextProvider from "@/components/contexts/CustomerContext";
import GuestLayout from "@/components/layouts/GuestLayout";
import CustomerLayout from "@/components/layouts/CustomerLayout";
import {appWithTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import i18n from "@/i18n";
import '@/styles/fonts.scss';
import "@/styles/global.scss";
import {ConfigProvider} from 'antd';


function App({Component, pageProps}) {
    const [isClient, setIsClient] = useState(false);
    const layouts = {
        GuestLayout: GuestLayout,
        CustomerLayout: CustomerLayout,
        NoLayout: ({children}) => <>{children}</>
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    const Layout = layouts[Component.layout] || (({children}) => <>{children}</>);

    useEffect(() => {
        i18n.init();
    }, [isClient]);

    return (
        <CustomerContextProvider>
            <ModalsContextProvider>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#7E41FF',
                            colorBorderSecondary: '#7E41FF'
                        },
                    }}
                >

                {isClient && <Layout>
                    <Component {...pageProps} />
                </Layout>}
                </ConfigProvider>
            </ModalsContextProvider>
        </CustomerContextProvider>
    );
}

export default appWithTranslation(App);
