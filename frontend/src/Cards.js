import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cards({ service }) {

    const sendWhatsappMessage = (data) => {
        console.log(data)
        let num = '+91' + 8980591955;
        let msg = `Hello, Kajal Bhanderi. %0a%0a Product Name: ${data.serviceName} %0a%0a Price: ₹${data.price} %0a%0a Service List: ${data.listItem.join(', ')}`;

        var win = window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
        win.focus();
    }

    const handleBookNowClick = (service) => {
        sendWhatsappMessage(service);
    }

    return (
        <Container className='mb-5'>
            <Row className='gap-5 justify-content-center p-3'>
                {service.map((item, index) => (
                    <Col md={4} key={index} className="p-3 "
                        style={{
                            border: '1px solid grey',
                            borderRadius: '2%',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                            background: 'radial-gradient(circle, rgba(241, 201, 221, 1) 0%, rgba(253, 172, 212, 1) 30%, rgba(255, 105, 180, 1) 70%, rgba(255, 105, 180, 1) 100%)',
                        }}>
                        <div className="d-flex gap-3">
                            <img style={{ borderRadius: '10%', width: '100px', height: '100px' }} src={item.img} alt={item.serviceName} />
                            <div className="">
                                <h5>{item.serviceName}</h5>
                                <p>
                                    <b>₹{item.price}/-</b>
                                    <b className="text-danger"><s className="a_price66" rel="1499">₹{item.oldprice}</s>/- </b>
                                </p>
                                <Button variant="outline-primary cardBtn" onClick={() => handleBookNowClick(item)}>Book Now</Button>{' '}
                            </div>
                        </div>
                        <hr />
                        <div>
                            <ul>
                                {item.listItem.map((list, idx) => (
                                    <li  key={idx} style={{ fontFamily: "Merienda, cursive" }}>{list}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
