import React, { useState } from 'react';
import SelectServices from './SelectServices';


export default function PreBridal() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal.jpg?alt=media&token=b7e89c29-b80d-46f2-85ad-5b533936101b',
            serviceName: "Premium Sitting",
            href: "/PreBridalPremiumSitting"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/PreBridal1.jpg?alt=media&token=9457f489-982e-49bb-a4c9-5b675db382df',
            serviceName: "Pre-Bridal Grooming",
            href: "/PreBridalGrooming"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
