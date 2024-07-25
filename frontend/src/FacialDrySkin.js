import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import FacialAndCleanup from './FacialAndCleanup';




export default function FacialDrySkin() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup15.jpg?alt=media&token=1edf7691-bdb8-40ad-9b32-176d0a4d357d',
            serviceName: "Ragga Express Facial - For Dry Skin",
            price: "199",
            oldprice: "499",
            listItem: [
                " For dry skin",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup16.jpg?alt=media&token=1fdf3f99-4a17-4449-93e0-94d97ce482cb',
            serviceName: "Blossom Kochhar Diamond Facial",
            price: "249",
            oldprice: "499",
            listItem: [
                " For dry skin",
                " Blossom Kochhar Diamond 6 Step Facial.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup17.jpg?alt=media&token=58a49f3b-c015-40ee-afb9-f53e0fdd7a4e',
            serviceName: "SARA Green Apple Facial by O3+",
            price: "299",
            oldprice: "599",
            listItem: [
                " For dry skin",
                " This Facial is suitable for matured, dry skin gives a younger-looking, vibrant appearance instantly.",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <FacialAndCleanup />
            <h1 className='text-center pb-3'>Premium Facial</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
