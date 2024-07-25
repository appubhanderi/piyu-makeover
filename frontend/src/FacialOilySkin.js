import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import FacialAndCleanup from './FacialAndCleanup';


export default function FacialOilySkin() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup18.jpg?alt=media&token=5ab7a48b-2806-4d1f-965b-b7ce9cdb294b',
            serviceName: "Ragga Express Facial - For Oily Skin",
            price: "199",
            oldprice: "499",
            listItem: [
                " For oily skin",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup19.jpg?alt=media&token=13c8a3c4-f080-4cc6-91b4-03fd721ef104',
            serviceName: "Lotus Professional- Goldsheen Facial",
            price: "299",
            oldprice: "599",
            listItem: [
                " For oily skin",
                " Removes impurities from pores and prepares skin to absorb actives effectively.",
                " Gives radiant looking younger skin.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup20.jpg?alt=media&token=0ba15074-80ef-456c-8e99-0acc4e2fa8e8',
            serviceName: "O3+ Seaweed Facial - For Oily Skin Type",
            price: "899",
            oldprice: "1099",
            listItem: [
                " For oily skin",
                " Single-Use Product B Brightens & Purifies Oily Skin Type.",
            ]
        },

    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <FacialAndCleanup />
            <h1 className='text-center pb-3'>Luxury Facial</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
