import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import "./Reviews.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Reviews = () => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease'
    });
})
        
      const [reviews,setReviews]=useState([]);
      useEffect(()=>{
       fetch('https://pure-escarpment-40758.herokuapp.com/reviews')
       .then(res=>res.json())
       .then(data=>setReviews(data))
      },[])
      
     return (
        <Container>
         <h3 style={{fontStyle:"italic",margin:"20px"}}>Client Review</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                
               {
               reviews.map(review=><Col key={review._id}>
                   <div className="service-card" style={{padding:'20px'}} data-aos='fade-right'>
                  
                  
                  <h2 className="name"> comments: {review.description}</h2>
                  <h2 className="name"> Name:{review.name}</h2>
                  <Rating 
                        initialRating={review.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    >
                    </Rating>  
                 
                   </div>
                 </Col>  )
                }
           
           </Row>
        </Container>
     
    );
};

export default Reviews;