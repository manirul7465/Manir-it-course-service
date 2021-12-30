import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';
import Service from './Service';

const Allservice = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://pure-escarpment-40758.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className='course'>
        <Header/>
        <Container >
        
        <Row xs={1} md={2} lg={3}  className="g-4">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    
                ></Service>)
            }
        
        </Row>
         </Container>
         <Footer></Footer>
         </div>
    );
};

export default Allservice;