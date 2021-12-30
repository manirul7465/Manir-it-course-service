import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import"./Manageproduct.css";

const Manageproduct = () => {
    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://pure-escarpment-40758.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `https://pure-escarpment-40758.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted succesfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }
    return (
       <>
            <h1>This is manage prodcut</h1>
            <Container>
        
        <Row xs={1} md={2} lg={3}  className="g-4">
            {
                services.map(service => <div key={service._id}>
                    <Col>
                        <Card className="service-card" >
                            <CardImg variant="top" src={service.img} className='img'/>
                            <Card.Body className="card-body">
                                <Card.Title className="name">{service.name}</Card.Title>
                                    <Button className="button" size="lg" onClick={() => handleDelete(service._id)} style={{marginTop:"50px"}}>
                                      Delete product
                                    </Button>{' '}
                            </Card.Body>

                        </Card>
                    </Col>

                </div>)
            }
             </Row>
         </Container>
         </>
     
    );
};

export default Manageproduct;