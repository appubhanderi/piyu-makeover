import React, { useState } from 'react';
import SelectServices from './SelectServices';


export default function ManiAndPadi() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi.jpg?alt=media&token=96e88c42-2713-4e7c-8fdc-0fd42d1ba8c6',
            serviceName: "Mani-Padi",
            href: "/ManiPadi"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi1.jpg?alt=media&token=ee0070cf-4102-404d-af47-a3d4db004dad',
            serviceName: "Padicure",
            href: "/ManiPadiPadicure"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Mani-Padi2.jpg?alt=media&token=c40fa2e8-a8e0-4001-baa3-6b76b3736c97',
            serviceName: "Manicure",
            href: "/ManiPadiManicure"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
