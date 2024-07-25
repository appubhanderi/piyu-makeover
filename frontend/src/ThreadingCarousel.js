import { useState } from 'react'
import Img1 from './serviceImg/ThreadingCarousel.jpg'
import Img2 from './serviceImg/ThreadingCarousel1.jpg'
import Img3 from './serviceImg/ThreadingCarousel2.jpg'
import HomeSlider from './HomeSlider'

export default function ThreadingCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3])
    return (
        <>
            <div className='pt-5 mt-5'></div>
            <HomeSlider image={imgArry} />
        </>
    )
}
