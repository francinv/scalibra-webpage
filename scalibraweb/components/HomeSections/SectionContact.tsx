import React, { ChangeEvent, FC, useState } from "react";
import Link from "next/link";
import Asset from '../../assets/home.json';
import animatedStyle from '../../styles/Animated.module.scss';
import { H1, H4, P } from "../Typography";
import TextInput from "../Input/TextInput";
import CheckBox from "../Input/CheckBox";
import BtnSubmit from "../Buttons/BtnSubmit";

const SectionContact: FC = () => {
    const [values, setValues] = useState({
      name: '',
      company_name: '',
      email: '',
      phone_number: ''
    })
  
    const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(values);
    }
  
    const accept_text = <Link href="/personvern"><a>Jeg godtar at opplysningene brukes for å kontakte meg.</a></Link>
  
    return (
      <section className='theme-scroll'>
          <div className='my-4 bg-white h-72'>
            <div className='w-3/5 mx-auto text-center'>
              <H1 className={`${animatedStyle.animated_title} mx-auto overflow-hidden whitespace-nowrap tracking-wider text-stratos`} text={Asset.page_title} />
              <P text={Asset.page_description} className={"text-stratos"} />
            </div>
            <form className={`w-2/5 mx-auto my-5 flex flex-col items-center shadow-xl rounded radius pb-6 bg-white mt-6 ${animatedStyle.slidein_container}`} onSubmit={handleSubmit}>
              <H4 className={"text-stratos"} text='Kontakt oss' />
              <TextInput handleChange={handleChange('name')} placeholder="Ditt fulle navn *" required={true} type="text" value={values.name}/>
              <TextInput handleChange={handleChange('company_name')} placeholder="Firmanavn *" required={true} type="text" value={values.company_name} />
              <TextInput handleChange={handleChange('email')} placeholder="Din e-post *" required={true} type="email" value={values.email} />
              <TextInput handleChange={handleChange('phone_number')} placeholder="Ditt telefonnummer *" required={true} type="tel" value={values.phone_number} />
              <CheckBox label={accept_text}/>
              <BtnSubmit />
            </form>
          </div>
        </section>
    )
}

export default SectionContact;