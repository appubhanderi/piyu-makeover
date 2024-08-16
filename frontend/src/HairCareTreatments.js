import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';

export default function HairCareTreatments() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare33.jpg?alt=media&token=5579910e-c95c-43e1-9ef5-b81aa0cd066a',
            serviceName: "Schwarzkopf Smoothing Small Hair Length",
            price: "2499",
            oldprice: "4499",
            listItem: [
                "Hair Size: Small Length",
                "Smoothens Hair and improves Hair texture",
                "Product used: Schwarzkopf",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare34.jpg?alt=media&token=fd33ddc5-9532-4624-90fc-bce463f642e2',
            serviceName: "Schwarzkopf Smoothing Medium Hair Length",
            price: "2999",
            oldprice: "4999",
            listItem: [
                "Hair Size: Medium Length",
                "Smoothens Hair and improves Hair texture",
                "Product used: Schwarzkopf",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare35.jpg?alt=media&token=481b0f22-f654-4876-88fe-3df15515dc0a',
            serviceName: "Schwarzkopf Smoothing Large Hair Length",
            price: "3499",
            oldprice: "5599",
            listItem: [
                "Hair Size: Large Length",
                "Smoothens Hair and improves Hair texture",
                "Product used: Schwarzkopf",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare33.jpg?alt=media&token=5579910e-c95c-43e1-9ef5-b81aa0cd066a',
            serviceName: "Schwarzkopf Rebonding - Small Hair Length",
            price: "2499",
            oldprice: "3699",
            listItem: [
                "Hair Size: Small Length",
                "For Silky and Straight Hair",
                "Product used: Schwarzkopf",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare34.jpg?alt=media&token=fd33ddc5-9532-4624-90fc-bce463f642e2',
            serviceName: "Schwarzkopf Rebonding - Medium Hair Length",
            price: "3399",
            oldprice: "4699",
            listItem: [
                "Hair Size: Medium Length",
                "For Silky and Straight Hair",
                "Product used: Schwarzkopf",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare35.jpg?alt=media&token=481b0f22-f654-4876-88fe-3df15515dc0a',
            serviceName: "Schwarzkopf Rebonding - Large Hair Length",
            price: "3999",
            oldprice: "5699",
            listItem: [
                "Hair Size: Large  Length",
                "For Silky and Straight Hair",
                "Product used: Schwarzkopf",
            ]
        },
        {

            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare33.jpg?alt=media&token=5579910e-c95c-43e1-9ef5-b81aa0cd066a',
            serviceName: "Keratin treatment - Small Hair Length",
            price: "3399",
            oldprice: "5699",
            listItem: [
                "Hair Size: Small Length",
                "For Silky , Shiny and healthy Hair",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare34.jpg?alt=media&token=fd33ddc5-9532-4624-90fc-bce463f642e2',
            serviceName: "Keratin treatment - Medium Hair Length",
            price: "3999",
            oldprice: "6699",
            listItem: [
                "Hair Size: Medium  Length",
                "For Silky , Shiny and healthy Hair",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare35.jpg?alt=media&token=481b0f22-f654-4876-88fe-3df15515dc0a',
            serviceName: "Keratin treatment - Large Hair Length",
            price: "4499",
            oldprice: "7699",
            listItem: [
                "Hair Size: Large   Length",
                "For Silky , Shiny and healthy Hair",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <HairCare />
            <h1 className='text-center pb-3'>Hair Treatments</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
