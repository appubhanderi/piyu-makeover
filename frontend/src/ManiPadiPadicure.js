import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import ManiAndPadi from './ManiAndPadi';


export default function ManiPadiPadicure() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi5.jpg?alt=media&token=942a59b8-ae7f-4cd0-94eb-68e56f9d0715',
            serviceName: "VLCC Padicure",
            price: "349",
            oldprice: "499",
            listItem: [
                "Smooth & supple hands and legs",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi6.jpg?alt=media&token=e00c52b6-0dcf-4a97-9c5f-e9f4883c9293',
            serviceName: "Classic Pedicure",
            price: "349",
            oldprice: "499",
            listItem: [
                "Moistures and softens the skin",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi6.jpg?alt=media&token=e00c52b6-0dcf-4a97-9c5f-e9f4883c9293',
            serviceName: "Vedic Valley - Lavender Padicure",
            price: "349",
            oldprice: "599",
            listItem: [
                "Moistures and softens the skin",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi7.jpg?alt=media&token=ffa323e3-a5d6-47d3-80dd-6a20c516edee',
            serviceName: "SARA Padicure",
            price: "399",
            oldprice: "599",
            listItem: [
                "Moistures and softens the skin",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi9.jpg?alt=media&token=2d8b7e79-52c5-4971-8e2b-3ffe78db0dff',
            serviceName: "Cut, File & Polish",
            price: "99",
            oldprice: "149",
            listItem: [
                "Necessary for groomed toe nails",
            ]
        },

    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <ManiAndPadi />
            <h1 className='text-center pb-3'>Padicure</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
