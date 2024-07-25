import React, { useEffect, useState } from 'react'
import { Table, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import axios from 'axios';

export default function BookingSlot() {
    const [bookedDates, setBookedDates] = useState([]);
    useEffect(() => {
        fetchBookedDates();
    }, []);

    const fetchBookedDates = async () => {
        axios.get('http://localhost:5000/PiyuMakeoverUser/getBooking')
            .then((response) => {
                setBookedDates(response.data);
            })
            .catch((error) => {
                console.error('Error fetching booked dates:', error);
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
                            {bookedDates.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.contact}</td>
                                    <td>{row.service}</td>
                                    <td>{moment(row.date).format('LL')}</td>
                                    <td>{row.bookingSlot}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}
