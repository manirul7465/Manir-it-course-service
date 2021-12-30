import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from "../../Image/Logo/logo-1.png";
import img2 from "../../Image/Logo/logo-2.png";
import img3 from "../../Image/Logo/logo-3.png";
import img4 from "../../Image/Logo/logo-4.png";
import img5 from "../../Image/Logo/logo-5.png";
import img6 from "../../Image/Logo/logo-6.png";
import img7 from "../../Image/Logo/logo-7.png";
import img8 from "../../Image/Logo/logo-8.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Developents = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease'
        });
    })
const Developments = [
  
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 },
        { id: 8, img: img8 },
        
];
    return (
        <div >
            <h1 style={{  fontStyle: "italic", display:"Block",marginTop:"40px", paddingTop:"40px",color:"black" }}>Full stack Development(course)</h1>
            <Row xs={1} md={2} lg={4} className="g-4" style={{margin:"100px",marginTop:"0px"}}>
                {Developments.map(developent => <Col 
                    key={developent.id}>

                    <Card style={{borderRadius:"15px"}} data-aos='flip-left'>
                        <Card.Img  variant="top" src={developent.img} style={{ height: "180px",borderRadius:"15px" }} />
                       
                    </Card>

                    
                </Col>)
                }

            </Row>
        </div>
    );
};

export default Developents;