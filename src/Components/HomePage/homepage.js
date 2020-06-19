import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './homepage.css';


function HomePage() {

    const [members, setMembers] = useState([])
    const [count, setCount] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/members')
        .then(data => data.json())
        .then(members => setMembers(members))
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/members')
        .then(data => data.json())
        .then(count => {
            let c = count.length;
            setCount(c)
    })
}, [])
    

    return (
        <Container fluid>
            <Row>
                <Col sm={1}></Col>
                <Col xs={4} sm={4} className="text-center">
                    <div className="customShape ml-3 layer1">
                        <h2 className="layer2">{count}</h2>
                    </div>
                </Col>
                <Col xs={6} sm={6} className="text-left customHeader">
                    <h1 className="">Members</h1>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center mt-5">
                    {members.map(member => {
                        return(
                            <Row key={member.id} className="namePlate mt-5">
                                <Col sm={1}></Col>
                                <Col xs={2} sm={2} className="text-center checkboxContainer">
                                    <input type="checkbox" className="checkbox rounded mt-4 mb-2"></input>
                                    <span className="checkmark"></span> 
                                </Col>
                                <Col xs={10} sm={8} className="text-center mt-3">
                                    <h4>{member.firstName + " " + member.lastName}</h4>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6} className="mt-5 mb-3 text-center">
                    <button type="submit" className="loginBtn">Update</button>
                </Col>
                <Col xs={3}></Col>
            </Row>
        </Container>
    );
}

export default HomePage;