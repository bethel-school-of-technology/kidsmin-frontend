import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './HomePage/homepage';
import EditMember from './EditMember/editMember';
import DeleteMember from './DeleteMember/deleteMember';
import AddMember from './AddMember/addMember';
import AttendPage from './AttendPage/attendPage';
import EditMemberDetails from './EditMemberDetails/editMemberDetails';
import DeleteConfirmation from './DeleteConfirmation/deleteConfirmation';

import './App.css';


function App() {
    return (
    <Router>
    <Container fluid className="backgroundContainer">
        <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
                <Row>
                    <Col sm={12} className="navContainer text-center">
                        <Row className="justify-content-center align-self-center">
                            <Col sm={1}></Col>
                            <Col sm={2} className="customLink"><Link className="links" to="/"><h7>Home</h7></Link></Col>
                            <Col sm={2} className="customLink"><Link className="links" to="/add"><h7>Create</h7></Link></Col>
                            <Col sm={2} className="customLink"><Link className="links" to="/edit"><h7>Edit</h7></Link></Col>
                            <Col sm={2} className="customLink"><Link className="links" to="/delete"><h7>Delete</h7></Link></Col>
                            <Col sm={2} className="customLink"><Link className="links" to="/attendance"><h7>Attend</h7></Link></Col>
                            <Col sm={1}></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col sm={1}></Col>
        </Row>
        <Row>
            <Col sm={1}></Col>
            <Col sm={10} className="customCol mt-5 mb-5">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/edit" component={EditMember} />
                <Route exact path="/add" component={AddMember} />
                <Route exact path="/delete" component={DeleteMember} />
                <Route path="/attendance" component={AttendPage} />
                <Route path="/edit/:idmembers" component={EditMemberDetails} />
                <Route path="/delete/:idmembers" component={DeleteConfirmation} />
            </Col>
            <Col sm={1}></Col>
        </Row>
    </Container>
    </Router>
    );
  }
  
  export default App;