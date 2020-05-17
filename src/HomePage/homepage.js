import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './homepage.css';

const members = [
    {id: "1", fName: "Steve", lName: "Dot"},
    {id: "2", fName: "Ashley", lName: "Rose"},
    {id: "3", fName: "John", lName: "Doe"},
    {id: "4", fName: "Nate", lName: "McCollam"}
]

function HomePage() {
    return (
        <Container fluid>
            <Row>
                <Col sm={1}></Col>
                <Col sm={4} className="text-center">
                    <div className="customShape ml-3">
                        <h2>3</h2>
                        {/* This number should represent how many members are in database. */}
                    </div>
                </Col>
                <Col sm={6} className="text-center customHeader">
                    <h1 className="">Members</h1>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Col sm={12} className="text-center">
                    {members.map(member => {
                        return(
                            <Row key={member.id} className="data mt-5 pt-3">
                                <Col sm={1}></Col>
                                <Col sm={2} className="text-center">
                                    <div className="checkbox rounded"></div>
                                </Col>
                                <Col sm={8} className="text-center namePlate">{member.fName + " " + member.lName}</Col>
                                <Col sm={1}></Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6} className="customButton1 mt-5 mb-3 text-center">
                    <h1 className="update">Update</h1>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
    );
}

export default HomePage;