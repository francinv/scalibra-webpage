import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next'
import Layout from '../components/Containers/Layout'
import Asset from '../assets/home.json';
import TextInput from '../components/Input/TextInput';
import FooterBtnSubmit from '../components/Buttons/FooterBtnSubmit';
import { typeWriter } from '../animations/typeWriter';
import { animated, useSpring } from '@react-spring/web'
import CheckBox from '../components/Input/CheckBox';
import Link from 'next/link';

const Home: NextPage = () => {
  const [values, setValues] = useState({
    name: '',
    company_name: '',
    email: '',
    phone_number: ''
  })

  const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  }

  const styles = useSpring({
    from: {transform: 'scale3d(0, 0, 0)'},
    to: {transform: 'scale3d(1, 1, 1)'},
    delay: 300,
    config: {
      duration: 300,
    }
  })

  const accept_text = <Link href="/personvern"><a>Jeg godtar at opplysningene brukes for å kontakte meg.</a></Link>

  return (
    <Layout title='Scalibra AS' >
      <section className='theme-scroll'>
        <div className='my-4 bg-white h-72'>
          <div className='w-3/5 mx-auto text-center'>
            <h1>{Asset.page_title}</h1>
            <p>{Asset.page_description}</p>
          </div>
          <animated.form className='w-2/5 mx-auto my-5 flex flex-col items-center shadow-xl rounded radius pb-6 bg-white mt-6' style={styles} onSubmit={handleSubmit}>
            <h4 className='mb-5'>Kom i kontakt med oss</h4>
            <TextInput handleChange={handleChange('name')} placeholder="Ditt fulle navn *" required={true} type="text" value={values.name}/>
            <TextInput handleChange={handleChange('company_name')} placeholder="Firmanavn *" required={true} type="text" value={values.company_name} />
            <TextInput handleChange={handleChange('email')} placeholder="Din e-post *" required={true} type="email" value={values.email} />
            <TextInput handleChange={handleChange('phone_number')} placeholder="Ditt telefonnummer *" required={true} type="tel" value={values.phone_number} />
            <CheckBox label={accept_text}/>
            <FooterBtnSubmit />
          </animated.form>
        </div>
      </section>
    </Layout>
  )
}

export default Home
