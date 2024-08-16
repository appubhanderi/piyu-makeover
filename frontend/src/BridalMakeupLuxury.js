import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import BridalMakeup from './BridalMakeup';

export default function BridalMakeupLuxury() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup4.jpg?alt=media&token=c9b78df1-b113-4537-a353-269c0c987b03',
            serviceName: "Luxury Bridal Makeup",
            price: "6599",
            oldprice: "11999",
            listItem: [
                "Luxury Advance Bridal Make up",
                "Advance Hair Do",
                "Dress/Saree Draping",
                "Professional Makeup Artist",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup5.jpg?alt=media&token=b1826b5f-abbf-4cc7-b9b6-60d601f1c3c4',
            serviceName: "Luxury MAC HD Bridal Makeup",
            price: "9999",
            oldprice: "14999",
            listItem: [
                "Premium MAC HD  Make up",
                "Advance Hair Do",
                "Dress/Saree Draping",
                "Professional Makeup Artist",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup6.jpg?alt=media&token=2312c4bd-c52c-4388-9df5-771deec3df2d',
            serviceName: "Air Brush Make Up",
            price: "14999",
            oldprice: "21999",
            listItem: [
                "Air Brush Make up",
                "Advance Hair Do",
                "Dress/Saree Draping",
                "Professional Makeup Artist",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <BridalMakeup />
            <h1 className='text-center pb-3'>Luxury Bridal Makeup</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
