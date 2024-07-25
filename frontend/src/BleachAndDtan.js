import React, { useState } from 'react';
import SelectServices from './SelectServices';


export default function BleachAndDtan() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan.jpg?alt=media&token=0cdbeeda-94d5-49ba-a58b-45c19f5c0dc0',
            serviceName: "Bleach",
            href: "/Bleach"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BleachDtan1.jpg?alt=media&token=b9ce9885-52ce-4b89-b1d5-65a4c88497da',
            serviceName: "De-Tan",
            href: "/BleachDtan"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
