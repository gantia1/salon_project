import {ModalsContextProvider} from "@/components/contexts/ModalsContexts";
import CustomerContextProvider from "@/components/contexts/CustomerContext";
import CustomerLayout from "@/components/layouts/CustomerLayout";
import {appWithTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import i18n from "@/i18n";
import "@/styles/global.scss";

function App({Component, pageProps}) {
    const [isClient, setIsClient] = useState(false);
    const layouts = {
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
                {isClient && <Layout>
                    <Component {...pageProps} />
                </Layout>}
            </ModalsContextProvider>
        </CustomerContextProvider>
    );
}

export default appWithTranslation(App);
