import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import ManiAndPadi from './ManiAndPadi';




export default function ManiPadi() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi4.jpg?alt=media&token=1d0428ab-c3c8-4d0e-8a70-fa2e67741082',
            serviceName: "VLCC VLCC Pedicure & Manicure",
            price: "399",
            oldprice: "699",
            listItem: [
                "Smooth & supple hands and legs",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi5.jpg?alt=media&token=942a59b8-ae7f-4cd0-94eb-68e56f9d0715',
            serviceName: "Classic Mani & Pedi",
            price: "299",
            oldprice: "499",
            listItem: [
                "Smooth & supple hands and legs",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi6.jpg?alt=media&token=e00c52b6-0dcf-4a97-9c5f-e9f4883c9293',
            serviceName: "Vedic Valley - Manicure & Pedicure",
            price: "349",
            oldprice: "599",
            listItem: [
                "Smooth & supple hands and legs",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi7.jpg?alt=media&token=ffa323e3-a5d6-47d3-80dd-6a20c516edee',
            serviceName: "SARA Rose Mani - Pedi",
            price: "399",
            oldprice: "599",
            listItem: [
                "Smooth & supple hands and legs",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi8.jpg?alt=media&token=1ef648d3-c92b-4f12-a068-b85ae34e1494',
            serviceName: "O3+ Mani & Pedi Luxury Crystal Spa",
            price: "699",
            oldprice: "1099",
            listItem: [
                "Smooth & supple hands and legs",
            ]
        },

    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <ManiAndPadi />
            <h1 className='text-center pb-3'>Mani-Padi</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
