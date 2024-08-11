import React from 'react'
import Layout from './Layout'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HomeTitle from './HomeTitle';

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
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log('Form submitted with values:', values);
        },
    });
    return (
        <Layout>
            <HomeTitle />
            <h1 className='text-center pt-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="100">Contect Us</h1><hr />
            <Container className=' pt-3 pb-3'>
                <Row className='mb-3 p-2'>
                    <Col md={2}></Col>
                    <Col md={8} style={{ borderRadius: '2%', backgroundColor: '#ff9fcf' }}>
                        <h1 className='text-center pb-3'>Send Us A Message</h1>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    {...formik.getFieldProps('name')}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-danger">{formik.errors.name}</div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-danger">{formik.errors.email}</div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupContact">
                                <Form.Control
                                    type="tel"
                                    placeholder="Contact"
                                    {...formik.getFieldProps('contact')}
                                />
                                {formik.touched.contact && formik.errors.contact && (
                                    <div className="text-danger">{formik.errors.contact}</div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupDescription">
                                <Form.Control
                                    style={{ height: 110 }}
                                    as="textarea"
                                    placeholder="Message"
                                    aria-label="With textarea"
                                    {...formik.getFieldProps('message')}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <div className="text-danger">{formik.errors.message}</div>
                                )}
                            </Form.Group>
                            <div className='text-center mb-3'>
                                <Button className='ps-4 pe-4 ' type="submit" disabled={formik.isSubmitting}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
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
                            title="Humanity First Indonesia"
                        />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
