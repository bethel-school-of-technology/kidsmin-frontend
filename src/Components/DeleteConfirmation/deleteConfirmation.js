import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../AddMember/addMember.css';
import {useParams} from "react-router-dom"; 

import '../AddMember/addMember.css'
import { Redirect } from 'react-router-dom';


// Will need to get the idmembers from param and then get that user from database to confirm name before deletion
// const memberid = this.props.match.params.idmembers
// const member =
//     fetch('/api/form-submit-url', {
//         method: 'GET', 
//         body: memberid
//   });


function DeleteConfirmation() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [guardianNameFirst, setFirstNameG] = useState("");
    // const [guardianLastName, setLastNameG] = useState("");
    // const [guardianPhone, setPhone] = useState("");
    // const [membersAge, setAge] = useState(""); 

    const handleFirst = event => {
        setFirstName(event.target.value);
        console.log(firstName);
    };
    const handleLast = event => {
        setLastName(event.target.value);
        console.log(lastName);
    };
    // const handleFirstG = event => {
    //     setFirstNameG(event.target.value);
    //     console.log(guardianNameFirst);
    // };
    // const handleLastG = event => {
    //     setLastNameG(event.target.value);
    //     console.log(guardianLastName);
    // };
    // const handlePhone = event => {
    //     setPhone(event.target.value);
    //     console.log(guardianPhone);
    // };
    // const handleAge = event => {
    //     setAge(event.target.value);
    //     console.log(membersAge);
    // };
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
                <Col sm={1}></Col>
                <Col sm={10} className="text-center">
                    <h1>Delete {firstName + " " + lastName}</h1>
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
                            <input type="text" placeholder={firstName} name="firstName" className="my-2 inputData text-center" onChange={handleFirst} value={firstName} />
                        </Col>
                        <Col sm={6} className="text-left">
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