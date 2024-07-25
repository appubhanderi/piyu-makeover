import { useState } from 'react'
import HomeSlider from './HomeSlider'
import Img1 from './serviceImg/BleachDtanCarousel1.jpg'
import Img2 from './serviceImg/BleachDtanCarousel2.jpg'
import Img3 from './serviceImg/BleachDtanCarousel3.jpg'

export default function BleachDtanCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
