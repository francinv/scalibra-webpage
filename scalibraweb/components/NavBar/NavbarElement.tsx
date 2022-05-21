import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";
import { useIcon } from "../../utils/useIcon";

interface NavbarListElementProps {
    icon: string;
    text: string;
    url: string;
}

const NavbarListElement = (props: NavbarListElementProps) => {
    return (
        <li>
            <Link href={props.url}>
                <a className="flex text-base text-stratos items-center font-body hover:text-guardsmanred transition duration-300">
                    <FontAwesomeIcon icon={useIcon(props.icon)} className="mr-1"/>{props.text}
                </a>
            </Link>
        </li>
    );
};

export default NavbarListElement;