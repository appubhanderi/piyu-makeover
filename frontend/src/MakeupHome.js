import React from 'react'
import Layout from './Layout'
import MakeupCarousel from './MakeupCarousel'
import Makeup from './Makeup'

export default function MakeupHome() {
    return (
        <Layout>
            <MakeupCarousel />
            <Makeup />
        </Layout>
    )
}
