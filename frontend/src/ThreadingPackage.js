import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Threading from './Threading';


export default function ThreadingPackage() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading2.jpg?alt=media&token=c8ae5205-3e98-4f80-ab92-3f11988b7556',
            serviceName: "Threading - Eyebrows",
            price: "20",
            oldprice: "49",
            listItem: [
                "Give yourself a polished look by clearing up your unwanted brow hairs.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading3.jpg?alt=media&token=7161d6a6-b263-47d9-b9eb-f49a175e3a2a',
            serviceName: "Threading - Upper lip",
            price: "20",
            oldprice: "39",
            listItem: [
                "Redefine your girlish look by removing unwanted upper lip hair.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading4.jpg?alt=media&token=50fb73da-f836-4000-a403-0d0e2328100c',
            serviceName: "Threading - Forehead",
            price: "30",
            oldprice: "59",
            listItem: [
                "Cleaning up your forehead will give you a precise look for day to day life",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading5.jpg?alt=media&token=9a1e7594-2588-4212-a69a-c66f6635a26f',
            serviceName: "Threading - Chin",
            price: "25",
            oldprice: "49",
            listItem: [
                " Don't let your chin hair embarrass you we can help you remove it.",
            ]
        }
        ,
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading6.jpg?alt=media&token=e3a628c4-5737-4089-8cb0-9d6842823f3e',
            serviceName: "Threading - Full Face",
            price: "99",
            oldprice: "149",
            listItem: [
                "Removal of all unwanted hair from your face will give you a flawless look.",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading7.jpg?alt=media&token=6965a507-b33a-417a-b47e-26aaba362474',
            serviceName: "Threading - Side locks",
            price: "30",
            oldprice: "59",
            listItem: [
                " Side lock threading removes the excess hair on the side locks by the use of thin thread.",
            ]
        },]
    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <Threading />
            <h1 className='text-center  pb-3'>Threading </h1>
            <Cards service={cardArray} />
        </Layout>
    )
}
