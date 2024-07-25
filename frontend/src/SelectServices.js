import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function SelectServices(props) {
    return (
        <Container className='pt-4 '>
            <h1 className='text-center pb-3'>Select Your Services</h1><hr />
            <Row className=' text-center justify-content-center'>
                {props.services.map((service, index) => (
                    <Col md={3} key={index} className="pb-3">
                        <div className="d-block mb-4 ">
                            {service && service.href && (
                                <Link to={service.href} style={{ textDecoration: 'none ', color: 'black' }}>
                                    <img style={{ borderRadius: '100%', width: '130px', height: '130px' }} src={service.img} alt="" />
                                    <h4 className="fs-3 fw-semibold Service  mt-2">{service && service.serviceName}</h4>
                                </Link>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

