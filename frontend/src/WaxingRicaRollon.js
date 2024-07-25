import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Waxing from './Waxing';



export default function WaxingRicaRollon() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing24.jpg?alt=media&token=2de38646-34fc-4786-ae61-a168be0c6944',
            serviceName: "Rica Roll-On - Wax It",
            price: "799",
            oldprice: "1199",
            listItem: [
                "Rica Roll-On Waxing - Full Arms & Full Legs",
                "Rica Brazilian (Peel-off) Waxing - Underarms",
                "Threading - Eyebrows, Upper Lips & Forehead",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing23.jpg?alt=media&token=63a922c4-0135-4c41-94e7-bd847e77a211',
            serviceName: "Rica Roll-On Special",
            price: "1349",
            oldprice: "1599",
            listItem: [
                "Rica Roll-On Waxing - Full Arms & Full Legs",
                "Rica Brazilian (Peel-off) Waxing - Bikini &Underarms",
                "Threading - Eyebrows, Upper Lips & Forehead",
                "Oxy - Bleach / De-Tan - (Face & Neck)",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing9.jpg?alt=media&token=f99bba36-3a0c-4f58-944e-e1fc411cc4bb',
            serviceName: "Full Body Rica Roll On",
            price: "1349",
            oldprice: "1599",
            listItem: [
                "Excluding Bikini",
                "Removes unwanted hair from Full body (excluding Face, Bikini & Butt))",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing8.jpg?alt=media&token=f2c24bae-54d1-4fff-acf7-a3a31e63c240',
            serviceName: "Full Arms + Underarms",
            price: "399",
            oldprice: "599",
            listItem: [
                "Removes unwanted hair from Full Hands & Underarms",
                "Underarms done by Rica Brazilian (Peel-off) Wax",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing14.jpg?alt=media&token=60432c75-5e11-43b8-8985-40b0cd8068bb',
            serviceName: "Full Legs",
            price: "2349",
            oldprice: "599",
            listItem: [
                "Removes unwanted hair from Full Legs",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing12.jpg?alt=media&token=4f426ff2-c3d5-4413-8b0d-345bebcae4f9',
            serviceName: "Stomach",
            price: "399",
            oldprice: "599",
            listItem: [
                "Removes unwanted hair from Stomach",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing13.jpg?alt=media&token=715e5539-9429-4986-806b-3a58f969cc74',
            serviceName: "Half Legs",
            price: "349",
            oldprice: "599",
            listItem: [
                " Removes unwanted hair from Half Legs",
                " Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing15.jpg?alt=media&token=d995aeeb-d70b-4501-bf95-3722737d305f',
            serviceName: "Full Back",
            price: "399",
            oldprice: "599",
            listItem: [
                "Removes unwanted hair from Full Back",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing11.jpg?alt=media&token=0c08ee11-8181-4175-884b-c453821c06ff',
            serviceName: "Full Arms",
            price: "419",
            oldprice: "699",
            listItem: [
                " Removes unwanted hair from Full Arms",
                " Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing16.jpg?alt=media&token=a9538dea-7b06-4458-a417-f7d316514635',
            serviceName: "Half Back",
            price: "395",
            oldprice: "595",
            listItem: [
                "Removes unwanted hair from Half Back",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing18.jpg?alt=media&token=3d3e4492-ebb5-42ef-bbbf-90a97f4a1351',
            serviceName: "Half Arms",
            price: "369",
            oldprice: "569",
            listItem: [
                "Removes unwanted hair from Half Arms",
                "Low-contact Rica Roll-On Wax for maximum hygiene",
            ]
        },
    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <Waxing />
            <h1 className='text-center pb-3'>Rica Roll-on </h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
