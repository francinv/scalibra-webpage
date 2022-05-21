import React, { FC } from "react";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H4 } from "../../Typography";
import Asset from "../../../assets/footer.json";
import { useIcon } from "../../../utils/useIcon";

interface ContactSectionProps {
    linkCustomClasses: string;
}

const ContactSection: FC<ContactSectionProps> = ({linkCustomClasses}) => {
    const contactElements = Asset.footer_contact;

    return ( 
        <div className="p-4 w-1/3">
            <H4 text="Kontaktinformasjon" className={"text-white"} />
            <ul>
                {
                    contactElements.map((element, index) => (
                        <li className="font-body my-2" key={index}>
                            <a className={linkCustomClasses} href={element.href}>
                                <FontAwesomeIcon icon={useIcon(element.icon)} className="mr-1"/> {element.text}
                            </a>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactSection;