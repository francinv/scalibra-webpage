import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react"
import Asset from '../../assets/home.json';
import { funfactType } from "../../typings/funfactType";
import { useIcon } from "../../utils/useIcon";
import { H2, P } from "../Typography";

const SectionFunfact: FC = () => {
    return (
        <section className='py-16 bg-guardsmanred '>
        <div className='grid grid-cols-3 gap-4 w-4/5 mx-auto divide-x-50 divide-white'>
            {
            Asset.page_funfact.funfact.map((funfact: funfactType, index: number) => (
                <div key={index} className='flex-col justify-center flex'>
                <FontAwesomeIcon icon={useIcon(funfact.icon)} className='text-4xl text-white hover:scale-125 transition duration-300 mx-auto' />
                <P className='text-center text-white my-6' text={funfact.title} />
                <H2 className='text-center text-white' text={funfact.content.toString()} />
                </div>
            ))}
        </div>
        </section>
    )
}

export default SectionFunfact;