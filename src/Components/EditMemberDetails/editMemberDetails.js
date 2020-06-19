import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../AddMember/addMember.css';

const members = [
    {membersid: "1", firstName: "Steve", lastName: "Dot", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "7"},
    {membersid: "2", firstName: "Ashley", lastName: "Rose", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "10"},
    {membersid: "3", firstName: "John", lastName: "Doe", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "4"},
    {membersid: "4", firstName: "Nate", lastName: "McCollam", guardianNameFirst: "Mr.", guardianNameLast: "Parent", guardianPhone: "123-456-7890", membersAge: "29"}
]


const EditMemberDetails = () => {
    return (
        <Container fluid>
            <Row className="mb-5">
                <Col xl={2}></Col>
                <Col xs={12} xl={8} className="text-center customHeader">
                    <h1 className="">Edit {members.firstName}'s Info</h1>
                </Col>
                <Col xl={2}></Col>
            </Row>
            <Row className="mt-5 text-center">
                <Col sm={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col xs={12} xl={6} className="textR">
                            <input type="text" placeholder={members.firstName} className="my-2 inputData text-center" />
                        </Col>
                        <Col xs={12} xl={6} className="textL">
                            <input type="text" placeholder={members.lastName} className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} className=""></Col>
                        <Col xs={12} xl={8} className="text-center">
                            <input type="number" placeholder={members.membersAge} className="inputData text-center my-2" />
                        </Col>
                        <Col xl={2}></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle">Guardian's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col xs={12} xl={6} className="textR">
                            <input type="text" placeholder={members.guardianNameFirst} className="my-2 inputData text-center" />
                        </Col>
                        <Col xs={12} xl={6} className="textL">
                            <input type="text" placeholder={members.guardianNameLast} className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} className=""></Col>
                        <Col xs={12} xl={8} className="textC">
                            <input type="phone" placeholder={members.guardianPhone} className="my-2 inputData text-center" />
                        </Col>
                        <Col xl={2}></Col>
                    </Row>
                    <br></br>
                    <Row className="mt-5">
                        <Col sm={4} className=""></Col>
                        <Col sm={4} className="my-2 text-center">
                            <button type="submit" className="formSubmitBtn">Update</button>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default EditMemberDetails;