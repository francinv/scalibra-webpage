import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";
import { useIcon } from "../../utils/useIcon";

interface NavbarListElementProps {
    icon: string;
    text: string;
    url: string;
    currentPage: string;
}

const NavbarListElement = (props: NavbarListElementProps) => {
    const isActivePage = props.currentPage.toLowerCase().includes(props.text.toLowerCase());

    const activeClass = isActivePage ? "underline decoration-stratos underline-offset-8" : null;

    return (
        <li>
            <Link href={props.url}>
                <a 
                    className={`
                        flex items-center 
                        text-base text-stratos font-body hover:text-guardsmanred 
                        transition duration-300 ${activeClass}`}>
                    <FontAwesomeIcon icon={useIcon(props.icon)} className="mr-1"/>{props.text}
                </a>
            </Link>
        </li>
    );
};

export default NavbarListElement;