import React, {useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';
import './login.css'





     function Login() {
let history = useHistory(); 
        const [Username, setUsername] = useState("");
        const [Password, setPassword] = useState("");

        const handleChange = event => {
            setUsername(event.target.value);
            console.log(Username);
        }; 
        const handleChange2 = event => {
            setPassword(event.target.value);
            console.log(Password);
        }; 
        const onSubmit = event => {
            event.preventDefault(); 
            fetch("http://localhost:3000/users/login", { 
                 
                method: "POST", 
               
                body: JSON.stringify({ 
                     Username, 
                     Password
                   
                }), 
               
                headers: { 
                    "Content-type": 'application/json'
                } 
            }).then(res => {
                console.log(res);
                if (res.status === 200) {
                    alert("Logged In");
                    history.push("/members")
                    
                }
                else {
                    console.log(res);
                    if (res.ok === false) {
                    alert("Incorrect Login"); 
                    }
                   // history.push("/login")
                }
            })
            
        }

        return (
            <Container fluid>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10} className="loginCol1 mt-5 mb-5 text-center">
                        <h1 id="loginTitle">Welcome to <span id="loginTitle2">KidsMin</span></h1>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <form className="text-center" onSubmit={e => this.submit(e)}>
                <Row className="text-center">
                    <Col xs={1}></Col>
                    <Col xs={10} className="mt-1">
                        <Row className="mt-4">
                            <Col lg={2} className=""></Col>
                            <Col xs={12} lg={8} className="text-center">
                                <input type="text" name="username" placeholder="Username" className="my-2 inputData text-center" onChange={handleChange} value={Username} />
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                        <Row>
                            <Col lg={2} className=""></Col>
                            <Col xs={12} lg={8} className="text-center">
                                <input type="password" name="password" placeholder="Password" className="my-2 inputData text-center" onChange={handleChange2} value={Password} />
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                        <br></br>
                        <Row className="mt-5">
                            <Col xs={3} lg={4} className=""></Col>
                            <Col xm={6} lg={4} className="my-2 text-center">
                                <button type="submit" className="loginBtn" onClick={onSubmit}>Login</button>
                            </Col>
                            <Col xs={3} lg={4}></Col>
                        </Row>  
                    </Col>
                    <Col xm={1}></Col>
                </Row>
                </form>
            </Container>
        );
    }

  
export default Login;