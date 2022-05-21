import React from 'react';
import type { NextPage } from 'next'
import Layout from '../components/Containers/Layout';
import SectionContact from '../components/HomeSections/SectionContact';
import SectionServices from '../components/HomeSections/SectionServices';
import SectionFunfact from '../components/HomeSections/SectionFunfact';
import SectionProducts from '../components/HomeSections/SectionProducts';

const Home: NextPage = () => {
  return (
    <Layout title='Scalibra AS' >
      <SectionContact />
      <SectionServices />
      <SectionFunfact />
      <SectionProducts />
    </Layout>
  );
}

export default Home
