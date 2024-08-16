import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Waxing from './Waxing';

export default function WaxingHoney() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing4.jpg?alt=media&token=76e33464-988c-4ef2-9bf1-27bd86a18cdd',
            serviceName: "Honey Bikini Wax Package",
            price: "799",
            oldprice: "1199",
            listItem: [
                "  Honey Chocolate Waxing - Full Arms, & Underarms",
                "  Honey Chocolate Waxing - Full Legs",
                "   Bikini Waxing - Honey Wax",
                "   Contact-Less Threading - Eyebrows, Upper lip & Forehead",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing5.jpg?alt=media&token=f43ecfc4-d229-4180-81ef-ecad0eaff548',
            serviceName: "Waxology - Honey",
            price: "349",
            oldprice: "599",
            listItem: [
                "  Normal Honey Chocolate Waxing - Full Arms, Full Legs & Underarms",
                " Threading - Eyebrows",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing6.jpg?alt=media&token=6e8476d1-4ab6-40fe-a93f-bea05f140774',
            serviceName: "Underarms",
            price: "49",
            oldprice: "99",
            listItem: [
                " Removes unwanted hair from underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing7.jpg?alt=media&token=58123932-1a97-4f23-a2bd-d7a1ff3ba52b',
            serviceName: "Bikini Wax",
            price: "399",
            oldprice: "599",
            listItem: [
                " Suitable for Normal to Dry skin Refreshes",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing8.jpg?alt=media&token=f2c24bae-54d1-4fff-acf7-a3a31e63c240',
            serviceName: "Full Arms + Underarms",
            price: "249",
            oldprice: "499",
            listItem: [
                "Removes unwanted hair from Full Hands & Underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing9.jpg?alt=media&token=f99bba36-3a0c-4f58-944e-e1fc411cc4bb',
            serviceName: "Full Body - Honey Wax",
            price: "799",
            oldprice: "1099",
            listItem: [
                " Excluding Bikini",
                " Removes unwanted hair from Full body (excluding Face, Bikini & Butt)",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing10.jpg?alt=media&token=f55cd61e-af09-4400-b424-00c0287f02b5',
            serviceName: "Quick WAX IT",
            price: "249",
            oldprice: "499",
            listItem: [
                " Normal Honey Chocolate Waxing - Full Arms, Half Legs & Underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing11.jpg?alt=media&token=0c08ee11-8181-4175-884b-c453821c06ff',
            serviceName: "Full Arms",
            price: "199",
            oldprice: "399",
            listItem: [
                "Without Underarms",
                "Removes unwanted hair from Full Hands",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing12.jpg?alt=media&token=4f426ff2-c3d5-4413-8b0d-345bebcae4f9',
            serviceName: "Stomach",
            price: "199",
            oldprice: "299",
            listItem: [
                " Removes unwanted hair from Stomach",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing13.jpg?alt=media&token=715e5539-9429-4986-806b-3a58f969cc74',
            serviceName: "Half Legs",
            price: "199",
            oldprice: "299",
            listItem: [
                " Removes unwanted hair from half legs (From toes to the knee)",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing14.jpg?alt=media&token=60432c75-5e11-43b8-8985-40b0cd8068bb',
            serviceName: "Full Legs",
            price: "249",
            oldprice: "399",
            listItem: [
                " Removes unwanted hair from Full Legs",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing15.jpg?alt=media&token=d995aeeb-d70b-4501-bf95-3722737d305f',
            serviceName: "Full Back",
            price: "199",
            oldprice: "299",
            listItem: [
                " Removes unwanted hair from Full Back",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing16.jpg?alt=media&token=a9538dea-7b06-4458-a417-f7d316514635',
            serviceName: "Half Back",
            price: "149",
            oldprice: "179",
            listItem: [
                "Removes unwanted hair from Half Back",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing17.jpg?alt=media&token=ae0c0e63-9aa9-4bd7-9639-96762c61a047',
            serviceName: "Bikini + Butt Wax",
            price: "449",
            oldprice: "699",
            listItem: [
                "Removes Unwanted hair from Bikini & Butt",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing18.jpg?alt=media&token=3d3e4492-ebb5-42ef-bbbf-90a97f4a1351',
            serviceName: "Half Arms",
            price: "149",
            oldprice: "179",
            listItem: [
                "Without Underarms",
                "Removes unwanted hair from Half Hands",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing19.jpg?alt=media&token=c587d76a-6803-4249-8dd5-7c48be0be268',
            serviceName: "Bikini + Butt + Bikini Line",
            price: "499",
            oldprice: "779",
            listItem: [
                " Removes Unwanted hair from Bikini, Butt & Bikini Line",
            ]
        },

    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <Waxing />
            <h1 className='text-center pb-3'>Honey Waxing </h1>
            <Cards service={cardArray} />
        </Layout>
    );
}