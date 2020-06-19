import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../AddMember/addMember.css'
//import { Redirect } from 'react-router-dom';



function DeleteConfirmation() {

    const [member, setMembers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/members')
        .then(data => data.json())
        .then(members => setMembers(members))
    }, [])


    return (
        <Container fluid>
            <Row className="mt-3 mb-5">
                <Col sm={1}></Col>
                <Col sm={10} className="text-center">
                    <h1>Delete {member.firstName + " " + member.lastName}</h1>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <br></br>
            <br></br>
            <Row className="mt-5 shrink">
                <Col sm={2}></Col>
                <Col sm={8} className="text-center">
                    <h7 id="warning-title">Re-enter the child's name below to confirm deletion</h7>
                </Col>
                <Col sm={2}></Col>
            </Row>
        <form>
            <Row className="text-center">
                <Col sm={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder={member.firstName} name="firstName" className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder={member.lastName} name="lastName" className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <Row className="mt-5">
                <Col sm={4} className=""></Col>
                <Col sm={4} className="my-2 text-center">
                    <button type="submit" className=" formSubmitBtn">DELETE</button>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </form>
        </Container>
    );
}

export default DeleteConfirmation;