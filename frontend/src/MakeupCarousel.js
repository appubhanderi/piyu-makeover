import { useState } from 'react'
import HomeSlider from './HomeSlider'
import Img1 from './serviceImg/MakeupCarousel.jpg'
import Img2 from './serviceImg/MakeupCarousel1.jpg'
import Img3 from './serviceImg/MakeupCarousel2.jpg'


export default function MakeupCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
