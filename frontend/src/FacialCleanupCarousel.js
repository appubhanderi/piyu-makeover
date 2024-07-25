import { useState } from 'react'
import HomeSlider from './HomeSlider'
import Img1 from './serviceImg/FacialCleanup carousel.jpg'
import Img2 from './serviceImg/FacialCleanup carousel1.jpg'
import Img3 from './serviceImg/FacialCleanup carousel2.jpg'

export default function FacialCleanupCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
