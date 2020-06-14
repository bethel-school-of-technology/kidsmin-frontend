import React, {useState, setState} from 'react';
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
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={2} sm={1}></Col>
                <Col xs={8} sm={10} className="text-center mt-4">
                    <h1 className="titleText">Child's Name</h1>
                </Col>
                <Col xs={2} sm={1}></Col>
            </Row>
            <Row className="data">
                <Col xs={1}></Col>
                <Col xs={10} className="searchBar">
                    <input type="text" name="searchBar" input={searchTerm} onChange={handleChange} id="searchInput" placeholder="Search Child's Name"></input>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Col xs={1} sm={3} md={4}></Col>
                <Col xs={10} sm={6} md={4} className="mt-3 mb-5 text-center">
                    <button type="button" className="formSubmitBtn searchBtn">Search</button>
                </Col>
                <Col xs={1} sm={3} md={4}></Col>
            </Row>
            <Row className="mb-3">
                <Col sm={12} className="text-center">
                    {members.filter(filteredMember => filteredMember.firstName.includes(searchTerm) || filteredMember.lastName.includes(searchTerm)).map(member => {
                        return(
                            <Row key={member.idmembers} className="namePlate mt-5">
                                <Col xs={8} sm={9} md={9} className="text-center mt-3">
                                    <h4 className="smallerFont" >{member.firstName + " " + member.lastName}</h4>
                                </Col>
                                <Col xs={4} sm={3} md={3} lg={2}className="text-center mt-3 mb-2">
                                    <Link className="links" to={"/delete/" + member.idmembers}>
                                        <button type="button" className="customButton2 edit">Delete</button>
                                    </Link>
                                    {/* <h1 className="edit">Edit</h1> */}
                                </Col>
                                <Col lg={1}></Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteMember;