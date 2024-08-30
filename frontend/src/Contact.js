import React from 'react';
import Layout from './Layout';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HomeTitle from './HomeTitle';
import firebaseApp from './Firebase';
import { toast } from 'react-toastify';

const firestore = firebaseApp.firestore();

const MapStyle = {
    width: "100%",
    height: 500
};

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string().required('Contact is required'),
    message: Yup.string().required('Message is required'),
});

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            firestore.collection("Messages").add({
                name: values.name,
                email: values.email,
                contact: values.contact,
                message: values.message,
            })
                .then(() => {
                    console.log('Form submitted successfully with values:', values);
                    resetForm();
                    toast('Your message has been sent successfully!');
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                    toast('There was an error submitting your message. Please try again later.');
                });
        },
    });

    return (
        <Layout>
            <HomeTitle />
            <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Contact Us</h1><hr />
            <Container className='pt-3 pb-3'>
                <Row className='mb-3 p-2'>
                    <Col md={2}></Col>
                    <Col md={8} style={{ borderRadius: '2%', backgroundColor: '#ff9fcf' }}>
                        <h1 className='text-center pb-3'>Send Us A Message</h1>
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
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="invalid-feedback">{formik.errors.email}</div>
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
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    rows={4}
                                />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="invalid-feedback">{formik.errors.message}</div>
                                ) : null}
                            </div>
                            <div className='text-center mb-2'>
                                <button type="submit" className="btn btn-primary">Book Now</button>
                            </div>
                        </form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={12} style={{ borderRadius: '2%' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8844.445967660067!2d72.85483256446527!3d21.246458191113543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1720334427051!5m2!1sen!2sin"
                            width={MapStyle.width}
                            height={MapStyle.height}
                            style={{ border: 2 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Map"
                        />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
