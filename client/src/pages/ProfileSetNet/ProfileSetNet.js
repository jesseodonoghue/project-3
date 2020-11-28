import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import { Input, FormBtn } from '../../components/Form';
import './ProfileSetNet.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBFormInline, MDBForm } from "mdbreact";
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Notification from '../../components/Notification/index';


export default function ProfileSetNet() {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [formObject, setFormObject ] = useState({});

    //Toast Alert Hook
    const [show, setShow] = useState(false);


    useEffect(() => {
        loadUser();
    }, []);

    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                const { data: { user: { jsMentor, jsStudent, htmlMentor, htmlStudent, cssMentor, cssStudent, jqueryMentor, jqueryStudent, nodejsMentor, nodejsStudent, expressMentor, expressStudent, reactMentor, reactStudent, mongodbMentor, mongodbStudent, mysqlMentor, mysqlStudent }}} = res;
                setUser(res.data.user);
                setFormObject({ jsMentor, jsStudent, htmlMentor, htmlStudent, cssMentor, cssStudent, jqueryMentor, jqueryStudent, nodejsMentor, nodejsStudent, expressMentor, expressStudent, reactMentor, reactStudent, mongodbMentor, mongodbStudent, mysqlMentor, mysqlStudent });
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
        console.log(event);
        const { name, checked } = event.target;
        setFormObject({...formObject, [name]: checked});
        console.log(formObject);
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (formObject) {
            const userID = user._id;
    
            API.updateProfile(userID, formObject)
                .then(res => {
                    setUser(res.data);
                    setShow(true);
                })
                .catch(err => console.log(err));            
        }    
    };

    return (

        <div className="container-flex" style={{ height: "100%", overflowX: "hidden"}}>
            <div className="row" style={{ width: "100%", margin: "0px"}}>
                <div className="col-md-3" id="sidebarContainer" style={{ padding: "0px"}}>
                    <Sidebar/>
                </div>    

                <div className="col-md-9">
                    <div className="updateSkills">
                        <h3 style={{ color: '#5680E9', marginTop: "2em", marginBottom: "1.5em" }}>Update Your Skills</h3>

                        <MDBContainer className="checklistGrid" >
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol md="4">Skill</MDBCol>
                                <MDBCol md="4">Mentor</MDBCol>
                                <MDBCol md="4">Student</MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="javascript" md="4">JavaScript</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="jsMentor" onClick={handleInputChange} checked={formObject.jsMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="jsStudent" onClick={handleInputChange} checked={formObject.jsStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="html" md="4">HTML</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="htmlMentor" onChange={handleInputChange} checked={formObject.htmlMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="htmlStudent" onChange={handleInputChange} checked={formObject.htmlStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="css" md="4">CSS</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="cssMentor" onChange={handleInputChange} checked={formObject.cssMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="cssStudent" onChange={handleInputChange} checked={formObject.cssStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="jquery" md="4">jQuery</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="jqueryMentor" onChange={handleInputChange} checked={formObject.jqueryMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="jqueryStudent" onChange={handleInputChange} checked={formObject.jqueryStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="nodejs" md="4">Node.js</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="nodejsMentor" onChange={handleInputChange} checked={formObject.nodejsMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="nodejsStudent" onChange={handleInputChange} checked={formObject.nodejsStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="express" md="4">Express</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="expressMentor" onChange={handleInputChange} checked={formObject.expressMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="expressStudent" onChange={handleInputChange} checked={formObject.expressStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="react" md="4">React</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="reactMentor" onChange={handleInputChange} checked={formObject.reactMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="reactStudent" onChange={handleInputChange} checked={formObject.reactStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="mongodb" md="4">MongoDB</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="mongodbMentor" onChange={handleInputChange} checked={formObject.mongodbMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="mongodbStudent" onChange={handleInputChange} checked={formObject.mongodbStudent} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ flexDirection: "row", flexWrap: "nowrap"}}>
                                <MDBCol className="mysql" md="4">mySQL</MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox1" name="mysqlMentor" onChange={handleInputChange} checked={formObject.mysqlMentor} />
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput type="checkbox" id="checkbox2" name="mysqlStudent" onChange={handleInputChange} checked={formObject.mysqlStudent} />
                                </MDBCol>
                            </MDBRow>                        
                        </MDBContainer>
                        <Notification 
                            style={{
                                    top: 400,
                                
                                }}
                                    action={() => setShow(true)}
                                    close={() => setShow(false)}
                                    show={show}
                                    delay={3000}
                                />

                        <div id='skill-btn'>
                            <FormBtn style={{ color: '#5680e9' }} onClick={handleFormSubmit}>Save Changes</FormBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

