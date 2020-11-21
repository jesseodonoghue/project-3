import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import { Input, FormBtn } from '../../components/Form';
import ProfileSetGen from '../../pages/ProfileSetGen';
import './ProfileSetNet.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBFormInline, MDBForm } from "mdbreact";
import { AlignBottom, ArrowLeftCircle } from 'react-bootstrap-icons';


export default function ProfileSetNet() {
    return (

        <>
            <div className="container-flex">
                <Sidebar width={300} height={'100vh'}>
                    <Container>
                        <Col size="md-3">
                            <h4 style={{ color: 'white', marginTop: '2em' }}>SETTINGS</h4>
                        </Col>
                        <Col className="text-right" size="md-4" style={{ marginTop: "3em", color: 'white' }}>
                            {/* using short syntax for React fragment with <></> */}
                            <> <h5>GENERAL</h5>
                                <hr />
                            <Link className='nav-link' to='/profilesetgen'>
                                <h6 style={{ color: 'white' }}>Personal Info</h6>
                            </Link>
                            </>
                            <><h5 style={{ marginTop: "1em" }}>NETWORKING</h5>
                                <hr />
                                <Link className='nav-link' to='/profilesetnet'>
                                    <h6 style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Skills Page</h6>
                                </Link>
                            </>
                        </Col>
                    </Container>
                </Sidebar>
                <div className="updateSkills">
                    <h1 style={{ color: '#5680E9' }}>Update Your Skills</h1>

                    <MDBContainer className="checklistGrid" >
                        <MDBRow>
                            <MDBCol md="4">Skill</MDBCol>
                            <MDBCol md="4">Mentor</MDBCol>
                            <MDBCol md="4">Student</MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="skill-title" md="4">Whatever Skill</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="skill-title" md="4">Whatever Skill</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="skill-title" md="4">Whatever Skill</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="skill-title" md="4">Whatever Skill</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div id='skill-btn'>
                        <FormBtn style={{ color: '#5680e9' }}>Save Changes</FormBtn>
                    </div>
                </div>
            </div>

        </>
    )
}

