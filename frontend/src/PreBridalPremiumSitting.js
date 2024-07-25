import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import PreBridal from './PreBridal';


export default function PreBridalPremiumSitting() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal2.jpg?alt=media&token=213d939f-e4b9-4e1d-b5d9-ebc6f4a4843e',
            serviceName: "Gorgeous Bride 1st Sitting - 15 Days Before",
            price: "2499",
            oldprice: "5999",
            listItem: [
                "O3+ Sea white facial",
                "L’Oréal Hair Spa",
                "Full Body De Tan/Bleach",
                "Free Threading Eyebrows & Upper lip",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal3.jpg?alt=media&token=e66fa700-432c-43ec-8a89-451cdc423f8e',
            serviceName: "Gorgeous Bride 2nd Sitting -1 Day Before",
            price: "4999",
            oldprice: "7999",
            listItem: [
                "O3+ Bridal Glow facial",
                "Rica Full body + Bikini wax",
                "Vedic valley Mani Pedi",
                "Chocolate Full body polish",
                " L’Oréal hair spa",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <PreBridal />
            <h1 className='text-center pb-3'>Premium Sitting</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
