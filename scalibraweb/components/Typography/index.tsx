import React, { FC } from "react";

interface typographyProps {
    text: string;
    className: string | null;
}

export const P: FC<typographyProps> = ({ text, className }) => {
    return <p className={`${className} text-base font-normal font-body`}>{text}</p>;
}

export const H1: FC<typographyProps> = ({ text, className }) => {
    return <h1 className={`text-4xl my-4 font-medium font-body ${className}`}>{text}</h1>;
}

export const H2: FC<typographyProps> = ({ text, className }) => {
    return <h2 className={`text-3xl my-4 font-medium font-body ${className}`}>{text}</h2>;
}

export const H4: FC<typographyProps> = ({ text, className }) => {
    return <h4 className={`${className} text-2xl font-medium font-body my-4`}> {text} </h4>
}

export const H5: FC<typographyProps> = ({ text, className }) => {
    return <h5 className={`${className} text-xl font-medium font-body my-4`}> {text} </h5>
}