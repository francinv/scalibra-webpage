import type { NextPage } from 'next'
import Layout from '../../components/Containers/Layout'
import ContactSection from '../../components/ServiceSections/Contact'
import Intro from '../../components/ServiceSections/Intro'
import Preamble from '../../components/ServiceSections/Preamble'
import ServicesSection from '../../components/ServiceSections/Services'

const Services: NextPage = () => {
  return (
    <Layout title='Scalibra AS - Våre tjenester'>
      <Intro />
      <Preamble />
      <ServicesSection />
      <ContactSection />
    </Layout>
  )
}

export default Services