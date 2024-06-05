import React from 'react';

export default function Container({ children, className, bg }) {
    const backgroundColor = bg || '#fff';

    return (
        <div className="w-full" style={{ backgroundColor }}>
            <div className={`flex flex-col gap-y-5 max-w-[1440px] m-auto px-5 lg:px-[100px] ${className}`}>
                {children}
            </div>
        </div>
    );
}
