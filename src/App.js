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
            
           
           
           
            //function verifyLogin() { 
            // fetch("http://localhost:3000/users/profile").then(
            //     res => {
            //         if(res.user) {
            //             return (





            // Routing
            < Router >
            <Login />
                <Container fluid className="backgroundContainer">
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <Row>
                                <Col sm={12} className="navContainer text-center">
                                    <Row className="justify-content-center align-self-center sticky-top">
                                        <Col sm={1}></Col>
                                        <Col sm={2} className="customLink"><Link className="links" to="/members"><h7>Home</h7></Link></Col>
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
                            <Switch>
                                <Route exact path="/edit" component={EditMember} />
                                <Route exact path="/add" component={AddMember} />
                                <Route exact path="/delete" component={DeleteMember} />
                                <Route path="/attendance" component={AttendPage} />
                                <Route path="/edit/:idmembers" component={EditMemberDetails} />
                                <Route path="/delete/:idmembers" component={DeleteConfirmation} />
                                <Route default path="/members" component={HomePage} />
                                <Route path="/*" component={() => "404 NOT FOUND"} />
                            </Switch>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </Router >
        )              


    }

}





export default App;
