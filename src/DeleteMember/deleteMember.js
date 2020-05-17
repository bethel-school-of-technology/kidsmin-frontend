import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../DeleteMember/deleteMember.css';

const members = [
    {id: "1", fName: "Steve", lName: "Dot"},
    {id: "2", fName: "Ashley", lName: "Rose"},
    {id: "3", fName: "John", lName: "Doe"},
    {id: "4", fName: "Nate", lName: "McCollam"}
]

function DeleteMember() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} className="text-center customHeader">
                    <h1 className="">Child's Name</h1>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row className="data">
                <Col sm={1}></Col>
                <Col sm={10} className="searchBar">
                    <div className="form-group has-search">
                        <span className="fas fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search"></input>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6} className="customButton1 mt-3 mb-5 text-center">
                    <h1 className="find">Search</h1>
                </Col>
                <Col sm={3}></Col>
            </Row>
            <Row className="mb-3">
                <Col sm={12} className="text-center">
                    {members.map(member => {
                        return(
                            <Row key={member.id} className="data mt-5 pt-3">
                                <Col sm={9} className="text-center namePlate">{member.fName + " " + member.lName}</Col>
                                <Col sm={2} className="customButton2 text-center">
                                    <h1 className="delete">Delete</h1>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteMember;