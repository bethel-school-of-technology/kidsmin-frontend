import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import '../AddMember/addMember.css';

function AddMember() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} className="text-center customHeader">
                    <h1 className="">New Member</h1>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Row>
                <Col sm={12} className="border form-group">
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="text" placeholder="First Name" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="text" placeholder="Last Name" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="number" placeholder="Child's Age" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="text" placeholder="Guardian's First Name" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="text" placeholder="Guardian's Last Name" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="phone" placeholder="Guardian's Phone" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="text" placeholder="Guardian's First Name" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="text" placeholder="Guardian's Last Name" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="phone" placeholder="Guardian's Phone" className="formInput my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <Row>
                        <Col sm={4} className=""></Col>
                        <Col sm={4} className="text-center">
                            <button type="submit" className="formSubmitBtn">SUBMIT</button>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AddMember;