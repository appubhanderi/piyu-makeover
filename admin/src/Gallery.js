import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AdminHeader from './AdminHeader';
import { toast } from 'react-toastify';

export default function Gallery() {
    const [myWorkImg, setMyWorkImg] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    useEffect(() => {
        fetchMyWorkImg();
    }, []);

    const fetchMyWorkImg = async () => {
        axios.get('http://localhost:5000/MyWorkImg/get')
            .then((response) => {
                setMyWorkImg(response.data);
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
                alert('Error fetching images: ' + error.message);
            });
    };
    const removeFromGallery = () => {
        axios.post('http://localhost:5000/MyWorkImg/delete', { productId: deleteId })
            .then((response) => {
                fetchMyWorkImg();
                toast('Image removed successfully');
                handleCloseModal();
            })
            .catch((error) => {
                console.error("Error removing image: ", error);
                toast('Error removing image: ' + error.message);
            });
    };

    return (
        <>
            <AdminHeader />
            <Container className='pt-2 mt-5'>
                <Row className='justify-content-end'>
                    <Col md={10}>
                        <h3 className='text-center mb-5 mt-5'>Image Gallery</h3>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myWorkImg.map((row) => (
                                    <tr key={row._id}>
                                        <td>
                                            <img src={row.image} alt="Gallery" style={{ width: '100px', height: 'auto' }} />
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleShowModal(row._id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            {/* Modal for confirmation */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this image?</p>
                    {deleteId && (
                        <img src={myWorkImg.find(item => item._id === deleteId)?.image} alt="Gallery" style={{ width: '100px', height: 'auto' }} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={removeFromGallery}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
