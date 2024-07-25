import React, { useState } from 'react';
import Cards from './Cards';


export default function HairStyle() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle.jpg?alt=media&token=a4c866f8-0da9-4791-8325-fde53c46d0c2',
            serviceName: "Gajra Bun Hairstyle",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle1.jpg?alt=media&token=be66d207-8244-4690-91a3-196ea5277cbf',
            serviceName: "Half Up Curly Hairstyle",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle2.jpg?alt=media&token=89eb5234-8f20-482a-bb97-6f7fe0931cf5',
            serviceName: "Messy Low Bun Hairstyle",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle3.jpg?alt=media&token=aab94ea3-b322-4bc2-8202-8e5054d50e38',
            serviceName: "Sculpted Twists Hairstyle",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle4.jpg?alt=media&token=7a12d291-8d83-41e2-997d-1a51e444efbf',
            serviceName: "Wavy Hairstyle",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle5.jpg?alt=media&token=723963df-a03f-4eaf-9579-ddd17aa33c83',
            serviceName: "Open Hairstyle",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle6.jpg?alt=media&token=0b60d32b-6ffc-4c00-b851-0a68399c87d2',
            serviceName: "Flower Bun and Fishtail Braid ",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle7.jpg?alt=media&token=8f1be1ff-5757-4885-8253-f17040a2d93b',
            serviceName: "Senorita Bun",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle8.jpg?alt=media&token=69ee8f9a-4528-4848-a18d-64f8398b421e',
            serviceName: "Side Swept Curls",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle9.jpg?alt=media&token=5fe23313-8f7a-47f4-b846-cdc09da06cb8',
            serviceName: "Braided Bun",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle10.jpg?alt=media&token=b560e6cb-c4d0-4de2-b568-df94f06b059d',
            serviceName: "Accessorize the Braid",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle11.jpg?alt=media&token=9a850a6d-7313-43a8-a08c-a80637e775d6',
            serviceName: "Loose Braids",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle12.jpg?alt=media&token=8ac569c1-87c1-4c4f-8a9c-621c23541547',
            serviceName: "Half Up",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Hairstyle13.jpg?alt=media&token=edaca424-7e34-4ced-aac0-b6b4f598c594',
            serviceName: "Minimalistic Bun",
            price: "399",
            oldprice: "499",
            listItem: [
                "For Any Length",
                "Extra Cost for Buns & Accessories",
            ]
        },
    ];
    const [cardArray, setCardArray] = useState(services);
    return (
        <>
            <h1 className='text-center pt-3 pb-3'>Book Now</h1><hr />
            <Cards service={cardArray} />
        </>
    );
}
