import React from 'react';
import logo from './image/PiyumakeLogo.png';
import { Col, Container, Row } from 'react-bootstrap';
import { ImCircleRight } from "react-icons/im";
import packages1 from './image/vlcc.jpg';
import packages2 from './image/Shahnaaz.jpg';
import packages3 from './image/O3.jpg';
import packages4 from './image/Loreal.jpg';
import packages5 from './image/rica.jpg';
import packages6 from './image/getloo.jpg';

export default function HomeBrands() {

    const services = [
        { img: packages1 },
        { img: packages2 },
        { img: packages3 },
        { img: packages4 },
        { img: packages5 },
        { img: packages6 },
    ];

    return (
        <Container>
            <Row className='mb-3 justify-content-center ms-1 me-1' style={{
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                borderRadius: '8px',
            }}>
                <Col md={6} className='pt-5'>
                    <h5 className='ms-4 mb-3'>Why Home Salon?</h5>
                    <ul style={{ listStyle: 'none' }}>
                        <li className='mb-1'><ImCircleRight className='me-2' />Best Brands in 1-time use packs</li>
                        <li className='mb-1'><ImCircleRight className='me-2' />Trained, Verified beauticians</li>
                        <li className='mb-1'><ImCircleRight className='me-2' />Mess Free Service</li>
                    </ul>
                </Col>
                <Col md={6} className='text-md-end'>
                    <img src={logo} alt='Logo' width={350} className="img-fluid" />
                </Col>
            </Row>
            <Row className='mb-3 justify-content-center ms-1 me-1' style={{
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                borderRadius: '8px',
            }}>
                <h5 className='text-center mt-3 mb-3'>We use the best Brands in 1-Time use packs</h5>
                {services.map((service, index) => (
                    <Col md={4} key={index} className="mb-4" data-aos="flip-up" data-aos-duration="3000">
                        <div style={{
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                            background: '#fff',
                            borderRadius: '8px',
                            height: '150px'
                        }}>
                            {service.img && (
                                <img src={service.img} alt={`Service ${index + 1}`} width={'100%'} style={{ objectFit: 'cover' }} className="img-fluid" />
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
