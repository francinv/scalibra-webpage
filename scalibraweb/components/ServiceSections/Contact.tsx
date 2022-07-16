import React, { ChangeEvent, FC, useState } from 'react';
import ContactForm from '../Forms/ContactForm';
import { H2, P } from '../Typography';
import style from './Service.module.css';
import Asset from '../../assets/services.json';

const ContactSection: FC = () => {
    const [values, setValues] = useState({
        name: '',
        company_name: '',
        email: '',
        phone_number: ''
    })
    const data = Asset.page_contact;

    const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
    }

    return (
        <section className={`${style.section_bg_image} theme-scroll`}>
            <div className='w-full h-full bg-guardsmanred_op'>
                <div className='px-5 py-8 grid grid-cols-3 gap-4'>
                    <div className='col-span-2 my-auto'>
                        <H2 className={'text-white text-center'} text={data.title} />
                        <P className={'text-white text-center mx-auto w-3/6'} text={data.paragraph} />
                    </div>
                    <ContactForm 
                        additionalClasses={`col-span-1 fade_in`}
                        formTitle={data.form_title}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        values={values}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
