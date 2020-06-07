import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './addMember.css';

function AddMember() {
    // constructor() {
    //     super();
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
     
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data
        }); 
    }

    return (
        <Container fluid>
            <Row className="mb-5">
                <Col sm={2}></Col>
                <Col sm={8} className="text-center customHeader">
                    <h1 className="">New Member</h1>
                </Col>
                <Col sm={2}></Col>
            </Row>
        <form onSubmit={handleSubmit}>
            <Row className="mt-5 text-center">
                <Col sm={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder="First Name" required name="firstName" className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder="Last Name" required name="lastName" className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="number" placeholder="Child's Age" required name="membersAge" className="inputData text-center my-2" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle">Guardian's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder="Guardian's First Name" required name="guardianNameFirst" className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder="Guardian's Last Name" required name="guardianLastName" className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="phone" placeholder="Guardian's Phone" required name="guardianPhone" className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={2}></Col>
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
                        <Col sm={4} className=""></Col>
                        <Col sm={4} className="my-2 text-center">
                            <button type="submit" className="formSubmitBtn">SUBMIT</button>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Col>
            </Row>
        </form>
        </Container>
    );
}

export default AddMember;