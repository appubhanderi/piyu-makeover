import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Makeup from './Makeup';



export default function MakeupParty() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup4.jpg?alt=media&token=b127c693-8380-4b6c-9da3-e8381cbfd672',
            serviceName: "Light Touch Make UP",
            price: "1499",
            oldprice: "2499",
            listItem: [
                "Basic Makeup",
                "Basic Hair Do",
                "Professional Makeup Artist",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup5.jpg?alt=media&token=a6b81ab4-ab76-44d4-88bf-e27745468387',
            serviceName: "Luxury Party Makeup",
            price: "2499",
            oldprice: "2999",
            listItem: [
                " Advance Makeup",
                " Advance Hair Do",
                " Complimentary Saree Draping",
                " Professional Makeup Artist",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup6.jpg?alt=media&token=d10daf04-490d-4db2-b36d-4106109bf72b',
            serviceName: "MAC HD Makeup",
            price: "3499",
            oldprice: "5999",
            listItem: [
                "Premium MAC HD Make Up",
                "Advance Hair Do",
                "Dress/Saree Draping",
                " Professional Makeup Artist",
            ]
        },

    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <Makeup />
            <h1 className='text-center pb-3'>Party Makeup</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
