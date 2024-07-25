import React from 'react'
import Layout from './Layout'
import ManiPadiCarousel from './ManiPadiCarousel'
import ManiPadi from './ManiAndPadi'

export default function ManiPadiHome() {
    return (
        <Layout>
            <ManiPadiCarousel />
            <ManiPadi />
        </Layout>
    )
}
