import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


import '../EditMember/editMember.css';



function DeleteMember() {
   

        const [members, setMembers] = useState([])
    
        useEffect(() => {
            fetch('http://localhost:3000/members')
            .then(data => data.json())
            .then(members => setMembers(members))
        }, [])
    
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
                    <input type="text" id="searchInput" placeholder="Search Child's Name"></input>
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