import React, { createContext, useState } from 'react';

export const ModalsContext = createContext({
    setShowAuthorizationModal: () => {},
    setShowRegisterModal: () => {},
    showAuthorizationModal: false,
    showRegisterModal: false,
});

export function ModalsContextProvider({ children }) {
    const [showAuthorizationModal, setShowAuthorizationModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <ModalsContext.Provider
            value={{
                showAuthorizationModal,
                setShowAuthorizationModal,
                showRegisterModal,
                setShowRegisterModal
            }}
        >
            {children}
        </ModalsContext.Provider>
    );
}
