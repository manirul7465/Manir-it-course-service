import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Service = (props) => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease'
    });
})
  const { _id,name, img, description, price } = props.service;
  return (
   
    <Col> 
      <Card className="service-card" data-aos='zoom-in-down'>
        <Card.Img variant="top" src={img} style={{ borderRadius: '15px', height: "280px" }} />
        <Card.Body className="card-body">
          <Card.Title className="name">{name}</Card.Title>
          <Card.Title className="price">{price}</Card.Title>
          <Card.Text className="description">
            {description}
          </Card.Text>
          <Link to={`/order/${_id}`}>
          <Button className="button"  size="lg" >
            Book now 
          </Button>{' '}</Link>
        </Card.Body>

      </Card>
    </Col>



  );
};

export default Service;