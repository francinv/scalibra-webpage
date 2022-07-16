import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Asset from '../../assets/navbar.json';
import BtnC2A from "../Buttons/BtnC2A";
import NavbarListElement from "./NavbarElement";

interface NavbarProps {
    title: string;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>((title, ref) => {
    const isHome = title.title === "Scalibra AS";
    const navElements = Asset.navbar.navbar_elements;
    
    return (
        <nav className="w-full py-4" ref={ref}>
            <div className="w-11/12 flex justify-between flex-wrap items-center mx-auto">
                <Link href="/">
                    <a>
                        <Image
                            src={"/images/logo1_scalibra.png"}
                            alt="Logo of Scalibra AS"
                            height={33.4}
                            width={200}
                        />
                    </a>
                </Link>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 items-center">
                        {
                            navElements.map(element => {
                                if (isHome && element.title !== 'Hjem') {
                                    return <NavbarListElement key={element.title} icon={element.icon} text={element.title} url={element.link} currentPage={title.title} />
                                } else if(!isHome) {
                                    return <NavbarListElement key={element.title} icon={element.icon} text={element.title} url={element.link} currentPage={title.title} />
                                }
                        })}
                        <BtnC2A text="Nettbutikk" url="/" />
                    </ul>
                </div>
            </div>
        </nav>

    )
});

export default Navbar;