import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import FacialAndCleanup from './FacialAndCleanup';


export default function FacialCleanup() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup21.jpg?alt=media&token=072ec7a6-fd6b-4513-897a-a58a03e7861b',
            serviceName: "VLCC Cleanup",
            price: "149",
            oldprice: "399",
            listItem: [
                " Brand - VLCC",
                " Suitable for all skin types",
                " Removes dead skin cells",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup22.jpg?alt=media&token=76de075b-ac06-418d-ad42-72580ed8daf5',
            serviceName: "Lotus professional Cleanup",
            price: "149",
            oldprice: "399",
            listItem: [
                " Suitable for Normal to Dry skin",
                "  Refreshes and revitalizes skin cells",
                "  Maintains firmness and skin elasticity",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup14.jpg?alt=media&token=0e5dd6c1-3926-401c-abca-902639cfbd40',
            serviceName: "O3+ Whitening Clean Up - For All Type Skin",
            price: "299",
            oldprice: "599",
            listItem: [
                "Suitable for Normal to All skin type",
                "Refreshes and revitalizes skin cells",
                "Maintains firmness and skin elasticity",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup4.jpg?alt=media&token=0fdea4dc-64c3-43b1-80e4-1e33ad8c18b6',
            serviceName: "VLCC - Charcoal Cleanup",
            price: "299",
            oldprice: "599",
            listItem: [
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup17.jpg?alt=media&token=58a49f3b-c015-40ee-afb9-f53e0fdd7a4e',
            serviceName: "SARA Green Apple Cleanup by O3+",
            price: "299",
            oldprice: "599",
            listItem: [
                " For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup20.jpg?alt=media&token=0ba15074-80ef-456c-8e99-0acc4e2fa8e8',
            serviceName: "O3+ Seaweed Clean Up",
            price: "299",
            oldprice: "599",
            listItem: [
                " For oily skin",
            ]
        },
    ];
    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <FacialAndCleanup />
            <h1 className='text-center pb-3'>Cleanup </h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
