import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import ManiAndPadi from './ManiAndPadi';



export default function ManiPadiManicure() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi5.jpg?alt=media&token=942a59b8-ae7f-4cd0-94eb-68e56f9d0715',
            serviceName: "VLCC Manicure",
            price: "299",
            oldprice: "499",
            listItem: [
                " Smooth & supple hands",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi6.jpg?alt=media&token=e00c52b6-0dcf-4a97-9c5f-e9f4883c9293',
            serviceName: "Classic Manicure",
            price: "299",
            oldprice: "499",
            listItem: [
                " Smooth & supple hands",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi6.jpg?alt=media&token=e00c52b6-0dcf-4a97-9c5f-e9f4883c9293',
            serviceName: "Vedic Valley - Lavender Manicure",
            price: "299",
            oldprice: "599",
            listItem: [
                "Reduces sun tans and whiten the skin",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi7.jpg?alt=media&token=ffa323e3-a5d6-47d3-80dd-6a20c516edee',
            serviceName: "SARA Manicure",
            price: "399",
            oldprice: "599",
            listItem: [
                "Reduces sun tans and whiten the skin",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi9.jpg?alt=media&token=2d8b7e79-52c5-4971-8e2b-3ffe78db0dff',
            serviceName: "Nail Paint Apply",
            price: "49",
            oldprice: "79",
            listItem: [
                "Groomed and beautiful nails",
            ]
        },

    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <ManiAndPadi />
            <h1 className='text-center pb-3'>Manicure </h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
