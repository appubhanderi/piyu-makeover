import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';

export default function HairCareHighlights() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare28.jpg?alt=media&token=74ebd6dd-cbce-43eb-bb30-50d73825a53c',
            serviceName: "Blonde Brown Shade Hair Highlight",
            price: "149",
            oldprice: "199",
            listItem: [
                "Blonde/Brown Shade Hair Highlight (Per Strip)",
                "Shades: Darkest Brown, Brown, Light brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare29.jpg?alt=media&token=07f7a879-5bb1-4973-b324-fc105bfe366d',
            serviceName: "Fashion Shade Highlights",
            price: "249",
            oldprice: "499",
            listItem: [
                "Fashion Shade Highlights (Per Strip)",
                "Fashion Shade includes Blue, Orange, Green & Red",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare30.jpg?alt=media&token=4d61055a-a55a-40d8-872f-038e5905996a',
            serviceName: "Crown Area Highlights",
            price: "1099",
            oldprice: "2199",
            listItem: [
                "Colors Available Blonde/Brown & Burgundy shade",
                "The brands we use Wella and L'Oreal",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare31.jpg?alt=media&token=d1cdfc3b-5a4e-4713-befb-e81259c1d88f',
            serviceName: "Ombre Highlight",
            price: "1299",
            oldprice: "2599",
            listItem: [
                "Colors Available Blonde/Brown & Burgundy shade",
                "The brands we use Wella and L'Oreal",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare32.jpg?alt=media&token=bae7b256-d646-4f72-b777-ce448aa0af58',
            serviceName: "Global Highlights - Medium Hair Length",
            price: "2999",
            oldprice: "4599",
            listItem: [
                "Colors Available Blonde/Brown & Burgundy shade",
                "The brands we use Wella and L'Oreal",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <HairCare />
            <h1 className='text-center pb-3'>Hair Highlights</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
