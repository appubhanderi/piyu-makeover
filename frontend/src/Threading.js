import React, { useState } from 'react'
import SelectServices from './SelectServices';

export default function Threading() {
    const services = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/piyu-makeover.appspot.com/o/Threading1.jpg?alt=media&token=d9aef395-925e-4c4c-b735-00defaf2bcf1',
            serviceName: "Threading",
            href: "/ThreadingPackage"
        },
    ];
    const [serviceArry, setServiceArry] = useState(services);
    return (
        <SelectServices services={serviceArry} />
    );
}
