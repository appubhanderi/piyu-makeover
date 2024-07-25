import React from 'react'
import PreBridalCarousel from './PreBridalCarousel'
import PreBridal from './PreBridal'
import Layout from './Layout'

export default function PreBridalHome() {
    return (
        <Layout>
            <PreBridalCarousel />
            <PreBridal />
        </Layout>
    )
}
