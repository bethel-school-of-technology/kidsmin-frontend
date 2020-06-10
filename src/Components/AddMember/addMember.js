import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './addMember.css';

function AddMember() {

 

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();
        console.log(data);

        fetch('http://localhost:3000/members/', {
          method: 'POST',
          body: data
        });
    }

    return (
        <Container fluid>
            <Row className="mb-5">
                <Col xs={2}></Col>
                <Col xs={8} className="text-center mt-4">
                    <h1 className="smallerFont">New Member</h1>
                </Col>
                <Col xs={2}></Col>
            </Row>
        <form onSubmit={handleSubmit}>
            <Row className="mt-5 text-center">
                <Col xs={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col xs={2} className=""></Col>
                        <Col xs={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col xl={2}></Col>
                        <Col xs={12} xl={6} className="textR">
                            <input type="text" placeholder="First Name" required name="firstName" className="my-2 inputData text-center" />
                        </Col>
                        <Col xs={12} xl={6} className="textL">
                            <input type="text" placeholder="Last Name" required name="lastName" className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} className=""></Col>
                        <Col xs={12} xl={8} className="textC">
                            <input type="number" placeholder="Child's Age" required name="membersAge" className="inputData text-center my-2" />
                        </Col>
                        <Col xl={2}></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={2} className=""></Col>
                        <Col xs={8} className="text-center">
                            <h3 className="dividerTitle">Guardian's Info</h3>
                        </Col>
                        <Col xs={2}></Col>
                        <Col xs={12} xl={6} className="textR">
                            <input type="text" placeholder="Guardian's First Name" required name="guardianNameFirst" className="my-2 inputData text-center" />
                        </Col>
                        <Col xs={12} xl={6} className="textL">
                            <input type="text" placeholder="Guardian's Last Name" required name="guardianLastName" className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} className=""></Col>
                        <Col xs={12} xl={8} className="textC">
                            <input type="phone" placeholder="Guardian's Phone" required name="guardianPhone" className="my-2 inputData text-center" />
                        </Col>
                        <Col xl={2}></Col>
                    </Row>
                    {/* This commented out section is if we add a second guardian. */}
                    {/* <br></br>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle">Guardian's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder="Guardian's First Name" className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder="Guardian's Last Name" className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="phone" placeholder="Guardian's Phone" className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row> */}
                    <br></br>
                    <Row className="mt-5">
                        <Col sm={3} className=""></Col>
                        <Col sm={6} className="my-2 text-center">
                            <button type="submit" className="formSubmitBtn">SUBMIT</button>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                </Col>
            </Row>
        </form>
        </Container>
    );
};


export default AddMember;