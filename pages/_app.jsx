import { ModalsContextProvider } from "@/components/contexts/ModalsContexts";
import CustomerLayout from "@/components/layouts/CustomerLayout";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import i18n from "@/i18n";

function MyApp({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false);
    const layouts = {
        CustomerLayout: CustomerLayout,
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    const Layout = layouts[Component.layout] || (({ children }) => <>{children}</>);

    useEffect(() => {
        i18n.init();
    }, [isClient]);

    return (
        <ModalsContextProvider>
            {isClient && <Layout>
                <Component {...pageProps} />
            </Layout>}
        </ModalsContextProvider>
    );
}

export default appWithTranslation(MyApp);
