import React, { FC } from "react";
import { H1, P } from "../Typography";

interface ScrollProps {
    additionalClass: string;
    pageTitle: string;
    pageDescription: string;
}

const ScrollContainer: FC<ScrollProps> = ({ children, additionalClass, pageTitle, pageDescription }) => {
    const containerClasses = pageTitle === "Vi kvalitetssikrer deg" ? 'my-4 bg-white h-72' : 'my-4 bg-white h-40';
    return (
        <section className={`theme-scroll ${additionalClass}`}>
            <div className={containerClasses}>
                <div className='w-3/5 mx-auto text-center'>
                    <H1 className={`animated_title mx-auto overflow-hidden whitespace-nowrap tracking-wide text-stratos`} text={pageTitle} />
                    <P text={pageDescription} className={"text-stratos text-xl"} />
                </div>
                {children}
            </div>
        </section>
    );
};

export default ScrollContainer;