import Link from "next/link";
import React, { FC } from "react";
import Asset from '../../../assets/footer.json';
import { H4 } from "../../Typography";

interface LinksSectionProps {
    contactCustomClasses: string;
}

const LinksSection: FC<LinksSectionProps> = ({ contactCustomClasses }) => {
    const links = Asset.footer_links;
    const linkStyle: string = "hover:border-b-guardsmanred border-b-1 border-b-stratos pb-1 transition-all duration-200 ease-in"; 

    return (
        <div className="p-4 w-1/3">
            <ul className="text-center w-3/6 mx-auto">
                {links.map((link, index) => (
                    <li key={index}> 
                        <Link href={link.href} >
                            <a><H4 className={linkStyle} text={link.text} /></a>
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="text-center">
                <a className={contactCustomClasses} href="https://www.facebook.com/scalibraas" target="_blank"> Facebook </a>
                ·
                <a className={contactCustomClasses} href="https://no.linkedin.com/company/scalibra-as" target="_blank"> LinkedIn </a>
                ·
                <Link href="/personvern"><a className={contactCustomClasses}> Personvern </a></Link>
                og
                <Link href="/personvern#m153"><a className={contactCustomClasses}> Cookies </a></Link>
            </p>
        </div>
    )
}

export default LinksSection
