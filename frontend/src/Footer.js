import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSnapchat } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {



  return (
    <>
      <Container fluid className='footer'>
        <Row className='justify-content-center p-3'>
          <Col md={6}>
            <ul className='fs-4  fw-semibold' style={{ listStyle: 'none', lineHeight: 2 }}>
              <li style={{ color: 'rgb(2, 27, 121)' }}>Contact Information</li><hr />
              <li>D-303,Star Residency,</li>
              <li>Nr-By-Rajwadi Party Plot,</li>
              <li>Amroli,Surat</li>
            </ul>
          </Col>
          <Col md={6} className='text-center'>
            <div className='fs-2'>
              <h1 style={{ color: 'rgb(2, 27, 121)' }}>Follow Us</h1>
              <hr />
              <a className='pe-3 ' href="https://accounts.snapchat.com/accounts/v2/login">
                <FaSnapchat className='icon_hover' />
              </a>
              <a className='pe-3 ' href="https://www.instagram.com/accounts/login/">
                <FaInstagram className='icon_hover' />
              </a>
              <a className='' href="https://www.facebook.com/login/">
                <FaFacebook className='icon_hover' />
              </a>
            </div>
          </Col>
          <hr />
          <h6 className='text-center'>© 2024 Piyu Makeover.</h6>
        </Row>
      </Container>
    </>
  )
}
