import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import PreBridal from './PreBridal';


export default function PreBridalGrooming() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal4.jpg?alt=media&token=f9a4db68-523f-4459-993b-ce6afd97a06b',
            serviceName: "Silver Package",
            price: "1599",
            oldprice: "2199",
            listItem: [
                "Aroma Magic Bridal Glow Facial",
                "Rica Wax Full Arms ,Legs and under arms",
                "Bleach / De Tan Face & Neck",
                "Classic Manicure & Pedicure",
                "Free Threading Eyebrows & Upper lip",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal5.jpg?alt=media&token=f428d83e-5cd3-4a67-88cd-844dd07a4c23',
            serviceName: "Luxury Package",
            price: "2499",
            oldprice: "3499",
            listItem: [
                "L’oreal Cheryl’s Oxy Blast",
                "Honey Wax Full body + Bikini",
                "Full Body Bleach",
                "Vedic Valley Mani-Pedi",
                "L'oreal Hair Spa",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal6.jpg?alt=media&token=36d9bae8-e74c-445a-9c47-066d8232c81a',
            serviceName: "Premium Package",
            price: "4599",
            oldprice: "5699",
            listItem: [
                "O3+ Power brightening",
                "O3+ Pedilogix Mani + Pedi",
                "Full Body Bleach",
                "RICA Full Body + Bikini wax",
                "Schwarzkopf Hair spa",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal7.jpg?alt=media&token=fcf3b56e-f4bf-4758-bce4-e139cbaffe6c',
            serviceName: "Ultra Premium",
            price: "5499",
            oldprice: "6599",
            listItem: [
                "Facial Casmara",
                "O3+ Pedilogix Mani-Pedi",
                "Full Body DeTan/Bleach + L'oreal Hair Spa",
                "Chocolate Full Body Polish",
                "Rica Full body + Bikini wax",
            ]
        }
    ];

    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <PreBridal />
            <h1 className='text-center pb-3'>Pre-Bridal Grooming</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
