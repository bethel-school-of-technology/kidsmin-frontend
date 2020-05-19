import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './attendPage.css';

const members = [
    {id: "1", fName: "Steve", lName: "Dot", attend: true},
    {id: "2", fName: "Ashley", lName: "Rose", attend: false},
    {id: "3", fName: "John", lName: "Doe", attend: true},
    {id: "4", fName: "Nate", lName: "McCollam", attend: false}
]

function AttendPage() {
    return (
        <Container fluid>
            <Row className="mt-5">
                <Col sm={3} className="text-center">
                    <div className="customShape2 layer1">
                        <h2 className="layer2">3</h2>
                        {/* This number should represent how many members are attending */}
                    </div>
                </Col>
                <Col sm={3} className="text-left mt-5">
                    <h1>Present</h1>
                </Col>
                <Col sm={3} className="text-right mt-5">
                    <h1>Absent</h1>
                </Col>
                <Col sm={3} className="text-center">
                    <div className="customShape2 layer1 text-center">
                        <h2 className="layer2">12</h2>
                        {/* This number should represent how many members are absent */}
                    </div>
                </Col>
                <Col sm={12} className="divider"></Col>
            </Row>
            <Row>
                {/* Attendance Col */}
                <Col sm={6}>
                    {members.filter(member => member.attend === true).map(attending => {
                        return(
                            <Row key={attending.id} className="data mt-5">
                                <Col sm={12} className="text-center namePlate">{attending.fName + " " + attending.lName}</Col>
                            </Row>
                        );
                    })}
                </Col>

                {/* Absent Col */}
                <Col sm={6}>
                    {members.filter(member => member.attend === false).map(absent => {
                        return(
                            <Row key={absent.id} className="data mt-5">
                                <Col sm={12} className="text-center namePlate">{absent.fName + " " + absent.lName}</Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default AttendPage;