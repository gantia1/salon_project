import React from 'react';

const PrimaryButton = ({type, onClick, children, className}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-sm font-customBold font-bold text-primary rounded-sm border-2 bg-light-purple border-dark-purple py-2.5 px-5 ${className}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
