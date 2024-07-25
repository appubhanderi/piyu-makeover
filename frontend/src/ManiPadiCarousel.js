import { useState } from 'react'
import Img1 from './serviceImg/Mani-Padi carousel1.jpg'
import Img2 from './serviceImg/Mani-Padi carousel2.jpg'
import Img3 from './serviceImg/Mani-Padi carousel3.jpg'
import HomeSlider from './HomeSlider'

export default function ManiPadiCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
