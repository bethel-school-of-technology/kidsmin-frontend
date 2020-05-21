import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../EditMember/editMember.css';

const members = [
    {idmembers: "1", firstName: "Steve", lastName: "Dot", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "7"},
    {idmembers: "2", firstName: "Ashley", lastName: "Rose", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "10"},
    {idmembers: "3", firstName: "John", lastName: "Doe", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "4"},
    {idmembers: "4", firstName: "Nate", lastName: "McCollam", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "29"}
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
                <Col sm={4}></Col>
                <Col sm={4} className="mt-3 mb-5 text-center">
                    <button type="button" className="formSubmitBtn searchBtn">Search</button>
                </Col>
                <Col sm={4}></Col>
            </Row>
            <Row className="mb-3">
                <Col sm={12} className="text-center">
                    {members.map(member => {
                        return(
                            <Row key={member.idmembers} className="namePlate mt-5">
                                <Col sm={9} className="text-center mt-3">
                                    <h4>{member.firstName + " " + member.lastName}</h4>
                                </Col>
                                <Col sm={2} className="text-center mt-3 mb-2">
                                    <Link className="links" to={"/delete/" + member.idmembers}>
                                        <button type="button" className="customButton2 edit">Delete</button>
                                    </Link>
                                    {/* <h1 className="edit">Edit</h1> */}
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