import React, { useState } from 'react';
import SelectServices from './SelectServices';


export default function FacialAndCleanup() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup.jpg?alt=media&token=7fe96b7d-465e-44d7-b856-3665de2971e6',
            serviceName: "All Skin Facial",
            href: "/FacialAllSkin"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup1.jpg?alt=media&token=85fce96f-1811-47a2-84be-ee3ba6f7efa4',
            serviceName: "Dry Skin Facial",
            href: "/FacialDrySkin"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup2.jpg?alt=media&token=b23fb1aa-96dc-4c4c-9fb4-ea5f7ec4d172',
            serviceName: "Oily Skin Facial",
            href: "/FacialOilySkin"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/FacialCleanup4.jpg?alt=media&token=0fdea4dc-64c3-43b1-80e4-1e33ad8c18b6',
            serviceName: "Cleanup",
            href: "/FacialCleanup "
        }
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
