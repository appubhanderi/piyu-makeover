import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import HairCare from './HairCare';

export default function HairCareColouring() {

    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare17.jpg?alt=media&token=04b36088-d1ea-44ab-8751-0558fa558b04',
            serviceName: "Root Touchup & Wax",
            price: "799",
            oldprice: "1099",
            listItem: [
                " L'Oreal Majreal Root Touch-up",
                " Honey Wax: Full Arms, Full Legs & Underarms",
                " Threading",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare18.jpg?alt=media&token=944a5885-21ec-4560-8d46-ee1025183bf0',
            serviceName: "Hair Colour-Global Application",
            price: "149",
            oldprice: "199",
            listItem: [
                " Hair Colour-Global Application",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare19.jpg?alt=media&token=e64536bb-44e8-4e43-9e2a-9aeaa3a011c9',
            serviceName: "Loreal INOA Root Touch Up",
            price: "749",
            oldprice: "999",
            listItem: [
                " L’oreal INOA basic Shades: Darkest Brown, Brown, Light Brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare20.jpg?alt=media&token=337a9973-8833-4d3e-ab47-c9901ce2ed62',
            serviceName: "Loreal Majirel- Root Touch Up",
            price: "499",
            oldprice: "699",
            listItem: [
                "Shades: Darkest Brown, Brown, Light brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare21.jpg?alt=media&token=afa1936e-9760-4c17-901a-8a8b7bdb7bd2',
            serviceName: "Loreal INOA Global",
            price: "1199",
            oldprice: "1499",
            listItem: [
                " Hair Size: Upto Shoulder",
                "Ammonia Free Hair Colour",
                "Shades: Darkest Brown, Brown, Light brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare22.jpg?alt=media&token=08c91d54-5eb0-4eb3-b76b-49536909f3a4',
            serviceName: "Loreal Majirel Global -Upto Shoulder",
            price: "1099",
            oldprice: "1599",
            listItem: [
                " Shades: Darkest Brown, Brown, Light Brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare23.jpg?alt=media&token=5fce061c-64f6-4db2-a701-bbd87d16f3d2',
            serviceName: "Loreal INOA Global- Upto Waist",
            price: "1799",
            oldprice: "2599",
            listItem: [
                "Shades: Darkest Brown, Brown, Light Brown",
                "Ammonia Free Hair Colour with top notch coverage",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare24.jpg?alt=media&token=638aa4ec-6b13-4933-9d6b-286915f5d498',
            serviceName: "Loreal Majirel Global - Upto Waist",
            price: "1599",
            oldprice: "2199",
            listItem: [
                "Shades: Darkest Brown, Brown, Light Brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare21.jpg?alt=media&token=afa1936e-9760-4c17-901a-8a8b7bdb7bd2',
            serviceName: "Loreal INOA Global - BW",
            price: "2199",
            oldprice: "3599",
            listItem: [
                "Hair Size: Below Waist",
                "Ammonia Free Hair Colour",
                "Shades: Darkest Brown, Brown, Light brown",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare22.jpg?alt=media&token=08c91d54-5eb0-4eb3-b76b-49536909f3a4',
            serviceName: "Loreal Majirel Global - Below Waist",
            price: "2099",
            oldprice: "3499",
            listItem: [
                "Shades: Darkest Brown, Brown, Light Brown",
            ]
        },
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <HairCare />
            <h1 className='text-center pb-3'>Hair Colouring</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
