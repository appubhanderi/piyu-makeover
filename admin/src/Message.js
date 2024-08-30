import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import firebaseApp from './SetupFirebase';
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';

export default function Message() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetchBookedDates();
    }, []);

    const fetchBookedDates = () => {
        const db = firebaseApp.firestore();
        db.collection("Messages").get()
            .then((querySnapshot) => {
                const bookings = querySnapshot.docs.map(doc => doc.data());
                setMessage(bookings);
            })
            .catch((error) => {
                console.error('Error fetching booked dates:', error);
                toast.error('Error fetching booked dates. Please try again.');
            });
    };

    return (
        <>
            <AdminHeader />
            <Container className='pt-2 mt-5'>
                <Row className='justify-content-end'>
                    <Col md={10}>
                        <h3 className='text-center mb-5 mt-5'>Messages</h3>
                        <Table className="custom-table" striped bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {message.length > 0 ? (
                                    message.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.contact}</td>
                                            <td>{row.message}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            No messages found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
