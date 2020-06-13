import { extendObservable, reaction } from 'mobx'; 
import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import './login.css'

/*class Login extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.change = this.change.bind(this);
        this.submit = this.change.bind(this);
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        axios.post('/getToken', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('cool-jwt', res.data);
            this.props.history.push("/members")
        });
    } */




    render() {
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
                                <input type="text" name="username" placeholder="Username" className="my-2 inputData text-center" onChange={e => this.change(e)} value={this.state.username} />
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                        <Row>
                            <Col sm={2} className=""></Col>
                            <Col sm={8} className="text-center">
                                <input type="password" name="password" placeholder="Password" className="my-2 inputData text-center" onChange={e => this.change(e)} value={this.state.password} />
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                        <br></br>
                        <Row className="mt-5">
                            <Col sm={4} className=""></Col>
                            <Col sm={4} className="my-2 text-center">
                                <button type="submit" className="loginBtn">Login</button>
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