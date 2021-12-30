import React, { useState } from 'react';
import { Form, Button, Container, Image, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import useAuth from '../../Hooks/UseAuth';
import "./Login.css";

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const {user,loginUser,isLoading,authError,signInWithGoogle}=useAuth();

    const location=useLocation();
    const navigate=useNavigate();

    const handleOnChange=e=>{
     const field=e.target.name;
     const value=e.target.value;

     const newLoginData={...loginData};
     newLoginData[field]=value;
     console.log(field, value, newLoginData)
     setLoginData(newLoginData);
    }
    const handleLoginSubmit=e=>{
            loginUser(loginData.email,loginData.password,location,navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,navigate)
    }

    return (
        <div className="login-container">
            <Header></Header>
            <Row xs={1} md={1} lg={2} style={{ width: "100%" }}>
                <Col>
                    <h1 style={{ color: "black" }}>Login here</h1>
                    <Container className="form-login">
                       {} <Form onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="form-label">Email </Form.Label>
                                <Form.Control name="email" required onChange={handleOnChange} type="email" className="login-input" placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="form-label"> password</Form.Label>
                                <Form.Control name="password" required onChange={handleOnChange} type="password" className="login-input" placeholder="Password" />
                            </Form.Group>

                            <Button size="lg" className="sign-in" type="submit">
                                sign in
                            </Button><br />
                            <h2 style={{ color: "white" }}>or</h2><br />
                            <Button onClick={handleGoogleSignIn} className="sign-in">Google sign in</Button><br /><br />
                            <h2 style={{ color: "white" }}> Not registerd?sign up now</h2>
                            <Link to="/registration" className="register-text"> <h2> Go signup </h2></Link>
                            {isLoading && <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                            {user?.email && <Alert  variant='primary'>
                                login succesfully !
                            </Alert>}
                            {authError && <Alert variant='danger'>
                                    {authError}
                                </Alert>}
                        </Form>
                    </Container>
                </Col>
                <Col style={{ marginBottom: '5px' }}>
                    <Image style={{ height: '900px' }} fluid src="https://i.ibb.co/SsLDP1Z/New-Project-7.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Login;