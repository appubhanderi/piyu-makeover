import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Waxing from './Waxing';



export default function WaxingRicaBrazilian() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing2.jpg?alt=media&token=1f8ad9b0-a669-4639-bbc7-79ebb7b6cda2',
            serviceName: "Bikini Wax - Rica Brazilian",
            price: "599",
            oldprice: "999",
            listItem: [
                " Removes unwanted hair from Bikini area",
                " Excluding butt",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing6.jpg?alt=media&token=6e8476d1-4ab6-40fe-a93f-bea05f140774',
            serviceName: "Underarms",
            price: "69",
            oldprice: "79",
            listItem: [
                "Removes unwanted hair from Underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing20.jpg?alt=media&token=15a96744-1ba1-4ed7-b04e-d5e1d71a7165',
            serviceName: "Upper Lips",
            price: "49",
            oldprice: "69",
            listItem: [
                "Removes unwanted hair from Upper Lips",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing21.jpg?alt=media&token=c295cddc-2ae5-4859-b2b8-ba5e25faf8a0',
            serviceName: "Full Face",
            price: "199",
            oldprice: "299",
            listItem: [
                " Removes unwanted hair from Full Face",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing22.jpg?alt=media&token=521869b7-e739-4c3f-80d4-6e5dc18767fa',
            serviceName: "Chin",
            price: "49",
            oldprice: "99",
            listItem: [
                "Removes unwanted hair from Chin",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing19.jpg?alt=media&token=c587d76a-6803-4249-8dd5-7c48be0be268',
            serviceName: "Bikini Line / Butt",
            price: "199",
            oldprice: "299",
            listItem: [
                " Removes unwanted hair from Bikini Line / Butt Line",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing17.jpg?alt=media&token=ae0c0e63-9aa9-4bd7-9639-96762c61a047',
            serviceName: "Butt Wax",
            price: "349",
            oldprice: "499",
            listItem: [
                " Removes unwanted hair from Butt Wax",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing7.jpg?alt=media&token=58123932-1a97-4f23-a2bd-d7a1ff3ba52b',
            serviceName: "Bikini Wax Hygiene Kit",
            price: "49",
            oldprice: "99",
            listItem: [
                "1 Sanitizer",
                "1 Intimate Wash",
                "2 Gloves & 8 Wooden Spatulas",
                "2 Tissues",
                "1 After Wax Aloe Vera Gel",
            ]
        },

    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <Waxing />
            <h1 className='text-center pb-3'>Rica Braziliyan </h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
