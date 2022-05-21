import React, { forwardRef } from "react";
import ContactSection from "./FooterElements/ContactSection";
import NewsletterSubmission from "./FooterElements/NewsletterSubmission";
import LinksSection from "./FooterElements/LinksSection";


const Footer = forwardRef<HTMLDivElement>((props, ref) => {
    const contactInfoStyle: string = "hover:border-b-guardsmanred border-b-1 border-b-stratos pb-1 transition duration-200 ease-in font-body";

    return (
        <footer className="bg-stratos px-7 py-5 text-white flex" ref={ref}>
            <ContactSection linkCustomClasses={contactInfoStyle} />
            <LinksSection contactCustomClasses={contactInfoStyle} />
            <NewsletterSubmission />
        </footer>
    )
});

export default Footer;