import React, { FC } from "react";
import { H2, H5, P } from "../Typography";
import Asset from '../../assets/home.json';
import { assetServiceType } from "../../typings/serviceType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIcon } from "../../utils/useIcon";

const SectionServices: FC = () => {
    return (
      <section className='py-6 flex-col justify-center'>
        <div className='w-4/5 border-b-guardsmanred border-b-1 mx-auto'>
          <P className='text-center font-bold' text='Våre tjenester' />
        </div>
        <H2 className='text-center' text='Vi tilbyr det meste av kalibrering' />
        <div className='mt-6 grid grid-cols-4 gap-4 w-4/5 mx-auto'>
          {Asset.page_services.services.map((service: assetServiceType, index: number) => (
            <div key={index} 
              className='flex flex-col items-center border-x-1 border-stratos px-2 hover:scale-105 transition duration-500'>
                <a href={service.link} className='flex w-full justify-center'>
                  <FontAwesomeIcon 
                    icon={useIcon(service.icon)} 
                    className="text-8xl text-stratos hover:text-guardsmanred ease-in-out duration-300" /> 
                </a>
                <a href={service.link}>
                  <H5 
                    className='text-center text-stratos hover:text-guardsmanred ease-in-out duration-300' 
                    text={service.title} />
                </a>
                <P className='text-center text-stratos mb-8' text={service.description} />
                <a href={service.link} className='text-center mt-auto border-b-1 p-1 border-stratos group hover:border-guardsmanred'>
                  <P 
                    className={'text-stratos group-hover:text-guardsmanred font-semibold'} 
                    text={service.title === 'Instrumenter' ? 'Gå til nettbutikk' : 'Les mer'} />
                </a>
            </div>
          ))}
        </div>
      </section>
    )
}

export default SectionServices;