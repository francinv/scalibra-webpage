import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIcon } from "../../utils/useIcon";

interface BtnScrollProps {
    isVisible: boolean;
    btnColor: string;
}

const BtnScroll: FC<BtnScrollProps> = ({isVisible, btnColor}) => {

    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    if(isVisible) {
        return (
            <button className={`fixed bottom-5 right-8 hover:scale-125 transition duration-500 ${btnColor} fade_in`} onClick={handleClick}>
                <FontAwesomeIcon icon={useIcon('fa-solid fa-chevron-up')} className='text-3xl' /> 
            </button>
        );
    } else {
        return null;
    }
};

export default BtnScroll;