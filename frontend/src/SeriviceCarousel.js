import { useState } from 'react';
import HomeSlider from './HomeSlider';
import Img1 from './image/slide1.png'
import Img2 from './image/slide2.png'
import Img3 from './image/slide3.png'
import Img4 from './image/slide4.png'

export default function SeriviceCarousel() {
    const [imgArry, setImgArry] = useState([Img1, Img2, Img3, Img4])
    return (
        <HomeSlider image={imgArry} />
    )
}
