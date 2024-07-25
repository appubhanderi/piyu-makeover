import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';

export default function HairCareSplitting() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare14.jpg?alt=media&token=65c55288-6611-4a08-b15f-b153e81ca5a2',
            serviceName: "Hair Splitting - S",
            price: "199",
            oldprice: "499",
            listItem: [
                " Hair Splitting - Small",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare15.jpg?alt=media&token=a4d879e7-7f24-4a60-8102-a374e50eff12',
            serviceName: "Hair Splitting - M",
            price: "249",
            oldprice: "499",
            listItem: [
                "For dry skin",
                "Hair Splitting - Medium",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare16.jpg?alt=media&token=ecb25e56-ce44-4c10-90a1-badb5d3ea29e',
            serviceName: "Hair Splitting - L",
            price: "399",
            oldprice: "699",
            listItem: [
                "Hair Splitting - Large",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <HairCare />
            <h1 className='text-center pb-3'>Hair Splitting</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
