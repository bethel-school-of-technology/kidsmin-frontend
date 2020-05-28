import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './homepage.css';

const members = [
    {idmembers: "1", firstName: "Steve", lastName: "Dot", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "7"},
    {idmembers: "2", firstName: "Ashley", lastName: "Rose", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "10"},
    {idmembers: "3", firstName: "John", lastName: "Doe", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "4"},
    {idmembers: "4", firstName: "Nate", lastName: "McCollam", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "29"}
]


function HomePage( props ) {
    return (
        <Container fluid>
            <Row>
                <Col sm={1}></Col>
                <Col sm={4} className="text-center">
                    <div className="customShape ml-3 layer1">
                        <h2 className="layer2">4</h2>
                        {/* This number should represent how many members are in database. */}
                    </div>
                </Col>
                <Col sm={6} className="text-left customHeader ml-5">
                    <h1 className="">Members</h1>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Col sm={12} className="text-center mt-5">
                    {members.map(member => {
                        return(
                            <Row key={member.id} className="namePlate mt-5">
                                <Col sm={1}></Col>
                                <Col sm={2} className="text-center checkboxContainer">
                                    <input type="checkbox" className="checkbox rounded mt-4 mb-2"></input>
                                    <span className="checkmark"></span> 
                                </Col>
                                <Col sm={8} className="text-center mt-3">
                                    <h4>{member.firstName + " " + member.lastName}</h4>
                                </Col>
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