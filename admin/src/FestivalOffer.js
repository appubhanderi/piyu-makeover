import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import firebaseApp from './SetupFirebase';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from './AdminHeader';

export default function FestivalOffer() {
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

    const formik = useFormik({
        initialValues: {
            festival: '',
            festivalOption: '',
        },
        validationSchema: Yup.object({
            festivalOption: Yup.string()
                .required('Festival option is required'),
            festival: Yup.string()
                .required('Festival offer is required'),
        }),
        onSubmit: (values) => {
            const db = firebaseApp.firestore();
            db.collection("Offer").add({
                festivalOption: values.festivalOption,
                festival: values.festival,
            })
                .then(() => {
                    formik.resetForm();
                    toast.success('Offer submitted successfully');
                    fetchMyOffer(); // Refresh the list after adding a new offer
                })
                .catch((error) => {
                    console.error('Error submitting offer:', error);
                    toast.error('Failed to submit offer. Please try again.');
                });
        }
    });

    const removeOffer = (id) => {
        const db = firebaseApp.firestore();
        db.collection("Offer").doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                toast.success('Delete Successful');
                fetchMyOffer();
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
                toast.error('Failed to delete offer. Please try again.');
            });
    };

    return (
        <>
            <AdminHeader />
            <Container className='pt-2 mt-5'>
                <Row className='justify-content-end UploadImage'>
                    <Col md={10}>
                        <h3 className='text-center mb-5 mt-5'>Active Festival Offer</h3>
                        <form onSubmit={formik.handleSubmit} style={{ border: '1px solid black', borderRadius: '10px' }} className='p-3'>
                            <div className="mb-3">
                                <label htmlFor="festivalOption" className="form-label">Select Festival</label>
                                <select
                                    id="festivalOption"
                                    name="festivalOption"
                                    className={`form-control ${formik.touched.festivalOption && formik.errors.festivalOption ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.festivalOption}
                                >
                                    <option value="">Select a festival</option>
                                    <option value="Diwali">Diwali</option>
                                    <option value="Holi">Holi</option>
                                    <option value="Dussehra">Dussehra</option>
                                    <option value="Raksha-Bandhan">Raksha Bandhan</option>
                                    <option value="Ganesh-Chaturthi">Ganesh Chaturthi</option>
                                    <option value="Makar-Sankranti">Makar Sankranti</option>
                                    <option value="Christmas">Christmas</option>
                                    <option value="Navratri">Navratri</option>
                                    <option value="Valentine's Day">Valentine's Day</option>
                                    <option value="Janmashtami">Janmashtami</option>
                                    <option value="Bhai Dooj">Bhai Dooj</option>
                                    <option value="Mahashivaratri">Mahashivaratri</option>
                                </select>
                                {formik.touched.festivalOption && formik.errors.festivalOption ? (
                                    <div className="invalid-feedback">{formik.errors.festivalOption}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="festival" className="form-label">Festival Offer</label>
                                <input
                                    id="festival"
                                    name="festival"
                                    type="text"
                                    className={`form-control ${formik.touched.festival && formik.errors.festival ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.festival}
                                />
                                {formik.touched.festival && formik.errors.festival ? (
                                    <div className="invalid-feedback">{formik.errors.festival}</div>
                                ) : null}
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <ToastContainer />
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col md={10}>
                        <h3 className='text-center mb-5 mt-5'>Active Festival Offer</h3>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Festival</th>
                                    <th>Festival Offer</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {festivalOffer.map((offer) => (
                                    <tr key={offer.id}>
                                        <td>{offer.festivalOption}</td>
                                        <td>{offer.festival}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => removeOffer(offer.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
