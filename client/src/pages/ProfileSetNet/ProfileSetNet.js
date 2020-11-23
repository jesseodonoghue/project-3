import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import { Input, FormBtn } from '../../components/Form';
import './ProfileSetNet.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBFormInline, MDBForm } from "mdbreact";
import { AlignBottom, ArrowLeftCircle } from 'react-bootstrap-icons';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";


export default function ProfileSetNet() {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    let formObject = {};

    useEffect(() => {
        loadUser();
    }, []);

    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                setUser(res.data.user);
                return res.data.user;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function handleInputChange(event) {
        const { name, checked } = event.target;
        formObject = {...formObject, [name]: checked};
        console.log(formObject);
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (formObject) {
            const userID = user._id;
    
            API.updateProfile(userID, formObject)
                .then(res => {
                    setUser(res.data);
                })
                .catch(err => console.log(err));            
        }    
    };

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
                                <div className='button' id='setGenBtn'>
                                    <a href='/profilesetgen' style={{ color: 'white' }}>Personal Info</a>
                                </div>
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
                            <MDBCol className="javascript" md="4">JavaScript</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="jsMentor" onChange={handleInputChange} defaultChecked={user.jsMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="jsStudent" onChange={handleInputChange} defaultChecked={user.jsStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="html" md="4">HTML</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="htmlMentor" onChange={handleInputChange} defaultChecked={user.htmlMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="htmlStudent" onChange={handleInputChange} defaultChecked={user.htmlStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="css" md="4">CSS</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="cssMentor" onChange={handleInputChange} defaultChecked={user.cssMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="cssStudent" onChange={handleInputChange} defaultChecked={user.cssStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="nodejs" md="4">Node.js</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="nodejsMentor" onChange={handleInputChange} defaultChecked={user.nodejsMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="nodejsStudent" onChange={handleInputChange} defaultChecked={user.nodejsStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="express" md="4">Express</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="expressMentor" onChange={handleInputChange} defaultChecked={user.expressMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="expressStudent" onChange={handleInputChange} defaultChecked={user.expressStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="react" md="4">React</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="reactMentor" onChange={handleInputChange} defaultChecked={user.reactMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="reactStudent" onChange={handleInputChange} defaultChecked={user.reactStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="mongodb" md="4">MongoDB</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="mongodbMentor" onChange={handleInputChange} defaultChecked={user.mongodbMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="mongodbStudent" onChange={handleInputChange} defaultChecked={user.mongodbStudent} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol className="mysql" md="4">mySQL</MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox1" name="mysqlMentor" onChange={handleInputChange} defaultChecked={user.mysqlMentor} />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput type="checkbox" id="checkbox2" name="mysqlStudent" onChange={handleInputChange} defaultChecked={user.mysqlStudent} />
                            </MDBCol>
                        </MDBRow>                        
                    </MDBContainer>
                    <div id='skill-btn'>
                        <FormBtn style={{ color: '#5680e9' }} onClick={handleFormSubmit}>Save Changes</FormBtn>
                    </div>
                </div>
            </div>

        </>
    )
}

