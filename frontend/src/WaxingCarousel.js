import HomeSlider from './HomeSlider'
import { useState } from 'react'
import Img1 from './serviceImg/Waxing carousel.jpg'
import Img2 from './serviceImg/Waxing carousel1.jpg'
import Img3 from './serviceImg/Waxing carousel2.jpg'

export default function WaxingCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )

}
