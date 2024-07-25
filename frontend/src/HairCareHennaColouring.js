import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';

export default function HairCareHennaColouring() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare25.jpg?alt=media&token=442674a3-cd26-484c-b6b9-c6146ca8bb64',
            serviceName: "Henna Application - S",
            price: "149",
            oldprice: "299",
            listItem: [
                " Henna Application - small length",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare26.jpg?alt=media&token=d683b079-ec74-4fca-b4b1-098cdd4bf36c',
            serviceName: "Henna Coloring - M",
            price: "249",
            oldprice: "499",
            listItem: [
                "Henna Application - Medium Length",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare27.jpg?alt=media&token=47533903-0858-4bd0-9747-7159c26726c7',
            serviceName: "Henna Coloring - L",
            price: "399",
            oldprice: "599",
            listItem: [
                "Henna Application - Large Length",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <HairCare />
            <h1 className='text-center pb-3'>Henna Colouring</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
