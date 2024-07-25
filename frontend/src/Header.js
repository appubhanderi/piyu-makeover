import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import logo from './image/Piyu(3).png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function Header() {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [disabledDates, setDisabledDates] = useState([]);
    const [isPaymentComplete, setIsPaymentComplete] = useState(false);
    const allowedTimes = ['6:00 am', '9:00 am', '12:00 pm', '3:00 pm', '6:00 pm'];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchBookedDates();
        loadRazorpayScript();
    }, []);

    useEffect(() => {
        updateDisabledDates();
    }, [bookedDates]);

    const loadRazorpayScript = () => {
        if (document.getElementById('razorpay-script')) return;

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.id = 'razorpay-script';
        script.onload = () => console.log('Razorpay script loaded');
        document.body.appendChild(script);
    };

    const fetchBookedDates = () => {
        axios.get('http://localhost:5000/PiyuMakeoverUser/getBooking')
            .then((response) => {
                setBookedDates(response.data);
            })
            .catch((error) => {
                console.error('Error fetching booked dates:', error);
            });
    };

    const updateDisabledDates = () => {
        const bookedDatesWithAllSlots = bookedDates.reduce((acc, date) => {
            const dateStr = new Date(date.date).toDateString();
            if (!acc[dateStr]) {
                acc[dateStr] = [];
            }
            acc[dateStr].push(date.bookingSlot);
            return acc;
        }, {});

        const allDatesWithAllSlotsBooked = Object.keys(bookedDatesWithAllSlots).filter(dateStr =>
            allowedTimes.every(slot => bookedDatesWithAllSlots[dateStr].includes(slot))
        );

        setDisabledDates(allDatesWithAllSlotsBooked.map(dateStr => new Date(dateStr)));
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            contact: '',
            service: '',
            date: '',
            bookingSlot: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            contact: Yup.string()
                .required('Required')
                .matches(/^[0-9]{10}$/, 'Invalid contact number'),
            service: Yup.string().required('Select a service'),
            date: Yup.date().required('Select a date'),
        }),
        onSubmit: (values) => {
            if (!isPaymentComplete) {
                toast.error('Please complete the payment first.');
                return;
            }

            const alreadyBooked = bookedDates.some(
                (date) => new Date(date.date).toDateString() === new Date(values.date).toDateString() && date.bookingSlot === values.bookingSlot
            );

            if (alreadyBooked) {
                toast('You have already booked an appointment. Please contact us to reschedule or cancel your existing appointment.');
                formik.resetForm();
            } else {
                axios.post('http://localhost:5000/PiyuMakeoverUser/book', values)
                    .then((response) => {
                        formik.resetForm();
                        handleClose();
                        fetchBookedDates();
                        toast('Booking Successful');
                    })
                    .catch((error) => {
                        console.error('Error submitting form:', error);
                        toast.error('Failed to book appointment. Please try again.');
                    });
            }
        },
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
        formik.setFieldValue('date', date);
        formik.setFieldValue('bookingSlot', ''); // Reset time slot when date changes
    };

    const isBooked = (date, slot) => {
        if (!date) return false;
        return bookedDates.some(
            (bookedDate) => new Date(bookedDate.date).toDateString() === date.toDateString() && bookedDate.bookingSlot === slot
        );
    };

    const isPastTimeSlot = (date, slot) => {
        if (!date) return false;
        const currentDate = new Date();
        const selectedDateTime = new Date(date);
        const [hours, minutesPeriod] = slot.split(':');
        const [minutes, period] = minutesPeriod.split(' ');
        let hours24 = parseInt(hours, 10);
        if (period === 'pm' && hours24 !== 12) {
            hours24 += 12;
        } else if (period === 'am' && hours24 === 12) {
            hours24 = 0;
        }
        selectedDateTime.setHours(hours24, parseInt(minutes, 10));

        return selectedDateTime <= currentDate;
    };

    const handleTimeChange = (time) => {
        formik.setFieldValue('bookingSlot', time);
    };

    const handlePayment = () => {
        const options = {
            key: 'rzp_test_7A8QRG48dXg1Qi', 
            amount: 100 * 100, 
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Booking Payment',
            handler: function (response) {
              
                setIsPaymentComplete(true);
                toast.success('Payment successful. You can now confirm your booking.');
            },
            prefill: {
                name: formik.values.name,
                email: '', 
                contact: formik.values.contact
            },
            theme: {
                color: '#3399cc'
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <>
            <ToastContainer />
            <Navbar collapseOnSelect expand="lg" className="bg-white Header_nav fixed-top">
                <Container>
                    <Link className='nav-link active pe-3' to='/'>
                        <Image src={logo} width={180} style={{ borderRadius: 5 }} alt='Logo' />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav m-auto">
                            <Link className='nav-link active' to='/about'>ABOUT</Link>
                            <Link className='nav-link active' to='/services'>SERVICES</Link>
                            <Link className='nav-link active' to='/gallery'>GALLERY</Link>
                            <Link className='nav-link active' to='/testimonials'>TESTIMONIALS</Link>
                            <Link className='nav-link active' to='/contact'>CONTACT</Link>
                        </Nav>
                        <Nav>
                            <Button className='btn btn-danger' style={{ width: 120 }} onClick={handleShow}>
                                Appointment
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='m-auto' onSubmit={formik.handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="invalid-feedback">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input
                                id="contact"
                                name="contact"
                                type="tel"
                                className={`form-control ${formik.touched.contact && formik.errors.contact ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.contact}
                            />
                            {formik.touched.contact && formik.errors.contact ? (
                                <div className="invalid-feedback">{formik.errors.contact}</div>
                            ) : null}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="service" className="form-label">Select a Service</label>
                            <select
                                id="service"
                                name="service"
                                className={`form-control ${formik.touched.service && formik.errors.service ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.service}
                            >
                                <option value="">Select a Service</option>
                                <option value="Facial & Cleanup">Facial & Cleanup</option>
                                <option value="Bleach & D-Tan">Bleach & D-Tan</option>
                                <option value="Mani-Padi">Mani-Padi</option>
                                <option value="Waxing">Waxing</option>
                                <option value="Hair Care">Hair Care</option>
                                <option value="Threading">Threading</option>
                                <option value="Makeup">Makeup</option>
                                <option value="Pre-Bridal">Pre-Bridal</option>
                                <option value="Bridal Makeup">Bridal Makeup</option>
                                <option value="Hair Style">Hair Style</option>
                            </select>
                            {formik.touched.service && formik.errors.service ? (
                                <div className="invalid-feedback">{formik.errors.service}</div>
                            ) : null}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="date" className="form-label">Select a Date</label>
                            <div className="mb-2 d-flex justify-content-center">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => handleDateChange(date)}
                                    inline
                                    className="datePicker form-control"
                                    disabledKeyboardNavigation
                                    excludeDates={disabledDates}
                                    minDate={new Date()}
                                />
                                {formik.touched.date && formik.errors.date ? (
                                    <div className="invalid-feedback">{formik.errors.date}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="bookingSlot" className="form-label">Select a Time Slot</label>
                            <div className="mb-2 row justify-content-center ms-auto">
                                <div className='ms-auto '>
                                    {allowedTimes.map((time) => (
                                        <Button
                                            className='ms-3 mb-3'
                                            key={time}
                                            variant={time === formik.values.bookingSlot ? 'success' : 'outline-success'}
                                            onClick={() => handleTimeChange(time)}
                                            disabled={!selectedDate || isBooked(selectedDate, time) || isPastTimeSlot(selectedDate, time)}
                                        >
                                            {time}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary me-2" onClick={handlePayment}>Pay & Book</button>
                        <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>Close</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
