
import React, {useState} from 'react';

import { Container, Row, Col } from "react-bootstrap";
import '../AddMember/addMember.css';
import {useParams} from "react-router-dom"; 

import '../AddMember/addMember.css'
import { Redirect } from 'react-router-dom';





function DeleteConfirmation() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    

    const handleFirst = event => {
        setFirstName(event.target.value);
        console.log(firstName);
    };
    const handleLast = event => {
        setLastName(event.target.value);
        console.log(lastName);
    };
   
    let params = useParams();  
    const onSubmitDelete= event => {
        
        event.preventDefault();
        fetch("http://localhost:3000/members/" + params.idmembers, {

            method: "DELETE",

            body: JSON.stringify({
                firstName,
                lastName
                




            }),

            headers: {
                "Content-type": 'application/json'
            }
        }).then(res => {
            console.log(res); 
            if (res.status === 200) {
                alert("Member Deleted"); 
            }
        })

    }




    return (
        <Container fluid>
            <Row className="mt-3 mb-5">
                <Col lg={1}></Col>
                <Col xs={12} lg={10} className="text-center">

                    <h1 className="smallerFont">Delete {firstName + " " + lastName}</h1>

                </Col>
                <Col lg={1}></Col>
            </Row>
            <br></br>
            <br></br>
            <Row className="mt-5 shrink">
                <Col sm={1}></Col>
                <Col sm={10} className="text-center">
                    <h7 id="warning-title">Re-enter the child's name below to confirm deletion</h7>
                </Col>
                <Col sm={1}></Col>
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
                        <Col xs={12} xl={6} className="textR">

                            <input type="text" placeholder={firstName} name="firstName" className="my-2 inputData text-center" onChange={handleFirst} value={firstName} />
                        </Col>
                        <Col xl={6} className="textL">
                            <input type="text" placeholder={lastName} name="lastName" className="my-2 inputData text-center" onChange={handleLast} value={lastName} />

                        </Col>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <Row className="mt-5">
                <Col sm={4} className=""></Col>
                <Col sm={4} className="my-2 text-center">
                    <button type="submit" className=" formSubmitBtn" onClick={onSubmitDelete}>DELETE</button>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </form>
        </Container>
    );
}

export default DeleteConfirmation;