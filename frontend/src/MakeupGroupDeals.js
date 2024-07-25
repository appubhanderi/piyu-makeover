import React, { useState } from 'react'
import Cards from './Cards';
import Layout from './Layout';
import Makeup from './Makeup';


export default function MakeupGroupDeals() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup17.jpg?alt=media&token=181aedfa-ef82-4290-84dd-dbe2ff83056e',
            serviceName: "Glamour Touch Group Make UP",
            price: "6999",
            oldprice: "12999",
            listItem: [
                "Light touch party Makeup",
                "Basic Hair: Straightening, Basic bun , Curls",
                "Package for group of 5 people",
                "Above 5 people -Rs 1499 per person",
            ]
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup18.jpg?alt=media&token=0df1fda4-aceb-4bfa-8409-6462ac35d771',
            serviceName: "Mac HD Group MakeUp",
            price: "7999",
            oldprice: "13999",
            listItem: [
                "HD Party Makeup",
                "Basic Hair do: Straightening, Blow-dry, Curls",
                "Package for 4 people",
                "Above 4 people -Rs 1599 per person",
            ]
        },
    ];


    const [cardArray, setCardArray] = useState(services);

    return (
        <Layout>
            <div className='pt-5 mt-4'></div>
            <Makeup />
            <h1 className='text-center pb-3'>Group Deals</h1>
            <Cards service={cardArray} />
        </Layout>
    );
}
