import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import BridalMakeup from './BridalMakeup';


export default function BridalMakeups() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup2.jpg?alt=media&token=f1873b19-7401-4549-a5a8-a3ef687b05a0',
            serviceName: "Bridal Makeup - KRYOLAN",
            price: "4499",
            oldprice: "6999",
            listItem: [
                "KRYOLAN Bridal Makeup",
                "Hairdo - Any Style",
                "Dress Draping",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup3.jpg?alt=media&token=d6943101-b3dd-4c2a-82ba-0f4689eff89a',
            serviceName: "Bridal Makeup - MAC HD",
            price: "5999",
            oldprice: "9999",
            listItem: [
                "MAC HD Bridal Makeup",
                "Hairdo - Any Style",
                "Dress Draping",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <BridalMakeup />
            <h1 className='text-center  pb-3'>Bridal Makeup</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
