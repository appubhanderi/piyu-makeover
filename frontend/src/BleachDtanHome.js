import React from 'react'
import Layout from './Layout'
import BleachDtanCarousel from './BleachDtanCarousel'
import BleachDtan from './BleachAndDtan'

export default function BleachDtanHome() {
    return (
        <Layout>
            <BleachDtanCarousel />
            <BleachDtan />
        </Layout>
    )
}


