import Image from 'next/image';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import BtnSubmit from '../../Buttons/BtnSubmit';
import TextInput from '../../Input/TextInput';
import { H4 } from '../../Typography';

const NewsletterSubmission: FC = () => {
    const[email, setEmail] = useState('');
    const[successMessage, setSuccessMessage] = useState('Meld deg på vårt nyhetsbrev');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = {
            status: 201
        }
        if (res.status === 201) {
            setEmail('');
            setSuccessMessage('Takk for påmelding!');
            setTimeout(() => setSuccessMessage('Meld deg på vårt nyhetsbrev'), 5000);
        } else {
            setSuccessMessage('Noe gikk galt.');
        }
    }

    return (
        <div className="p-4 w-1/3">
            <H4 className={'mb-0'} text={successMessage} />
            <form onSubmit={handleSubmit} className="flex items-center">
                <TextInput 
                    handleChange={handleChange} 
                    placeholder="Din e-post *" 
                    required={true} type="email" 
                    value={email} 
                />
                <BtnSubmit />
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
    )
}

export default NewsletterSubmission;