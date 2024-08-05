import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoMdSearch } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Layout from './Layout';
import HomeTitle from './HomeTitle';
import firebaseApp from './Firebase';
import { toast } from 'react-toastify';

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
                toast.error('Error fetching images: ' + error.message);
            });
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
                        <Col md={3} key={row._id} className='cartImg rounded' data-aos="zoom-in-up" data-aos-duration="3000">
                            < div className=' icon' >
                                <img
                                    width={'100%'}
                                    src={row.imageUrl}
                                    className='img-fluid image'
                                    style={{ overflow: 'hidden' }}
                                    alt={`Hair Style ${row._id}`}
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
            </Container >
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>
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
        </Layout >
    );
}
