import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import homeImg from './image/PUMakeover (9).jpg';

export default function HomeDescription() {
    return (
        <Container className=''>
            <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Home</h1><hr />
            <Row className='' style={{ overflow: 'hidden' }}>
                <Col md={6} className='p-md-4 mb-2' data-aos="zoom-out-up" data-aos-duration="3000" >
                    <img src={homeImg} className='img-fluid'
                        style={{
                            borderRadius: '3%',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                        }} alt='' />
                </Col>
                <Col md={6} className='pt-4 mb-3 homepages'>
                    <div className='p-2'
                        style={{
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                            border: '1px solid rgb(2, 27, 121)',
                            borderRadius: '3%'
                        }}>
                        <h1 className='display-3 fw-bold pb-3'>WELCOME</h1>
                        <h3 className='pb-3'>TO THE BEST <br /> HAIRDRESSING SALON<br /> IN GUJRAT SURAT!</h3>
                        <p style={{ lineHeight: 2, color: '#333333' }} className='text-center'>This salon, founded by three best friends Mary, Brenda and Alberta is now the Gujrat Surat’s
                            women staple for either getting a nice and beautiful hairdo, chit chatting with their favorite
                            stylist or just to feel special again. We’re proud that within just a few years after we opened
                            up our doors, the salon became so popular! In large we’re sure that our incredible, artistic and
                            tasteful stylists and our down-to-earth, non-NYC price range contributed to that fact.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
