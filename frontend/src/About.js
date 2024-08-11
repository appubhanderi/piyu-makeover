import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import About1 from './image/PUMakeover (4).jpg';
import About2 from './image/PUMakeover (6).jpg';
import About3 from './image/shutterstock_706092769.jpg';
import About4 from './image/shutterstock_751579618.jpg';
import Layout from './Layout';
import HomeTitle from './HomeTitle';

export default function About() {
    return (
        <Layout>
            <HomeTitle />
            <Container className=''>
                <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">About Us</h1><hr />
                <h3 className='text-center p-2'>Our professionals will help you to create your unique style which will take your look to the next level.</h3><hr />
                <Row className='About'>
                    <Col md={6} className='mb-3' data-aos="flip-left" data-aos-duration="2000">
                        <img src={About1} className='img-fluid' width={'100%'} style={{ borderRadius: '3%' }} alt='' />
                    </Col>
                    <Col md={6} className='mb-3' data-aos="flip-right" data-aos-duration="2000">
                        <div className='p-2' style={{ border: '1px solid rgb(2, 27, 121)', borderRadius: '3%' }}>
                            <h1>Our Story</h1>
                            <h5 className='fs-5 pt-3 pb-3'>TRADITIONAL BRIDAL MAKEUP: A GLIMPSE OF SURAT BEAUTY</h5>
                            <p style={{ lineHeight: 2, color: '#333333' }}>Wedding period is the most important day in a brides life.
                                All the dreams which she thoughts in her mind regarding her marriage are going to fulfil.
                                So, on this day she has to look far beyond gorgeous just like a princess!
                                The most important part of the wedding is the bridal makeup.</p>
                        </div>
                    </Col>
                    <Col md={6} className='mb-3' id='box-1' data-aos="flip-left" data-aos-duration="2000">
                        <div className='p-2' style={{ border: '1px solid rgb(2, 27, 121)', borderRadius: '3%' }}>
                            <h1>Our Mission</h1>
                            <h5 className='fs-5 pt-3 pb-3'>TRADITIONAL BRIDAL MAKEUP: A GLIMPSE OF SURAT BEAUTY</h5>
                            <p style={{ lineHeight: 2, color: '#333333' }}>Every bride dreams of looking absolutely radiant on her wedding day,
                                and choosing the perfect hairstyle is an essential part of creating that magical look.
                                Your bridal hairdo demands as much consideration as your bridal lehenga or makeup.
                                From classic updos to romantic curls, braids, and intricate accessories,
                                there are countless options to explore and personalize that will earn you the praise of everyone on your wedding day..</p>
                        </div>
                    </Col>
                    <Col md={6} className='mb-3' id='box-2' data-aos="flip-right" data-aos-duration="2000">
                        <img src={About2} className='img-fluid' width={'100%'} style={{ borderRadius: '3%' }} alt='' />
                    </Col>
                </Row>
                <Row className='About'>
                    <Col md={6} className='mb-3' data-aos="flip-left" data-aos-duration="2000" >
                        <img src={About3} className='img-fluid' width={'100%'} style={{ borderRadius: '3%' }} alt='' />
                    </Col>
                    <Col md={6} className='mb-3' data-aos="flip-right" data-aos-duration="2000">
                        <div className='p-2' style={{ border: '1px solid rgb(2, 27, 121)', borderRadius: '3%' }}>
                            <h1>Our Story</h1>
                            <h5 className='fs-5 pt-3 pb-3'>TRADITIONAL BRIDAL MAKEUP: A GLIMPSE OF SURAT BEAUTY</h5>
                            <p style={{ lineHeight: 2, color: '#333333' }}>Bridal makeup is no easy deal. Two things need to be on point to make sure to get a bride’s makeup perfect. Firstly,
                                the bride should be happy from inside, so that the natural glow is visible and when the makeup is applied then the face can be more vibrant and beautiful. .
                                Secondly, the makeup itself should be done by the professional who understands what suits the bride best.</p>
                        </div>
                    </Col>
                    <Col md={6} className='mb-3' id='box-3' data-aos="flip-left" data-aos-duration="2000">
                        <div className='p-2' style={{ border: '1px solid rgb(2, 27, 121)', borderRadius: '3%' }}>
                            <h1>Our Mission</h1>
                            <h5 className='fs-5 pt-3 pb-3'>TRADITIONAL BRIDAL MAKEUP: A GLIMPSE OF SURAT BEAUTY</h5>
                            <p style={{ lineHeight: 2, color: '#333333' }}>We understand that every bride is unique, and that's why we're committed to providing a diverse range of
                                hairstyle ideas that cater to different hair types, lengths, and personal preferences. Whether you have long,
                                flowing locks, a chic bob, or an elegant pixie cut, we have suggestions that will help you enhance your natural beauty and express your individuality.
                                So, to make your search easier, we have divided this blog into 3 sections, i.e. South Indian Bridal Hairstyles,
                                Bridal Hairstyles for Long Hair and Bridal Hairstyles for Short Hair.</p>
                        </div>
                    </Col>
                    <Col md={6} className='mb-3' id='box-4' data-aos="flip-right" data-aos-duration="2000">
                        <img src={About4} className='img-fluid' width={'100%'} style={{ borderRadius: '3%' }} alt='' />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
