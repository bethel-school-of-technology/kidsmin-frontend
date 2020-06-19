import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/homepage';
import EditMember from './Components/EditMember/editMember';
import DeleteMember from './Components/DeleteMember/deleteMember';
import AddMember from './Components/AddMember/addMember';
import AttendPage from './Components/AttendPage/attendPage';
import EditMemberDetails from './Components/EditMemberDetails/editMemberDetails';
import DeleteConfirmation from './Components/DeleteConfirmation/deleteConfirmation';
import Login from './Components/Authorization/Login/login';

import './App.css';





class App extends React.Component {
    render() {
        return (
            <Router>
                <Container fluid className="backgroundContainer">
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <Row>
                                <Col sm={12} className="navContainer text-center">
                                    <Row className="justify-content-center align-self-center sticky-top">
                                        <Col xs={2} sm={2} className="customLink"><Link className="links" to="/login"><h6>Login</h6></Link></Col>
                                        <Col xs={2} sm={2} className="customLink"><Link className="links" to="/members"><h6>Home</h6></Link></Col>
                                        <Col xs={2} sm={2} className="customLink"><Link className="links" to="/add"><h6>Create</h6></Link></Col>
                                        <Col xs={2} sm={2} className="customLink"><Link className="links" to="/edit"><h6>Edit</h6></Link></Col>
                                        <Col xs={2} sm={2} className="customLink"><Link className="links" to="/delete"><h6>Delete</h6></Link></Col>
                                        <Col xs={2} sm={2} className="customLink"><Link className="links" to="/attendance"><h6>Attend</h6></Link></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col xs={12} sm={10} className="customCol mt-5 mb-5">
                            <Switch>
                                <Route exact path="/edit" component={EditMember} />
                                <Route exact path="/add" component={AddMember} />
                                <Route exact path="/delete" component={DeleteMember} />
                                <Route path="/attendance" component={AttendPage} />
                                <Route path="/edit/:idmembers" component={EditMemberDetails} />
                                <Route path="/delete/:idmembers" component={DeleteConfirmation} />
                                <Route path="/members" component={HomePage} />
                                <Route default path="/login" component={Login} />
                            </Switch>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}
export default App;