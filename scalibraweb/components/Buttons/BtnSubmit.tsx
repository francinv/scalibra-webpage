import React, { FC } from "react";

const BtnSubmit: FC = () => {
    return (
        <input 
            type="submit" 
            value="SEND" 
            className="
                w-2/5 
                font-body 
                text-white 
                bg-guardsmanred 
                p-2 
                cursor-pointer 
                my-4 
                ml-1 
                hover:bg-softred 
                transition-all 
                duration-500"
        ></input>
    )
}

export default BtnSubmit;