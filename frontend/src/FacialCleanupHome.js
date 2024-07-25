import React from 'react'
import Layout from './Layout'
import FacialCleanupCarousel from './FacialCleanupCarousel'
import FacialAndCleanup from './FacialAndCleanup'

export default function FacialCleanupHome() {
    return (
        <Layout>
            <FacialCleanupCarousel />
            <FacialAndCleanup />
        </Layout>
    )
}
