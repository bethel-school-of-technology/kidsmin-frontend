import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../AddMember/addMember.css'


const name = {fname: "steve", lname: "dot"};

function DeleteConfirmation() {
        return (
        <Container fluid>
            <Row className="mt-3 mb-5">
                <Col sm={1}></Col>
                <Col sm={10} className="text-center">
                    <h1>Delete {name.fname + " " + name.lname}</h1>
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
            <Row className="text-center">
                <Col sm={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder={name.fname} className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder={name.lname} className="my-2 inputData text-center" />
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
        </Container>
    );
}

export default DeleteConfirmation