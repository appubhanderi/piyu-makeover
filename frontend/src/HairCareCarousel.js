import React, { useState } from 'react'
import Img1 from './serviceImg/HairCareCarousel.jpg'
import Img2 from './serviceImg/HairCareCarousel1.jpg'
import Img3 from './serviceImg/HairCareCarousel2.jpg'
import HomeSlider from './HomeSlider'



export default function HairCareCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
