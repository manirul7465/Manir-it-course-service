import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from './Course';

const Courses = () => {
    const[course,setCourse]=useState([]);
    useEffect(()=>{
        fetch('https://pure-escarpment-40758.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>setCourse(data));
}, [])
    
    return (
        <div >
              <Container >
              <h1 style={{margin:"20px",fontStyle:"italic"}}>Our courses&services</h1>
        <Row xs={1} md={2} lg={3}  className="g-4">
            {course.slice(0, 6).map(course => <Course
                    key={course._id}
                    course={course}
                    
                ></Course>)
            }
        
        </Row>
         </Container>
        </div>
    );
};

export default Courses;