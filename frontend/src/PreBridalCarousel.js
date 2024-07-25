import { useState } from 'react'
import HomeSlider from './HomeSlider'
import Img1 from './serviceImg/PreBridalCarousel.jpg'
import Img2 from './serviceImg/PreBridalCarousel1.jpg'
import Img3 from './serviceImg/PreBridalCarousel2.jpg'

export default function PreBridalCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
