import React, { createContext, useState } from 'react';

export const ModalsContext = createContext({
    setShowAuthorizationModal: () => {},
    setShowRegisterModal: () => {},
    setShowBurgerModal: () => {},
    showAuthorizationModal: false,
    showRegisterModal: false,
    showBurgerModal: false
});

export function ModalsContextProvider({ children }) {
    const [showAuthorizationModal, setShowAuthorizationModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showBurgerModal, setShowBurgerModal] = useState(false);

    return (
        <ModalsContext.Provider
            value={{
                showAuthorizationModal,
                setShowAuthorizationModal,
                showRegisterModal,
                setShowRegisterModal,
                showBurgerModal,
                setShowBurgerModal
            }}
        >
            {children}
        </ModalsContext.Provider>
    );
}
