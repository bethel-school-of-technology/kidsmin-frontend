import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import HomePage from '../HomePage/homepage';
import EditMember from '../EditMember/editMember';

import './mainView.css';

function MainView() {
    return (
    <Container fluid className="backgroundContainer">
        <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
                <Row>
                    <Col sm={12} className="navContainer text-center">
                        <Row className="justify-content-center align-self-center">
                            <Col sm={1}></Col>
                            <Col sm={2} className="customLink">Home</Col>
                            <Col sm={2} className="customLink">Create</Col>
                            <Col sm={2} className="customLink">Edit</Col>
                            <Col sm={2} className="customLink">Delete</Col>
                            <Col sm={2} className="customLink">Attend</Col>
                            <Col sm={1}></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col sm={1}></Col>
        </Row>
        <Row>
            <Col sm={1}></Col>
            <Col sm={10} className="customCol mt-5">
                {/* Router should render various views here. Default should be homepage. */}
                <EditMember />
            </Col>
            <Col sm={1}></Col>
        </Row>
    </Container>
    );
  }
  
  export default MainView;