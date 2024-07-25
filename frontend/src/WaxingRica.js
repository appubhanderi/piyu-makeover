import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Waxing from './Waxing';



export default function WaxingRica() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing2.jpg?alt=media&token=1f8ad9b0-a669-4639-bbc7-79ebb7b6cda2',
            serviceName: "Waxology - Rica",
            price: "599",
            oldprice: "999",
            listItem: [
                "  Rica Waxing - Full Arms & Full Legs",
                "  Rica Brazilian Waxing - Underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing7.jpg?alt=media&token=58123932-1a97-4f23-a2bd-d7a1ff3ba52b',
            serviceName: "RICA Bikini Wax Package",
            price: "1149",
            oldprice: "1399",
            listItem: [
                "Full Arms With Under Arms - RICA Wax",
                "Full legs - RICA Wax",
                "Bikini - RICA Wax",
                "Contact-Less Threading - Eyebrows, Upper lip",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing8.jpg?alt=media&token=f2c24bae-54d1-4fff-acf7-a3a31e63c240',
            serviceName: "Full Arms + Underarms",
            price: "399",
            oldprice: "599",
            listItem: [
                " Removes unwanted hair from Full Hands & Underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing12.jpg?alt=media&token=4f426ff2-c3d5-4413-8b0d-345bebcae4f9',
            serviceName: "Stomach",
            price: "199",
            oldprice: "299",
            listItem: [
                "  Removes unwanted hair from Stomach",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing13.jpg?alt=media&token=715e5539-9429-4986-806b-3a58f969cc74',
            serviceName: "Half Legs",
            price: "249",
            oldprice: "499",
            listItem: [
                "Unwanted hair on Half Legs (From toes to the knee)",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing9.jpg?alt=media&token=f99bba36-3a0c-4f58-944e-e1fc411cc4bb',
            serviceName: "Full Body Rica Wax",
            price: "999",
            oldprice: "1299",
            listItem: [
                " Excluding Bikini",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing15.jpg?alt=media&token=d995aeeb-d70b-4501-bf95-3722737d305f',
            serviceName: "Full Back",
            price: "249",
            oldprice: "499",
            listItem: [

            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing14.jpg?alt=media&token=60432c75-5e11-43b8-8985-40b0cd8068bb',
            serviceName: "Full Legs",
            price: "349",
            oldprice: "499",
            listItem: [
                " Removes unwanted hair from Full Legs",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing11.jpg?alt=media&token=0c08ee11-8181-4175-884b-c453821c06ff',
            serviceName: "Full Arms",
            price: "249",
            oldprice: "399",
            listItem: [
                " Without Underarms",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing13.jpg?alt=media&token=715e5539-9429-4986-806b-3a58f969cc74',
            serviceName: "Half Legs",
            price: "149",
            oldprice: "199",
            listItem: [
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing18.jpg?alt=media&token=3d3e4492-ebb5-42ef-bbbf-90a97f4a1351',
            serviceName: "Half Arms",
            price: "149",
            oldprice: "299",
            listItem: [
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing19.jpg?alt=media&token=c587d76a-6803-4249-8dd5-7c48be0be268',
            serviceName: "Bikini - RICA Wax",
            price: "599",
            oldprice: "799",
            listItem: [
                " Removes unwanted hair",
            ]
        },
    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <Waxing />
            <h1 className='text-center pb-3'>Rics Waxing </h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
