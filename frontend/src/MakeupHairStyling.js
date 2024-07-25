import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Makeup from './Makeup';


export default function MakeupHairStyling() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup10.jpg?alt=media&token=cf5043ef-3dba-4563-bae7-b9c0fdde5417',
            serviceName: "Hairdo",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup11.jpg?alt=media&token=ed0717cb-b672-48a5-b467-2eb20a84d722',
            serviceName: "Blow Dry",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup12.jpg?alt=media&token=96e6a4ad-17e2-405d-8c2e-ec945302e419',
            serviceName: "Straightening",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup13.jpg?alt=media&token=89b78fe6-6b65-4fb3-90fd-3c5259712fa1',
            serviceName: "Hair CurL",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup14.jpg?alt=media&token=b392dfc3-2e8c-411e-bc9f-b9075c939007',
            serviceName: "Advance Hair DO",
            price: "799",
            oldprice: "1499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup15.jpg?alt=media&token=7a78e542-3a74-4e3b-ade9-78217a0012f3',
            serviceName: "Family Hair Styling",
            price: "1499",
            oldprice: "2499",
            listItem: [
                "Basic hair styling for group of 4 or more",
                "Includes Blow dry/ Ironing/Curling/Basic bun",
                "Above 4 - Rs 249 per person",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup16.jpg?alt=media&token=32b47319-391f-4323-ac2f-72d368d71eec',
            serviceName: "Saree Draping",
            price: "249",
            oldprice: "499",
            listItem: [
                "Saree draping / Dress Draping",
            ]
        },
    ];


    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <Makeup />
            <h1 className='text-center pb-3'>Hair Styling</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
