import React, { FC } from "react";
import { productType } from "../../typings/productType";
import { filterList } from "../../utils/filterList";
import Products from '../../assets/sampleStoreResponse.json';
import Image from "next/image";
import { H2, H5, P } from "../Typography";
import BtnLarge from "../Buttons/BtnLarge";

const SectionProducts: FC = () => {
    return (
      <section className='py-6 flex-col justify-center mb-8'>
        <div className='w-4/5 border-b-guardsmanred border-b-1 mx-auto'>
          <P className='text-center font-bold' text='Våre mest populære produkter' />
        </div>
        <H2 className='text-center' text='Vi tilbyr instrumenter som dekker dine behov' />
        <div className='mt-6 grid grid-cols-4 gap-4 w-4/5 mx-auto'>
          {
            filterList(Products.data, 4).map((product: productType) => (
              <div key={product.id} className='flex flex-col items-center border-x-1 border-stratos px-2 hover:scale-105 transition duration-500'>
                <a href={product.url} target='_blank' rel='noopener noreferrer' 
                  className='flex items-center justify-center
                    opacity-50 hover:opacity-100 transition duration-300'>
                  <Image alt={product.brand + ' ' + product.model} src={product.image} height={300} width={200}  className='object-contain' />
                </a>
                <a href={product.url} target='_blank' rel='noopener noreferrer'>
                  <H5 className='text-center text-stratos hover:text-guardsmanred ease-in-out duration-300' text={product.brand + ' ' + product.model} />
                </a>
                <P className='text-center text-stratos mb-4' text={product.description} />
                <a href={product.url} target='_blank' rel='noopener noreferrer' className='text-center mt-auto border-b-1 p-1 border-stratos group hover:border-guardsmanred'>
                  <P text='Se produktet i nettbutikken' className='text-stratos group-hover:text-guardsmanred ease-in-out duration-300 font-semibold' />
                </a>
              </div>
          ))}
        </div>
        <BtnLarge buttonText='Gå til nettbutikken' onClick={() => window.open('https://www.amazon.com')} />
      </section>
    )
}

export default SectionProducts;