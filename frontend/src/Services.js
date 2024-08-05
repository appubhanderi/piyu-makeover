import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import packages2 from './image/packages-2.jpg';
import packages3 from './image/packages-3.jpg';
import packages4 from './image/packages-4.jpg';
import packages5 from './image/packages-5.jpg';
import packages6 from './image/packages-6.jpg';
import packages7 from './image/packages-9.jpg';
import packages8 from './image/packages-7.jpg';
import packages9 from './image/packages-8.jpg';
import packages10 from './image/packages-10.jpg';
import packages11 from './hairstyle/Hair Style-93.jpg';
import Layout from './Layout';
import HomeTitle from './HomeTitle';

export default function Services() {
    const services = [
        { img: packages2, name: 'Facial & Cleanup', link: '/facialCleanupHome' },
        { img: packages3, name: 'Bleach & D-Tan', link: '/bleachDtanHome' },
        { img: packages4, name: 'Mani-Padi', link: '/maniPadiHome' },
        { img: packages5, name: 'Waxing', link: '/waxingHome' },
        { img: packages6, name: 'Hair Care', link: '/hairCareHome' },
        { img: packages7, name: 'Threading', link: '/ThreadingHome' },
        { img: packages8, name: 'Makeup', link: '/MakeupHome' },
        { img: packages9, name: 'Pre-Bridal', link: '/PreBridalHome' },
        { img: packages10, name: 'Bridal Makeup', link: '/BridalMakeupHome' },
        { img: packages11, name: 'Hair Style', link: '/HairStyleHome' },
    ];

    return (
        <Layout>
            <HomeTitle />
            <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Services</h1><hr />
            <Container className='HomeService mb-4 mt-4' style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <Row>
                    <h4 className='display-3 fw-bold text-center p-2'>Welcome To Piyu Makeover</h4>
                    <h1 className='pb-3 text-center'>At Home In Surat</h1>
                    <hr />
                    {services.map((service, index) => (
                        <Col key={index} md={3} sm={4} className="pb-3 mb-lg-0 text-center">
                            <div className=" mb-2">
                                <Link className=' nav-link active pe-3' to={service.link}>
                                    <img src={service.img} style={{ borderRadius: '100%', width: '130px', height: '130px' }} alt='' />
                                <h4 className="fs-3 fw-semibold">{service.name}</h4>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}
