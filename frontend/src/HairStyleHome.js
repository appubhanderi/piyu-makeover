import React from 'react'
import Layout from './Layout'
import HairStyle from './HairStyle'
import HairStyleCarousel from './HairStyleCarousel'

export default function HairStyleHome() {
    return (
        <Layout>
            <HairStyleCarousel />
            <HairStyle />
        </Layout>
    )
}
