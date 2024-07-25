import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';


export default function HairCareCut() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare11.jpg?alt=media&token=199caa04-eff4-47cb-ad1d-e53f44948df8',
            serviceName: "Hair Trimming",
            price: "149",
            oldprice: "199",
            listItem: [
                "For trimming your damaged or uneven hair",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare12.jpg?alt=media&token=a2bb8c68-be33-494a-aba7-3d4999fe1708',
            serviceName: "Normal Hair Cut",
            price: "249",
            oldprice: "499",
            listItem: [
                "  Straight, U shape, V Shape Cut.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare13.jpg?alt=media&token=a66f277d-d3d1-4daa-9162-ca27ff182160',
            serviceName: "Advance Hair Cut",
            price: "349",
            oldprice: "599",
            listItem: [
                " Bob, Blunt, Layer",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <HairCare />
            <h1 className='text-center pb-3'>Hair Cut</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
