import React from 'react';
import image from "../../Images/error.svg"
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div style={{padding:"5%",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
       
            <Image style={{ width: '40%' }} src={image} alt="" />

            <Link to="/home">

                <Button size="lg" variant="warning">Back TO Home</Button>
            </Link>
  
        </div>

    );
};

export default NotFound;