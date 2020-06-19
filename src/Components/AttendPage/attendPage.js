import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './attendPage.css';


function AttendPage() {

    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/members')
        .then(data => data.json())
        .then(members => setMembers(members))
    }, [])

    return (
        <Container fluid>
            <Row className="mt-5">
                <Col sm={3} className="text-center">
                    <div className="customShape2 layer1">
                        <h2 className="layer2">2</h2>
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
                        <h2 className="layer2">2</h2>
                        {/* This number should represent how many members are absent */}
                    </div>
                </Col>
                <Col sm={12} className="divider"></Col>
            </Row>
            <Row className="mt-5">
                {/* Attendance Col */}
                <Col sm={6}>
                    {members.filter(member => member.attendance === true).map(attending => {
                        return(
                            <Row key={attending.idmembers} className="namePlate mt-5 mb-3">
                                <Col sm={12} className="text-center mt-3">
                                    <h4>{attending.firstName + " " + attending.lastName}</h4>
                                </Col>
                            </Row>
                        );
                    })}
                </Col>

                {/* Absent Col */}
                <Col sm={6}>
                    {members.filter(member => member.attendance === false).map(absent => {
                        return(
                            <Row key={absent.idmembers} className="namePlate mt-5 mb-3">
                                <Col sm={12} className="text-center mt-3">
                                    <h4>{absent.firstName + " " + absent.lastName}</h4>
                                </Col>
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default AttendPage;