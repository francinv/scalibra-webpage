import React, { ChangeEvent, FC } from "react";
import Link from "next/link";
import { FORM_CONSTANTS } from "../../constants/formConstants";
import { formValue } from "../../typings/formType";
import BtnSubmit from "../Buttons/BtnSubmit";
import CheckBox from "../Input/CheckBox";
import TextInput from "../Input/TextInput";
import { H4 } from "../Typography";

interface FormProps {
    handleSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
    handleChange: (prop: string) => (event: ChangeEvent<HTMLInputElement>) => void;
    formTitle: string;
    additionalClasses: string;
    values: formValue;
}

const ContactForm: FC<FormProps> = ({
    handleSubmit,
    handleChange,
    formTitle,
    additionalClasses,
    values
}) => {
    const accept_text = <Link href="/personvern"><a>Jeg godtar at opplysningene brukes for å kontakte meg.</a></Link>;

    return (
        <form className={`flex flex-col items-center shadow-xl rounded radius pb-6 bg-white ${additionalClasses}`} onSubmit={handleSubmit}>
            <H4 className={"text-stratos"} text={formTitle} />
            {FORM_CONSTANTS.map(formConstant => (
                <TextInput
                key={formConstant.index}
                handleChange={handleChange(formConstant.index)}
                placeholder={formConstant.placeholder}
                required={formConstant.required}
                type={formConstant.type}
                value={values[formConstant.index as keyof typeof values]}
                />
            ))}
            <CheckBox label={accept_text}/>
            <BtnSubmit />
        </form>
    );
};

export default ContactForm;