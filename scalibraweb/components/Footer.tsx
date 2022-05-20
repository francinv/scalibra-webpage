import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { postNewsletterSubmission } from "../pages/api/newsletter";
import FooterBtnSubmit from "./Buttons/FooterBtnSubmit";
import TextInput from "./Input/TextInput";

const Footer:React.FC = () => {
    const[email, setEmail] = React.useState('');
    const[successMessage, setSuccessMessage] = React.useState('Meld deg på vårt nyhetsbrev');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.currentTarget.value);
    }

    async function handleSubmit(event:any) {
        event.preventDefault();
        const data = {'email': email};
        const res = await postNewsletterSubmission(data);
        if (res.status === 201) {
            setEmail('');
            setSuccessMessage('Takk for påmelding!');
            setTimeout(() => setSuccessMessage('Meld deg på vårt nyhetsbrev'), 5000);
        } else {
            setSuccessMessage('Noe gikk galt.');
        }
    }
    const contact_info:string = "hover:border-b-guardsmanred border-b border-b-stratos pb-1 transition-all duration-200 ease-in";
    const links:string = "hover:border-b-guardsmanred border-b border-b-stratos pb-1 transition-all duration-200 ease-in";

    return (
        <footer className="bg-stratos px-7 py-5 text-white flex">
            <div className="p-4 w-1/3">
                <h4>Kontaktinformasjon</h4>
                <ul>
                    <li className="font-body my-2">
                        <a className={contact_info} href="mailto:post@scalibra.com"><FontAwesomeIcon icon={faEnvelope} className="mr-1"/> post@scalibra.com</a>
                    </li>
                    <li className="font-body my-2">
                        <a className={contact_info} href="tel:004767421782"><FontAwesomeIcon icon={faMobile} className="mr-1"/> +47 67 42 17 82</a>
                    </li>
                </ul>
            </div>
            <div className="p-4 w-1/3">
                <ul className="text-center w-3/6 mx-auto">
                    <li>
                        <Link href="/kontakt" >
                            <a><h4 className={links}>Kontakt oss</h4></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tjenester">
                            <a><h4 className={links}>Tjenester</h4></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a><h4 className={links}>Logg inn</h4></a>
                        </Link>
                    </li>
                </ul>
                <p className="text-center">
                    <a className={contact_info} href="https://www.facebook.com/scalibraas" target="_blank"> Facebook </a>
                    ·
                    <a className={contact_info} href="https://no.linkedin.com/company/scalibra-as" target="_blank"> LinkedIn </a>
                    ·
                    <Link href="/personvern"><a className={contact_info}> Personvern </a></Link>
                    og
                    <Link href="/personvern#m153"><a className={contact_info}> Cookies </a></Link>
                </p>
            </div>
            <div className="p-4 w-1/3">
                <h4>{successMessage}</h4>
                <form onSubmit={handleSubmit} className="flex">
                    <TextInput 
                        handleChange={handleChange} 
                        placeholder="Din e-post *" 
                        required={true} type="email" 
                        value={email} 
                    />
                    <FooterBtnSubmit />
                </form>
                <div className="mt-3 flex justify-end">
                    <Image 
                        src="/images/achilles.png"
                        width={106.783}
                        height={80}
                        alt="Certification logo from Achilles"
                        className="bg-white certification-img"
                    />
                    <Image 
                        src="/images/nacal031.png"
                        width={55.3334}
                        height={80}
                        alt="Certification logo from NA"
                        className="bg-white certification-img"
                    />
                </div>
            </div>

        </footer>
    )
}

export default Footer;