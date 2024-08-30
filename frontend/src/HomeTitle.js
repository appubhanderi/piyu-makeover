import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import firebaseApp from './Firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you import CSS for react-toastify

export default function HomeTitle() {
    const [festivalOffer, setFestivalOffer] = useState([]);

    useEffect(() => {
        fetchMyOffer();
    }, []);

    const fetchMyOffer = () => {
        const db = firebaseApp.firestore();
        db.collection("Offer").get()
            .then((snapshot) => {
                const offers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setFestivalOffer(offers);
            })
            .catch((error) => {
                console.error('Error fetching offers:', error);
                toast.error('Error fetching offers: ' + error.message);
            });
    };

    return (
        <>
            <ToastContainer />
            <Container fluid className='HomeTitle pt-5 mt-5'>
                <Row className='pt-5 pb-5'>
                    <Col className='pt-5 pb-5'>
                        <marquee className='display-1 fw-bolder  pt-md-5 pb-md-5 rainbow-text'>Piyu Makeover</marquee>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className='justify-content-center '>
                    {festivalOffer.length > 0 ? (
                        festivalOffer.map((offer, index) => (
                            <Col key={offer.id} md={12} className='offer  text-center'>
                                <marquee
                                    direction={index % 2 === 0 ? "right" : "left"}
                                    className='offer-text fs-1 pt-2 pb-2'
                                >
                                    {offer.festivalOption}  Offer: {offer.festival}
                                </marquee>
                            </Col>
                        ))
                    ) : (
                        <Col className='text-center'>
                            <p>No offers available at the moment.</p>
                        </Col>
                    )}
                </Row>

            </Container>
        </>
    );
}
