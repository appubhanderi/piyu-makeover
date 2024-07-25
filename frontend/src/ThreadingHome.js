import React from 'react'
import Layout from './Layout'
import ThreadingCarousel from './ThreadingCarousel'
import Threading from './Threading'

export default function ThreadingHome() {
  return (
      <Layout>
          <ThreadingCarousel />
          <Threading/>
   </Layout>
  )
}
