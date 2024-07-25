import React from 'react'
import Layout from './Layout'
import HairCare from './HairCare'
import HairCareCarousel from './HairCareCarousel'

export default function HairCareHome() {
    return (
        <Layout>
            <HairCareCarousel />
            <HairCare />
        </Layout>
    )
}
