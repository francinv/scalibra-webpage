import React, { FC } from "react";

interface BtnLargeProps {
    buttonText: string;
    onClick: () => void;
}
const BtnLarge: FC<BtnLargeProps> = ({buttonText, onClick}) => {
    return (
        <button 
            className="w-2/5 text-xl p-4 text-center transition duration-300 bg-guardsmanred
            text-white border-guardsmanred border-2 hover:bg-white hover:text-stratos font-body mt-8 mx-auto block"
            onClick={onClick}> 
            {buttonText}
        </button>
    );
}

export default BtnLarge;