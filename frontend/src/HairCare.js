import React, { useState } from 'react';
import SelectServices from './SelectServices';
import HairCareCarousel from './HairCareCarousel';



export default function HairCare() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare1.jpg?alt=media&token=db9a6794-3016-4db5-852c-9123603c1dd7',
            serviceName: "Hair spa",
            href: "/HairCareSpa"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare2.jpg?alt=media&token=76f2f3fd-29e2-4dbf-a7b1-c38ab3b6d074',
            serviceName: "Hair Cut",
            href: "/HairCareCut"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare3.jpg?alt=media&token=f832baeb-2c3e-46e9-8672-731d7155e0bf',
            serviceName: "Hair Splitting",
            href: "/HairCareSplitting"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare4.jpg?alt=media&token=5ce87ee7-9bf1-4d01-b5e9-ab170afc4040',
            serviceName: "Hair Colouring",
            href: "/HairCareColouring"
        }, {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare5.jpg?alt=media&token=a7a0a849-0d7e-407e-8085-5e39e4bb3d9c',
            serviceName: "Henna Colouring",
            href: "/HairCareHennaColouring"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare6.jpg?alt=media&token=d28efcda-0ea1-4dbc-b97f-e4f8f1c38c85',
            serviceName: "Hair Highlights",
            href: "/HairCareHighlights"
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/HairCare7.jpg?alt=media&token=23c87686-6924-4a5f-abdd-47b4f559ac41',
            serviceName: "Hair Treatments",
            href: "/HairCareTreatments"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <>
            <HairCareCarousel />
            <SelectServices services={serviceArry} />
        </>
    );
}
