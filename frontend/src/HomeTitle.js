import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function HomeTitle() {
    return (
        <Container fluid className='HomeTitle pt-5 mt-5'>
            <Row className='pt-5 pb-5'>
                <Col className='pt-5 pb-5'>
                    <marquee className='display-1 fw-bolder  pt-md-5 pb-md-5 rainbow-text'>Piyu Makeover</marquee>
                </Col>
            </Row>
        </Container>
    )
}
