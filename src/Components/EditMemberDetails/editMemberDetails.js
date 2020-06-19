import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../AddMember/addMember.css';
import {useParams} from "react-router-dom"; 
function EditMemberDetails() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [guardianNameFirst, setFirstNameG] = useState("");
    const [guardianLastName, setLastNameG] = useState("");
    const [guardianPhone, setPhone] = useState("");
    const [membersAge, setAge] = useState(""); 

    const handleFirst = event => {
        setFirstName(event.target.value);
        console.log(firstName);
    };
    const handleLast = event => {
        setLastName(event.target.value);
        console.log(lastName);
    };
    const handleFirstG = event => {
        setFirstNameG(event.target.value);
        console.log(guardianNameFirst);
    };
    const handleLastG = event => {
        setLastNameG(event.target.value);
        console.log(guardianLastName);
    };
    const handlePhone = event => {
        setPhone(event.target.value);
        console.log(guardianPhone);
    };
    const handleAge = event => {
        setAge(event.target.value);
        console.log(membersAge);
    };
    let params = useParams(); 
    // let memberId = this.props.match.params.idmembers; 
    const onSubmitEdit = event => {
        
        event.preventDefault();
        fetch("http://localhost:3000/members/" + params.idmembers, {

            method: "PUT",

            body: JSON.stringify({
                firstName,
                lastName,
                guardianNameFirst,
                guardianLastName,
                guardianPhone,
                membersAge




            }),

            headers: {
                "Content-type": 'application/json'
            }
        }).then(res => {
            console.log(res); 
            if (res.status === 200) {
                alert("Edited"); 
            }
        })

    }





// const EditMemberDetails = () => {
    return (
        <Container fluid>
            <Row className="mb-5">
                <Col sm={2}></Col>
                <Col sm={8} className="text-center customHeader">
                    <h1 className="">Edit {firstName}'s Info</h1>
                </Col>
                <Col sm={2}></Col>
            </Row>
        {/* <form className="text-center" onSubmit={e => this.submit(e)}></form> */}
            <Row className="mt-5 text-center">
                <Col sm={12} className="form-group text-center">
                    <Row className="text-center">
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle text-center">Child's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder={firstName} className="my-2 inputData text-center" onChange={handleFirst} value={firstName} />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder={lastName} className="my-2 inputData text-center" onChange={handleLast} value={lastName} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="number" placeholder={membersAge} className="inputData text-center my-2" onChange={handleAge} value={membersAge} />
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
                            <input type="text" placeholder={guardianNameFirst} className="my-2 inputData text-center" onChange={handleFirstG} value={guardianNameFirst} />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder={guardianLastName} className="my-2 inputData text-center" onChange={handleLastG} value={guardianLastName} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="phone" placeholder={guardianPhone} className="my-2 inputData text-center" onChange={handlePhone} value={guardianPhone} />
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    {/* THis info is if we add a 2nd guardian */}
                    {/* <br></br>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <h3 className="dividerTitle">Guardian's Info</h3>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={6} className="text-right">
                            <input type="text" placeholder={members.guardianNameFirst2} className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={6} className="text-left">
                            <input type="text" placeholder={members.guardianNameLast2} className="my-2 inputData text-center" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className=""></Col>
                        <Col sm={8} className="text-center">
                            <input type="phone" placeholder={members.guardianPhone2} className="my-2 inputData text-center" />
                        </Col>
                        <Col sm={2}></Col>
                    </Row> */}
                    <br></br>
                    <Row className="mt-5">
                        <Col sm={4} className=""></Col>
                        <Col sm={4} className="my-2 text-center">
                            <button type="submit" className="formSubmitBtn" onClick={onSubmitEdit}>Update</button>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}
export default EditMemberDetails;