import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';
import AdminHeader from './AdminHeader';
import firebaseApp from './SetupFirebase';
import { toast } from 'react-toastify';

export default function UploadImage() {
    const [preview, setPreview] = useState(null);
    const storageRef = firebaseApp.storage().ref();

    const formik = useFormik({
        initialValues: {
            image: null,
        },
        onSubmit: (values) => {
            axios.post('http://localhost:5000/MyWorkImg/post', values)
                .then((response) => {
                    console.log(response);
                    formik.resetForm();
                    setPreview(null);
                    toast('Add Successful');
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                    toast('Error uploading image');
                });
        },
    });

    const handleFileChange = async (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            const dataURL = await convertImageToDataURL(file);
            formik.setFieldValue("image", dataURL);
            setPreview(dataURL);
        }
    };

    const convertImageToDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const metadata = {
                contentType: file.type,
            };

            const uploadTask = storageRef.child(`images/${file.name}`).put(file, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.error('Upload error:', error);
                    reject(error);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        resolve(downloadURL); // Resolve the promise with the download URL
                    });
                }
            );
        });
    };

    return (
        <>
            <AdminHeader />
            <Container className='pt-2 mt-5'>
                <Row className='justify-content-end UploadImage'>
                    <Col md={10}>
                        <h3 className='text-center mb-5 mt-5'>Upload My Work Image</h3>
                        <form className='UploadImg' onSubmit={formik.handleSubmit}>
                            <div className='mb-3 text-center'>
                                <label htmlFor="image" className='UploadImageIcon'>
                                    <FaCloudUploadAlt className='display-1' />
                                    {preview && (
                                        <div className='mt-2'>
                                            <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                                        </div>
                                    )}
                                </label>
                                <input
                                    className='form-control mt-2 d-none'
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept='image/*'
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary' type="submit">Upload Image</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
