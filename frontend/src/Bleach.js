import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import BleachAndDtan from './BleachAndDtan';




export default function Bleach() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan2.jpg?alt=media&token=0cf8e6d8-736b-49d2-b4ea-ae0c17ebdcb2',
            serviceName: "Full Face & Neck Bleach",
            price: "149",
            oldprice: "299",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan3.jpg?alt=media&token=7df8a3b4-a08f-438d-ba41-5c8fc0827af0',
            serviceName: "Full Arms Bleach",
            price: "199",
            oldprice: "399",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan4.jpg?alt=media&token=03df6b7c-1ada-4f89-842e-08c25a2d8741',
            serviceName: "Under Arms Bleach",
            price: "99",
            oldprice: "199",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan5.jpg?alt=media&token=2baa40e2-643b-4bcf-a534-3dd372bfe6bb',
            serviceName: "Full legs Bleach",
            price: "399",
            oldprice: "699",
            listItem: [
                "For all skin type",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan6.jpg?alt=media&token=3832f936-ed99-4e6a-9c4e-bfb0642afbe4',
            serviceName: "Half Legs Bleach",
            price: "249",
            oldprice: "499",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan7.jpg?alt=media&token=fe69dffc-de10-4f30-b64b-7a9606380311',
            serviceName: "Front Bleach",
            price: "299",
            oldprice: "499",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan8.jpg?alt=media&token=71cb4e63-744a-4d1d-b14d-e882dd273b89',
            serviceName: "Back Bleach",
            price: "299",
            oldprice: "499",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan9.jpg?alt=media&token=c5adead7-3962-480e-99b1-e9383969fa6f',
            serviceName: "Full Body Bleach",
            price: "999",
            oldprice: "1499",
            listItem: [
                "For all skin type",
            ]
        },
    ];


    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <BleachAndDtan />
            <h1 className='text-center pb-3' >Bleach</h1>
            <Cards service={cardArray} />
        </Layout>
    );

}
