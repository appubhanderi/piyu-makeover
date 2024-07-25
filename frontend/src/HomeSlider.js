import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider(props) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false

    };
    return (
        <>
            <Container fluid className='' style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                <Row>
                    <Col className='ClientsCarousel '>
                        <div className=" slider-container ">
                            <Slider {...settings}>
                                {props.image.map((item) => {
                                    return (
                                        <div className=''>
                                            <img src={item} className='img-fluid' width={'100%'} alt="" />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Col>
                </Row >
            </Container >
        </>
    )
}
