import Link from "next/link";
import React, { FC } from "react";

interface BtnC2AProps {
    url: string;
    text: string;
}

const BtnC2A: FC<BtnC2AProps> = ({url, text}) => {
    return (
        <li className="border-guardsmanred border-2 px-2 py-1 hover:bg-guardsmanred hover:text-white transition duration-300 text-stratos">
            <Link href={url}>
                <a className="flex text-base items-center font-body">{text}</a>
            </Link>
        </li>
    )
}

export default BtnC2A;