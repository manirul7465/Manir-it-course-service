import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Footer = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease'
        });
    })
    return (
        <div style={{margin:"20px"}}>
           
           <hr/>
            <div style={{display:"flex",justifyContent:"center",margin:"10px"}} data-aos='zoom-in-down'>
                <Link to="/home" className='navlink' style={{margin:"10px"}}>
                    About us
                </Link>
                <Link to="/home" className='navlink' style={{margin:"10px"}}>
                    Contact Us
                </Link>
                <Link to="/home" className='navlink' style={{margin:"10px"}}>
                    Information
                </Link>
                <Link to="/home" className='navlink' style={{margin:"10px"}} >Latest post</Link>
                <Link to="/home" className='navlink' style={{margin:"10px"}}>Privacy&policy</Link>
            </div>
          
         
    

      <p className="text-center" >
        <small>
          Manir It @ make your life easy" since 2021
        </small>
      </p>
        </div>
    );
};

export default Footer;