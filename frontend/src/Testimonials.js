import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from './image/image-1.jpg'
import Img2 from './image/image-2.jpg'
import Img3 from './image/image-3.jpg'
import Layout from './Layout';
import HomeTitle from './HomeTitle';

export default function Testimonials() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false

    };

    return (
        <Layout>
            <HomeTitle />
            <Container fluid className='Clients pt-3 pb-5 HomeCarousel' style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                <h1 className='text-center ' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Our Testimonial</h1><hr />
                <h4 className=' fs-2 text-center'>Our Client</h4>
                <Row className='pt-3'>
                    <Col className='ClientsCarousel '>
                        <div className=" slider-container">
                            <Slider {...settings}>
                                <div className='text-center homeCarousel'>
                                    <img src={Img1} className='m-auto' alt="" />
                                    <p className='text-body-tertiary p-md-5'>
                                        A happy client. Your go to salon and  its no exaggeration! The beautician came from home salon was very gentle,
                                        patient and gave required time for each of the services. After the session i felt fully recharged and pampered.
                                        The products they use are of good quality and the beautician is well experienced.
                                        The best part was beautician was not in hurry and did everything perfectly. Will highly recommend it!
                                    </p>
                                    <div className='d-flex  justify-content-center gap-3 '>
                                        <strong class="testimonial-name">Yuvika Negi</strong>
                                        <span class="testimonial-position">Cosmetologist</span>
                                    </div>
                                </div>
                                <div className='text-center homeCarousel'>
                                    <img src={Img2} className='m-auto' alt="" />
                                    <p className='text-body-tertiary p-md-5'>My experience  was super, considering  this as my first booking with HOME SALON.
                                        I liked it so much, that I would definitely  book my services  with the same salon. Also they are so cost effective,
                                        and have such good packages. Also they made some changes in the services. as listed in there existing package,
                                        which shows how flexible they are..</p>
                                    <div className='d-flex  justify-content-center gap-3 '>
                                        <strong class="testimonial-name">Roopa Shah</strong>
                                        <span class="testimonial-position">Biologist</span>
                                    </div>
                                </div>
                                <div className='text-center homeCarousel'>
                                    <img src={Img3} className='m-auto' alt="" />
                                    <p className='text-body-tertiary p-md-5'>I received a tension free good service from HOME SALON. Booking was through WhatsApp
                                        and the staff were courteous. Overall seamless experience at the comfort of my home.
                                        I will definitely recommend their service for others too.</p>
                                    <div className='d-flex  justify-content-center gap-3 '>
                                        <strong class="testimonial-name">Sweta Dhawan</strong>
                                        <span class="testimonial-position">Housewife</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
