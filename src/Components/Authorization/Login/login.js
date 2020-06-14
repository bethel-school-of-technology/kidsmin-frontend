import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


import './login.css'

function Login() {
    
    

        return (
            <Container fluid className="backgroundContainer">
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10} className="loginCol1 mt-5 mb-5 text-center">
                        <h1 id="loginTitle">Welcome to <span id="loginTitle2">KidsMin</span></h1>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <form className="text-center">
                <Row className="text-center">
                    <Col xs={1}></Col>
                    <Col xs={10} className="loginCol mt-1">
                        <Row className="mt-4">
                            <Col lg={2} className=""></Col>
                            <Col xs={12} lg={8} className="text-center">
                                <input type="text" name="username" placeholder="Username" className="my-2 inputData text-center" />
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                        <Row>
                            <Col lg={2} className=""></Col>
                            <Col xs={12} lg={8} className="text-center">
                                <input type="password" name="password" placeholder="Password" className="my-2 inputData text-center" />
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                        <br></br>
                        <Row className="mt-5">
                            <Col xs={3} lg={4} className=""></Col>
                            <Col xs={6} lg={4} className="my-2 text-center">
                                <button type="submit" className="loginBtn">Login</button>
                            </Col>
                            <Col xs={3} lg={4}></Col>
                        </Row>  
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                </form>
            </Container>
        );
    }
  
export default Login;