import React from 'react'
import Layout from './Layout'
import BridalMakeup from './BridalMakeup'
import BridalMakeupCarousel from './BridalMakeupCarousel'

export default function BridalMakeupHome() {
    return (
        <Layout>
            <BridalMakeupCarousel />
            <BridalMakeup />
        </Layout>
    )
}
