import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseApp from './SetupFirebase';

export default function BookingSlot() {
    const [bookedDates, setBookedDates] = useState([]);

    useEffect(() => {
        fetchBookedDates();
        const interval = setInterval(() => {
            cleanupOldBookings();
        }, 60000); 

        return () => clearInterval(interval); 
    }, []);

    const fetchBookedDates = () => {
        const db = firebaseApp.firestore();
        db.collection("bookings").get()
            .then((querySnapshot) => {
                const bookings = querySnapshot.docs.map(doc => doc.data());
                setBookedDates(bookings);
            })
            .catch((error) => {
                console.error('Error fetching booked dates:', error);
                toast('Error fetching booked dates. Please try again.');
            });
    };

    const cleanupOldBookings = () => {
        const db = firebaseApp.firestore();
        const now = new Date();
        db.collection("bookings").where('date', '<', now).get()
            .then((querySnapshot) => {
                const batch = db.batch();
                querySnapshot.docs.forEach(doc => {
                    batch.delete(doc.ref);
                });
                return batch.commit();
            })
            .then(() => {
                console.log('Old bookings deleted successfully');
                fetchBookedDates(); 
            })
            .catch((error) => {
                console.error('Error deleting old bookings:', error);
                toast('Error deleting old bookings. Please try again.');
            });
    };

    return (
        <Container className='pt-2 mt-5'>
            <Row className='justify-content-end' >
                <Col md={10} >
                    <h3 className='text-center mb-5 mt-5'>BookingSlot</h3>
                    <Table className="custom-table" striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookedDates.map((row, index) => {
                                const date = row.date.seconds ? new Date(row.date.seconds * 1000) : new Date(row.date);
                                return (
                                    <tr key={index}>
                                        <td>{row.name}</td>
                                        <td>{row.contact}</td>
                                        <td>{row.service}</td>
                                        <td>{moment(date).format('LL')}</td>
                                        <td>{row.bookingSlot}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
