import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Image, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './image/Piyu(3).png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebaseApp from './Firebase';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { toast } from 'react-toastify';

export default function Header() {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [disabledDates, setDisabledDates] = useState([]);
    const allowedTimes = ['6:00 am', '9:00 am', '12:00 pm', '3:00 pm', '6:00 pm'];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchBookedDates();
    }, []);

    const fetchBookedDates = () => {
        const db = firebaseApp.firestore();
        db.collection("Bookings").get()
            .then((querySnapshot) => {
                const bookings = querySnapshot.docs.map(doc => doc.data());
                setBookedDates(bookings);
                updateDisabledDates(bookings);
            })
            .catch((error) => {
                console.error('Error fetching booked dates:', error);
                toast.error('Error fetching booked dates. Please try again.');
            });
    };

    const updateDisabledDates = (bookings) => {
        const bookedDatesWithSlots = bookings.reduce((acc, booking) => {
            const dateStr = new Date(booking.date.seconds * 1000).toDateString();
            if (!acc[dateStr]) {
                acc[dateStr] = [];
            }
            acc[dateStr].push(booking.bookingSlot);
            return acc;
        }, {});

        const allDatesWithAllSlotsBooked = Object.keys(bookedDatesWithSlots).filter(dateStr =>
            allowedTimes.every(slot => bookedDatesWithSlots[dateStr].includes(slot))
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
            bookingSlot: Yup.string().required('Select a time slot'),
        }),
        onSubmit: (values) => {
            const alreadyBooked = bookedDates.some(
                (date) => new Date(date.date.seconds * 1000).toDateString() === new Date(values.date).toDateString() && date.bookingSlot === values.bookingSlot
            );

            if (alreadyBooked) {
                toast.error('You have already booked an appointment. Please contact us to reschedule or cancel your existing appointment.');
                formik.resetForm();
            } else {
                const db = firebaseApp.firestore();
                db.collection("Bookings").add({
                    name: values.name,
                    contact: values.contact,
                    service: values.service,
                    date: values.date,
                    bookingSlot: values.bookingSlot,
                })
                    .then(() => {
                        formik.resetForm();
                        fetchBookedDates();
                        handleClose();
                        toast('Booking Successful');
                        sendWhatsappMessage(values);
                    })
                    .catch((error) => {
                        console.error('Error submitting form:', error);
                        toast('Failed to book appointment. Please try again.');
                    });
            }
        },
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
        formik.setFieldValue('date', date);
        formik.setFieldValue('bookingSlot', '');
    };

    const isBooked = (date, slot) => {
        if (!date) return false;
        return bookedDates.some(
            (bookedDate) => new Date(bookedDate.date.seconds * 1000).toDateString() === date.toDateString() && bookedDate.bookingSlot === slot
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


    const sendWhatsappMessage = (values) => {
        const num = '+91' + 8980591955;
        const msg = `Hello, Kajal Bhanderi. %0a%0a  Name: ${values.name} %0a%0a Contact: ${values.contact}
         %0a%0a Service: ${values.service} %0a%0a Date: ${values.date} %0a%0a Time: ${values.bookingSlot}`;
        window.open(`https://wa.me/${num}?text=${msg}`, '_blank').focus();
    };

    const sendWhatsapp = () => {
        const num = '+91' + 8980591955;
        const msg = `Hello, Kajal Bhanderi. `;
        window.open(`https://wa.me/${num}?text=${msg}`, '_blank').focus();
    };


    return (
        <>
            <FaSquareWhatsapp className='display-3 fixed-bottom ms-auto mb-3 me-3'
                style={{ color: 'green', cursor: 'pointer' }} onClick={sendWhatsapp} />
            <Navbar collapseOnSelect expand="lg" className="fixed-top"
                style={{
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                    background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                }}>
                <Container style={{ overflow: 'hidden' }}>
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
                            <Button
                                className='btn btn-danger btnAppointment'
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #0575E6 0%, #021B79 51%, #0575E6 100%)',
                                    transition: '0.5s',
                                    backgroundSize: '200% auto',
                                    maxWidth: '120px'
                                }} onClick={handleShow}  >
                                Appointment
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{
                    background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                }}>
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
                        <div className="mb-2 d-md-flex">
                            <label htmlFor="date" className="form-label me-3">Select a Date</label>
                            <DatePicker
                                placeholderText='Select a Date'
                                selected={selectedDate}
                                showIcon
                                toggleCalendarOnIconClick
                                onChange={(date) => handleDateChange(date)}
                                className="datePicker form-control mt-1"
                                disabledKeyboardNavigation
                                excludeDates={disabledDates}
                                minDate={new Date()}
                            />
                            {formik.touched.date && formik.errors.date ? (
                                <div className="invalid-feedback">{formik.errors.date}</div>
                            ) : null}
                        </div>
                        <div className="mb-2 ">
                            <label htmlFor="bookingSlot" className="form-label">Select a Time Slot</label>
                            <div className='text-center '>
                                {allowedTimes.map((time) => (
                                    <Button
                                        key={time}
                                        className={`ms-1 mb-3  ${time === formik.values.bookingSlot ? '' : 'bookBtn'}`}
                                        onClick={() => handleTimeChange(time)}
                                        disabled={isBooked(selectedDate, time) || isPastTimeSlot(selectedDate, time)}
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">Book Now</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
