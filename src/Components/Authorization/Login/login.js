import React, {useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import App  from "../../../App"; 
import {useHistory} from "react-router-dom";
import './login.css'
import HomePage from '../../HomePage/homepage';




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
        
        const Logout = event => {
            event.preventDefault(); 
            fetch("http://localhost:3000/users/logout", { 
                 
                method: "GET", 
               
            }).then(res => {
                console.log(res); 
                if(res.status === 200) {
                    alert ("Logged Out");
                }
            })
        }

        return (
            <Container fluid className="backgroundContainer">
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} className="loginCol1 mt-5 mb-5 text-center">
                        <h1 id="loginTitle">Welcome to <span id="loginTitle2">KidsMin</span></h1>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <form className="text-center" onSubmit={e => this.submit(e)}>
                <Row className="text-center">
                    <Col sm={1}></Col>
                    <Col sm={10} className="loginCol mt-1">
                        <Row className="mt-4">
                            <Col sm={2} className=""></Col>
                            <Col sm={8} className="text-center">
                                <input type="text" name="username" placeholder="Username" className="my-2 inputData text-center" onChange={handleChange} value={Username} />
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                        <Row>
                            <Col sm={2} className=""></Col>
                            <Col sm={8} className="text-center">
                                <input type="password" name="password" placeholder="Password" className="my-2 inputData text-center" onChange={handleChange2} value={Password} />
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                        <br></br>
                        <Row className="mt-5">
                            <Col sm={4} className=""></Col>
                            <Col sm={4} className="my-2 text-center">
                                <button type="submit" className="loginBtn" onClick = {onSubmit} >Login</button>
                                <button type="submit" className="loginBtn" onClick = {Logout} >Logout</button>
                            </Col>
                            <Col sm={4}></Col>
                        </Row>  
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                </form>
            </Container>
        );
    }

  
export default Login;