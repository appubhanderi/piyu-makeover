import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoMdSearch } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Layout from './Layout';
import HomeTitle from './HomeTitle';
import firebaseApp from './Firebase';

const firestore = firebaseApp.firestore();

export default function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [myWorkImg, setMyWorkImg] = useState([]);

    useEffect(() => {
        fetchMyWorkImg();
    }, []);

    const fetchMyWorkImg = () => {
        firestore.collection("MyWorkImg").get()
            .then((snapshot) => {
                const images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMyWorkImg(images);
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
                alert.error('Error fetching images: ' + error.message);
            });
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    return (
        <Layout>
            <HomeTitle />
            <Container fluid className='mb-5'>
                <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Gallery</h1>
                <hr />
                <h2 className='text-center pb-3'>My Work</h2>
                <Row className='justify-content-center gap-3 p-2'>
                    {myWorkImg.map((row) => (
                        <Col
                            xs={4} sm={3} md={3} lg={3}
                            key={row.id}
                            className='cardImg'
                            data-aos="zoom-in-up"
                            data-aos-duration="3000"
                        >
                            <div className='icon'>
                                <img
                                    src={row.imageUrl}
                                    className='img-fluid image'
                                    style={{ overflow: 'hidden' }}
                                    alt={`Hair Style ${row.id}`}
                                />
                                <div className='middle'>
                                    <div className='text'>
                                        <IoMdSearch
                                            className='display-1 text-black'
                                            onClick={() => handleImageClick(row)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body className='cartImg'>
                    {selectedImage && (
                        <img
                            src={selectedImage.imageUrl}
                            width={'100%'}
                            className="img-fluid"
                            alt="Selected Hair Style"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </Layout>
    );
}