import React from 'react';

export function Heading({children}) {
    return (
        <h1 className="text-center font-customBold text-2xl font-bold">
            {children}
        </h1>
    );
}

