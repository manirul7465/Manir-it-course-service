import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import "./Header.css";

const Header = () => {
    const{user,logout}=useAuth();
    return (
        <div >

            <Navbar expand="lg" style={{marginBottom:"15px"}}className="navbar" >
                <Container >
                    <Image />
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://i.ibb.co/2NMmj4G/images.png"
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                        />{'  '}
                        Manir it Course & Services
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" >
                        <NavLink className="navlink" to="/home" >Home</NavLink>
                        
                        <NavLink className="navlink" to="/Allservice" >Course&Service</NavLink>
                        <NavLink className="navlink" to="/Dashboard" >Dashboard</NavLink>
                        { user?.email?
                        <span onClick={logout} className='navlink'>logout</span>
                        :
                        <NavLink className="navlink"  to="/login"  > <span className='cursor'>Log in</span></NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;