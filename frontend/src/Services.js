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
            <Container className='HomeService pb-3 pe-4 ps-4'>
                <Row className='services ' style={{
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                    background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                    borderRadius: '8px',
                }}>
                    <h4 className='display-3 fw-bold text-center mt-2'>Welcome To Piyu Makeover</h4>
                    <h1 className='mb-2 text-center'>At Home In Surat</h1>
                    <hr />
                    {services.map((service, index) => (
                        <Col key={index} xs={6} sm={4} md={4} lg={3} className="text-center m-auto services1">
                            <div className="mb-3">
                                <Link className='nav-link active' to={service.link}>
                                    <img src={service.img} style={{ borderRadius: '100%', width: '130px', height: '130px', objectFit: 'cover', }} alt='' />
                                    <h4 className="fs-3 fw-semibold mt-2">{service.name}</h4>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </Layout>
    );
}
