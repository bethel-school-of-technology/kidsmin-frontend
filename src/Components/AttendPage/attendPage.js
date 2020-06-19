import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './attendPage.css';


const members = [
    {id: "1", fName: "Steve", lName: "Dot", attend: true},
    {id: "2", fName: "Ashley", lName: "Rose", attend: false},
    {id: "3", fName: "John", lName: "Doe", attend: false},
    {id: "4", fName: "Nate", lName: "McCollam", attend: true}
]


function AttendPage() {
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch("https://localhost:3000/members")
        .then(data => data.json())
        .then(count => {
            let c = count.length;
            setCount(c)
        })
    }, [])


    // const [attendanceCount, setAttendanceCount] = useState([]);

    // useEffect(() => {
    //     setAttendanceCount(members.filter(
    //         attendanceFiltered => attendanceFiltered.attend === true)
    //         .then(count => {
    //             let c = count.length;
    //             setAttendanceCount(c);
    //         })
    //     )   
    // }, [])

    // members.filter(member => member.attend === true).map(attendingCount => {
    //     let ac = attendingCount.length;
    //     setAttendanceCount(ac);
    // })
    
    // useEffect(() => {
    //     setFilteredCountries(
    //       countries.filter(
    //         country => country
    //           .name
    //           .toLowerCase()
    //           .includes(countriesFilter.toLowerCase())));
    //   }, [countries, countriesFilter]);

    return (
        <Container fluid>
            <Row className="mt-5">
                <Col xs={3} sm={3} className="text-center">
                    <div className="customShape2 layer1">
                        <h2 className="layer2">{count}</h2>
                        {/* This number should represent how many members are attending */}
                    </div>
                </Col>
                <Col xs={3} sm={3} className="text-left mt-5">
                    <h1 className="smallTitle">Present</h1>
                </Col>
                <Col xs={3} sm={3} className="text-right mt-5">
                    <h1 className="smallTitle">Absent</h1>
                </Col>
                <Col xs={3} sm={3} className="text-center">
                    <div className="customShape2 layer1 text-center">
                        <h2 className="layer2">2</h2>
                        {/* This number should represent how many members are absent */}
                    </div>
                </Col>
                <Col sm={12} className="divider"></Col>
            </Row>
            <Row className="mt-5">
                {/* Attendance Col */}
                <Col xs={6}>
                    {members.filter(member => member.attend === true).map(attending => {
                        return(
                            <Row key={attending.id} className="namePlate mt-5 mb-3">
                                <Col sm={12} className="text-center mt-3">
                                    <h4 className="smallerFont">{attending.fName + " " + attending.lName}</h4>
                                </Col>
                            </Row>
                        );
                    })}
                </Col>

                {/* Absent Col */}
                <Col xs={6}>
                    {members.filter(member => member.attend === false).map(absent => {
                        return(
                            <Row key={absent.id} className="namePlate mt-5 mb-3">
                                <Col sm={12} className="text-center mt-3">
                                    <h4 className="smallerFont">{absent.fName + " " + absent.lName}</h4>
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