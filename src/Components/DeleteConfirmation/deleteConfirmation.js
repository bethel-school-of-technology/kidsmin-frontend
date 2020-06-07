import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../AddMember/addMember.css'
import { Redirect } from 'react-router-dom';


// Will need to get the idmembers from param and then get that user from database to confirm name before deletion
const memberid = this.props.match.params.idmembers
const member =
    fetch('/api/form-submit-url', {
        method: 'GET', 
        body: memberid
  });
// const name = {fname: "steve", lname: "dot"};

function DeleteConfirmation() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        
        if (member.firstName + member.lastName === data.firstName + data.lastName) {
            fetch('/api/form-submit-url', {
                method: 'DELETE',
                body: memberid
              }).then(<Redirect to="/delete" />)
        } else {
            alert("Child's name doesn't match. Please try again.");
        }
        // if/else statement. if inputs = members name then run delete method
       
    }

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
        <form onSubmit={handleSubmit}>
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

export default DeleteConfirmation