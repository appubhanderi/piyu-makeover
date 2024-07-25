import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { IoMdSearch } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Layout from './Layout';
import HomeTitle from './HomeTitle';

export default function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [myWorkImg, setMyWorkImg] = useState([]);

    useEffect(() => {
        fetchMyWorkImg();
    }, []);

    const fetchMyWorkImg = async () => {
        try {
            const response = await axios.get('http://localhost:5000/MyWorkImg/get');
            setMyWorkImg(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            alert('Error fetching images: ' + error.message);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    return (
        <Layout>
            <HomeTitle />
            <Container className='mb-5'>
                <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Gallery</h1>
                <hr />
                <h2 className='text-center pb-3'>My Work</h2>
                <Row className='justify-content-center gap-4 p-3'>
                    {myWorkImg.map((row) => (
                        <Col md={3} key={row._id} className='cartImg rounded'>
                            <div className=' icon'>
                                <img
                                    width={'100%'}
                                    src={row.image}
                                    className='img-fluid image'
                                    style={{ overflow: 'hidden' }}
                                    alt={`Hair Style ${row._id}`}
                                />
                                <div className='middle'>
                                    <div className='text'>
                                        <IoMdSearch
                                            className='display-1 text-black'
                                            onClick={() => handleImageClick(row.image)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
                    <img src={selectedImage} width={'100%'} className="img-fluid" alt="Selected Hair Style" />
                </Modal.Body>
            </Modal>
        </Layout>
    );
}
