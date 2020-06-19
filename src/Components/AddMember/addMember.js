import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";


import './addMember.css';

function AddMember () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [membersAge, setMembersAge] = useState('')
    const [guardianNameFirst, setGuardianNameFirst] = useState('')    
    const [guardianLastName, setGuardianLastName] = useState('')    
    const [guardianPhone, setGuardianPhone] = useState('')  

    const handleFirstName = event => {
        setFirstName(event.target.value);
        console.log(firstName);
    };
    const handleLastName = event => {
        setLastName(event.target.value);
        console.log(lastName);
    };
    const handleMembersAge = event => {
        setMembersAge(event.target.value);
        console.log(membersAge);
    };
    const handleGuardianNameFirst = event => {
        setGuardianNameFirst(event.target.value);
        console.log(guardianNameFirst);  
    };
    const handleGuardianLastName = event => {
        setGuardianLastName(event.target.value);
        console.log(guardianLastName);   
    };
    const handleGuardianPhone = event => {
        setGuardianPhone(event.target.value);        
        console.log(guardianPhone);    
    };
    const onSubmit = event => {
        event.preventDefault();

        fetch("http://localhost:3000/members", {

            method: "POST",

            body: JSON.stringify({
                firstName,
                lastName,
                membersAge,
                guardianNameFirst, 
                guardianLastName,   
                guardianPhone
            }),
            headers: {
                "Content-type":'application/json'
            }
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                alert("Member Added");
                
                
            }
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
        <form onSubmit={e => this.submit(e)}>
            <Row className="mt-5 text-center">
                <Col sm={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input 
                                value={firstName}
                                onChange={handleFirstName}
                                placeholder="First Name" 
                                type="text"
                                name="firstName"
                                required 
                                className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input 
                                value={lastName}
                                onChange={handleLastName}
                                placeholder="Last Name" 
                                type="text"
                                name="lastName" 
                                required   
                                className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input  
                                value={membersAge}
                                onChange={handleMembersAge}
                                placeholder="Child's Age" 
                                type="number"
                                name="membersAge"
                                required  
                                className="inputData text-center my-2" />
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
                            <input  
                                value={guardianNameFirst}
                                onChange={handleGuardianNameFirst} 
                                placeholder="Guardian's First Name" 
                                type="text"
                                name="guardianNameFirst" 
                                required 
                                className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input 
                                value={guardianLastName}
                                onChange={handleGuardianLastName} 
                                placeholder="Guardian's Last Name" 
                                type="text"
                                name="guardianLastName"  
                                required 
                                className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input  
                                value={guardianPhone}
                                onChange={handleGuardianPhone} 
                                placeholder="Guardian's Phone" 
                                type="phone"
                                name="guardianPhone" 
                                required 
                                className="my-2 inputData text-center" />
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
                            <button type="submit" className="formSubmitBtn" onClick = {onSubmit}>SUBMIT</button>
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