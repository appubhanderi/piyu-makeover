import React, { useState } from 'react';
import SelectServices from './SelectServices';


export default function Makeup() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup.jpg?alt=media&token=fdaf0f4c-f711-4e1a-b7f3-bdfb7cd022e3',
            serviceName: "Party Makeup",
            href: "/MakeupParty"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup1.jpg?alt=media&token=6b08be86-d81d-4388-9e57-19166940fdbe',
            serviceName: "Engagement Makeup",
            href: "/MakeupEngagement"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup2.jpg?alt=media&token=9d157906-b0e5-42ea-acfd-a9dae2fd4116',
            serviceName: "Hair Styling",
            href: "/MakeupHairStyling"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Makeup3.jpg?alt=media&token=e639eeb6-b731-4279-a4c3-575f2eb1c715',
            serviceName: "Group Deals",
            href: "/MakeupGroupDeals"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
