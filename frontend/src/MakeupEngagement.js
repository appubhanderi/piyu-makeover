import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Makeup from './Makeup';



export default function MakeupEngagement() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup7.jpg?alt=media&token=15a3d9a1-ff46-43a2-9189-b1fd3485e638',
            serviceName: "Luxury Makeup",
            price: "3999",
            oldprice: "6999",
            listItem: [
                "Advance Makeup",
                "Advance Hair Do",
                "Dress/Saree Draping",
                "Professional Makeup Artist",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup8.jpg?alt=media&token=6095bde3-90ae-4874-8fa1-cefa8780fd3a',
            serviceName: "MAC HD Make UP",
            price: "4999",
            oldprice: "7999",
            listItem: [
                "Premium MAC HD Make up",
                "Advance Hair Do",
                "Dress/Saree Draping",
                "Professional Makeup Artist",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup9.jpg?alt=media&token=cfca1172-939d-43d8-b7d7-756d98edbe32',
            serviceName: "Air Brush Makeup",
            price: "6999",
            oldprice: "14999",
            listItem: [
                "Air Brush Make up",
                "Advance Hair Do",
                "ress/Saree Draping",
                "Professional Makeup Artist",
            ]
        },
    ];


    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <Makeup />
            <h1 className='text-center pb-3'>Engagement Makeup</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
