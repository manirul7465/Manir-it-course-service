import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import useAuth from '../../Hooks/UseAuth';
import "./Registration.css";




const Registration = () => {
    const [registerData, setRegisterData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        console.log(field, value, newRegisterData)
        setRegisterData(newRegisterData);


    }
    const handleRegister = e => {
        if (registerData.password !== registerData.password2) {
            alert('password did not match')
            return
        }

        registerUser(registerData.email, registerData.password, registerData.name,navigate);
        e.preventDefault();
    }


  
    return (
        <>
            <div className="registration" >
                <Header></Header>
                <Row xs={1} md={1} lg={2} style={{ width: "100%" }}>
                    <Col  >
                        <h1>Registration here</h1>
            
                        <Container className="form" >
                            {!isLoading && <Form onSubmit={handleRegister}>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label className="form-label">Your Full Name</Form.Label>
                                    <Form.Control name='name' type="text" onBlur={handleOnBlur} placeholder="full name" className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className="form-label">Email address</Form.Label>
                                    <Form.Control name="email" type="email" onBlur={handleOnBlur} placeholder="Enter email" className="form-input" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className="form-label">Enter password</Form.Label>
                                    <Form.Control name="password" type="password" onBlur={handleOnBlur} placeholder="Password" className="form-input" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className="form-label">re-type Password</Form.Label>
                                    <Form.Control name="password2" type="password" onBlur={handleOnBlur} placeholder="re-type Password" className="form-input" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formHorizontalCheck">
                                    <Form.Check type="checkbox"
                                        className="form-label" label="I accept terms and condition" />
                                </Form.Group>
                                <Button size="lg" className="register-submit" type="submit">
                                    Submit
                                </Button>
                                <br /> <br />
                                <h4>already registerd?Back to</h4>
                                <Link className="login-text" to="/login">  <h1 >login</h1> </Link>


                                {authError && <Alert variant='danger'>
                                    user not created !
                                </Alert>}
                                {user?.email && <Alert variant='primary'>
                                user created succesfully!
                            </Alert>}
                            </Form>}
                            {isLoading && <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                            
                        </Container> 


                    </Col>
                    <Col style={{ marginBottom: '5px' }}>
                        <Image style={{ height: '900px' }} fluid src="https://i.ibb.co/LkLzp6m/New-entries-pana-1.png" alt="" />
                    </Col>
                </Row>
            </div>

        </>
    );
};


export default Registration;




