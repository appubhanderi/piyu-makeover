import React, { useState } from 'react';
import SelectServices from './SelectServices';
import WaxingCarousel from './WaxingCarousel';


export default function Waxing() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing.jpg?alt=media&token=3eabc6c9-34f9-4176-8a65-815575d51758',
            serviceName: "Honey Waxing",
            href: "/WaxingHoney"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing1.jpg?alt=media&token=b41a99f0-7d1c-43dc-b339-59f8dd09a2c2',
            serviceName: "Rics Waxing",
            href: "/WaxingRica"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing2.jpg?alt=media&token=1f8ad9b0-a669-4639-bbc7-79ebb7b6cda2',
            serviceName: "Rica Braziliyan",
            href: "/WaxingRicaBrazilian"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Waxing3.jpg?alt=media&token=1e4c1baa-5a8d-42f4-b39d-1daad5706894',
            serviceName: "Rica Roll-On",
            href: "/WaxingRicaRollon"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <>
            <WaxingCarousel />
            <SelectServices services={serviceArry} />
        </>
    );
}
