import React, { FC } from "react";

interface TextInputProps {
    label: any;
}

const CheckBox: FC<TextInputProps> = ({label}) => {
    return (
        <div className="w-3/5 flex items-center mt-2">
            <input id="checkbox_styled" type="checkbox" required value="J"></input>
            <label htmlFor="checkbox_styled" className='font-body text-xs mx-1 underline hover:text-guardsmanred'>{label}</label>
        </div>
    )
}

export default CheckBox;