import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';


export default function HairCareSpa() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare8.jpg?alt=media&token=3caa50dd-1276-401a-a92a-fb56e6cabb74',
            serviceName: "Loreal Hair Spa- S",
            price: "499",
            oldprice: "999",
            listItem: [
                " Hair Size: Small Length",
                " Product Used: Loreal",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare9.jpg?alt=media&token=4884e8f8-1828-4aa0-bc9a-496b2288d11d',
            serviceName: "Loreal Hair Spa- M",
            price: "549",
            oldprice: "1499",
            listItem: [
                " Hair Size: Medium Length",
                "Product Used: Loreal",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare10.jpg?alt=media&token=6ef4a3f9-2af2-4de8-80d0-844c97aeb4fd',
            serviceName: "Loreal Hair Spa- L",
            price: "999",
            oldprice: "1499",
            listItem: [
                "Hair Size: Large",
                "Product Used: Loreal",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <HairCare />
            <h1 className='text-center pb-3'>Hair Spa</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
