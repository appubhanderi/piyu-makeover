import React, { useState } from 'react';
import SelectServices from './SelectServices';



export default function BridalMakeup() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup.jpg?alt=media&token=e400aeec-a7c7-49b3-aed2-f660f36da891',
            serviceName: "Bridal Makeup",
            href: "/BridalMakeups"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/BridalMakeup1.jpg?alt=media&token=a2d04f16-8656-4169-8012-671181c8dc2e',
            serviceName: "Luxury Bridal Makeup",
            href: "/BridalMakeupLuxury"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
