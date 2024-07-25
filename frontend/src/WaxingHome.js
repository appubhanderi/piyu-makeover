import React from 'react'
import Layout from './Layout'
import Waxing from './Waxing'
import WaxingCarousel from './WaxingCarousel'

export default function WaxingHome() {
    return (
        <Layout>
            <WaxingCarousel />
            <Waxing />
        </Layout>
    )
}
