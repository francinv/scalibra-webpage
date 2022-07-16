import React, { ChangeEvent, FC, useState } from "react";
import Link from "next/link";
import Asset from '../../assets/home.json';
import { H1, H4, P } from "../Typography";
import TextInput from "../Input/TextInput";
import CheckBox from "../Input/CheckBox";
import BtnSubmit from "../Buttons/BtnSubmit";
import ScrollContainer from "../Containers/ScrollContainer";
import { FORM_CONSTANTS } from "../../constants/formConstants";
import ContactForm from "../Forms/ContactForm";

const SectionContact: FC = () => {
    const [values, setValues] = useState({
      name: '',
      company_name: '',
      email: '',
      phone_number: ''
    })
    const formAdditionalClasses = `w-2/5 mx-auto fade_in`;
  
    const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(values);
    }
  
    return (
      <ScrollContainer additionalClass="theme-scroll-home" pageTitle={Asset.page_title} pageDescription={Asset.page_description}>
        <ContactForm 
          additionalClasses={formAdditionalClasses}
          formTitle='Kontakt oss'
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      </ScrollContainer>
    )
}

export default SectionContact;