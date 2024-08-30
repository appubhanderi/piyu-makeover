import React from 'react'
import Layout from './Layout'
import HomeTitle from './HomeTitle';
import HomeDescription from './HomeDescription';
import SeriviceCarousel from './SeriviceCarousel';
import HomeBrands from './HomeBrands';

export default function Home() {
  return (
    <Layout>
      <HomeTitle />
      <HomeDescription />
      <HomeBrands />
      <SeriviceCarousel className='mb-4' />
    </Layout>

  )
}
