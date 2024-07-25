import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import FacialAndCleanup from './FacialAndCleanup';


export default function FacialAllSkin() {
    const services = [
        {
            img:'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup4.jpg?alt=media&token=0fdea4dc-64c3-43b1-80e4-1e33ad8c18b6',
            serviceName: "Vlcc Facial Package",
            price: "249",
            oldprice: "499",
            listItem: [
                "VLCC Insta Glow Facial",
                "Full Face Neck Bleach(OXY)",
                "Contact-Less Threading - Eyebrows",
                "Contact-Less Threading - Upper lip",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup5.jpg?alt=media&token=b38bb08d-1faf-4c78-8d40-2f6a22798d9c',
            serviceName: "OxyBlast Facial PACKAGE",
            price: "299",
            oldprice: "599",
            listItem: [
                " Cheryl's Facial - OxyBlast/GloVite/Vitalift by L'oreal",
                " Oxy - Bleach (Face & Neck)",
                "Threading - Eyebrows, Upper Lips & Forehead",
                " Head Massage (15 Min)",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup6.jpg?alt=media&token=eb1f6857-cb9f-46e9-b1ef-01de094da1d2',
            serviceName: "VLCC Insta Glow Facial",
            price: "199",
            oldprice: "499",
            listItem: [
                "For all skin types",
                "VLCC Insta Glow is a 5 step Facial",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup7.jpg?alt=media&token=702c84e6-38ef-4c70-8b31-eec384d48fab',
            serviceName: "VLCC Fruit Facial",
            price: "199",
            oldprice: "499",
            listItem: [
                "For all skin types",
                "VLCC Fruit Facial is a 5 step Facial",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup8.jpg?alt=media&token=eccdcf68-698b-490d-a01b-e38a8f3aeece',
            serviceName: "VLCC Anti Tan Facial",
            price: "199",
            oldprice: "499",
            listItem: [
                "For all skin types",
                "VLCC Anti Tan is a 5 step Facial",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup9.jpg?alt=media&token=26115570-d0ba-475f-8afd-b80f1fe03570',
            serviceName: "Blossom Kochhar Bridal Glow Facial",
            price: "499",
            oldprice: "899",
            listItem: [
                "Kochhar Bridal Glow is a 6 step Facial",
                " Benefits like visible enhancement of natural glow and a dazzling radiance.",
                "For all skin type",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup10.jpg?alt=media&token=54a8b844-ee66-44b5-9805-9abb00bcb51b',
            serviceName: "Lotus Herbals- Whitening & Glow Facial",
            price: "699",
            oldprice: "1099",
            listItem: [
                " For all skin type",
                "Lotus Herbals Facial improves your skin tone and uneven pigmentation and revives the natural glow of your skin removing excess sebum.",
            ]
        },

        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup11.jpg?alt=media&token=b07f1a24-5111-4ad4-87df-fcab5b82fff7',
            serviceName: "Lotus Herbals- Diamond Facial",
            price: "699",
            oldprice: "1099",
            listItem: [
                " For all skin type",
                " This Facial renews your skin and polishes it giving it a radiant glow.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup12.jpg?alt=media&token=8d70c884-553e-4118-80be-0843b5a7dca3',
            serviceName: "O3+ Whitening Facial",
            price: "999",
            oldprice: "1399",
            listItem: [
                " For all skin type",
                "Single-Use Product Brightens & Whitens All Skin Types It's Contain Six Steps.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup13.jpg?alt=media&token=94b651cf-19b2-417b-b431-9cfa7a955184',
            serviceName: "O3+ Shine & Glow",
            price: "1099",
            oldprice: "1399",
            listItem: [
                " For all skin type",
                "O3+ Shine & Glow is designed to control and prevent uneven skin tone & pigmentation issues.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup14.jpg?alt=media&token=0e5dd6c1-3926-401c-abca-902639cfbd40',
            serviceName: "O3+ Bridal Facial - For Radiant & Glowing Skin",
            price: "1299",
            oldprice: "1499",
            listItem: [
                " For all skin type",
                "This facial also lightens the skin.",
            ]
        }
    ];

    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <FacialAndCleanup />
            <h1 className='text-center pb-3'>Classic Facial</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
