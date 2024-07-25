import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import homeImg from './image/PUMakeover (9).jpg';

export default function HomeDescription() {
    return (
        <Container className='pt-5'>
            <Row className='' style={{ overflow: 'hidden' }}>
                <Col md={6} className='p-md-4 mb-3' data-aos="zoom-out-up" data-aos-duration="3000">
                    <img src={homeImg} className='img-fluid' alt='' />
                </Col>
                <Col md={6} className='p-md-5 homepages '>
                    <h1 className='display-3 fw-bold pb-3'>WELCOME</h1>
                    <h3 className='pb-3'>TO THE BEST <br /> HAIRDRESSING SALON<br /> IN GUJRAT SURAT!</h3>
                    <p style={{ lineHeight: 2 }}>This salon, founded by three best friends Mary, Brenda and Alberta is now the Gujrat Surat’s
                        women staple for either getting a nice and beautiful hairdo, chit chatting with their favorite
                        stylist or just to feel special again. We’re proud that within just a few years after we opened
                        up our doors, the salon became so popular! In large we’re sure that our incredible, artistic and
                        tasteful stylists and our down-to-earth, non-NYC price range contributed to that fact.</p>
                </Col>
            </Row>
        </Container>
    )
}
