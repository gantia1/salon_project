import React from 'react';

function ProceduresCard({text}) {
    return (
        <div className="bg-white shadow-custom rounded-[10px] w-fit">
            <p className="font-customBold font-bold text-base px-[30px] py-5">{text}</p>
        </div>
    );
}

export default ProceduresCard;
