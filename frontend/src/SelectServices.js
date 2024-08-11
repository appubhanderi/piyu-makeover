import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function SelectServices(props) {
    return (
        <Container className='pt-4 pb-3'>
            <h1 className='text-center pb-3'>Select Your Services</h1><hr />
            <Row className='text-center justify-content-center pt-3'
                style={{
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                    background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                    borderRadius: '8px',
                }}>
                {props.services.map((service, index) => (
                    <Col sm={6} md={3} lg={3} key={index} className="">
                        <div className="service-card  mb-4">
                            {service && service.href && (
                                <Link to={service.href}
                                    style={{ textDecoration: 'none', color: ' rgb(2, 27, 121)' }}>
                                    <img style={{ borderRadius: '100%', width: '130px', height: '130px' }} src={service.img} alt="" />
                                    <h4 className="fs-3 fw-semibold Service mt-2">{service && service.serviceName}</h4>
                                </Link>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
