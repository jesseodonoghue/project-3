import React from 'react';
import Form from 'react-bootstrap/Form';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import './Matching.css';
import StudentCard from '../../components/StudentCard/StudentCard';
import MentorCard from '../../components/MentorCard/MentorCard';




export default function Matching() {
    return (
        <div className="matchingbox">
            <div className="row" style={{ width: "100%"}}>
                <div className="col-md-6">
                    <div className="findStudentBox">
                        <h1 style={{ color: "White", marginTop: ".5em" }}> Find a Student! </h1>
                        <Form style={{ maxWidth: "300px"}}>
                            <Form.Group controlId="studentSelect">
                                <Form.Label style={{ color: "white" }}>Filter</Form.Label>
                                <Form.Control as="select">
                                    <option>Javascript</option>
                                    <option>JQuery</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="cardandArrowBox">
                            <ArrowLeftCircle className="arrowsize"/>
                            <StudentCard />
                            <ArrowRightCircle className="arrowsize" />
                        </div>
                    </div> 
                </div>

                <div className="col-md-6">
                    <div className="findMentorBox">
                        <h1 style={{ color: "#5680E9", marginTop: ".5em" }}>Find a Mentor!</h1>
                        <Form style={{ maxWidth: "300px"}}>
                            <Form.Group controlId="studentSelect">
                                <Form.Label style={{ color: "#8860D0" }}>Filter</Form.Label>
                                <Form.Control as="select">
                                    <option>Javascript</option>
                                    <option>JQuery</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="cardandArrowBox">
                            <ArrowLeftCircle className="arrowsize" style={{ color: "D8D8D8" }}/>
                            <MentorCard />
                            <ArrowRightCircle className="arrowsize" style={{ color: "D8D8D8" }}/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
