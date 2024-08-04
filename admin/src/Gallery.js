import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table, Modal } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import firebaseApp from './SetupFirebase';
import { toast } from 'react-toastify';

const firestore = firebaseApp.firestore();

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


    const removeFromGallery = () => {
        const db = firebaseApp.firestore();
        db.collection("MyWorkImg").where("id", "==", Number(deleteId))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    db.collection("MyWorkImg").doc(doc.id).delete()
                        .then(() => {
                            console.log("Document successfully deleted!");
                            toast('Delete Successful');
                            fetchMyWorkImg();
                            handleCloseModal()
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });

                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
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
                                    <tr key={row.id}>
                                        <td>
                                            <img src={row.imageUrl} alt="Gallery" style={{ width: '100px', height: 'auto' }} />
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleShowModal(row.id)}>Delete</Button>
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
                        <img src={myWorkImg.find(item => item.id === deleteId)?.imageUrl} alt="Gallery" style={{ width: '100px', height: 'auto' }} />
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
