import React from 'react'
import Layout from './Layout'
import HomeTitle from './HomeTitle';
import HomeDescription from './HomeDescription';
import SeriviceCarousel from './SeriviceCarousel';

export default function Home() {
  return (
    <Layout>
      <HomeTitle />
      <HomeDescription />
      <SeriviceCarousel />
    </Layout>

  )
}
