import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import logo from './image/Piyu(3).png';
import './Loginpage.css';
import { Navbar, Image, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: 'kajal.bhanderi@gmail.com',
            password: '12345678',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            if (values.email === 'kajal.bhanderi@gmail.com' && values.password === '12345678') {
                // Store the email in local storage
                localStorage.setItem('userEmail', values.email);
                navigate('/AdminHome');
                toast('Login Successful');
            } else {
                alert('Invalid login credentials');
            }
        },
    });

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="Header_nav fixed-top mb-5 ">
                <Image src={logo} width={180} style={{ borderRadius: 5 }} alt='Logo' className='ms-4 nav-link' />
            </Navbar>

            <Container className='d-flex justify-content-center'>
                <form className='loginpage' style={{ width: 500 }} onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`form-control mt-2 ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={`form-control mt-2 ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="btn btn-primary me-2" disabled={formik.isSubmitting}>Submit</button>
                </form>
            </Container>
        </>
    );
};
