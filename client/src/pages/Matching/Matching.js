import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import './Matching.css';
import StudentCard from '../../components/StudentCard/StudentCard';
import MentorCard from '../../components/MentorCard/MentorCard';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Loading from '../../components/Loading/Loading';




export default function Matching() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [userIndexStudent, setUserIndexStudent] = useState(0);
    const [userIndexMentor, setUserIndexMentor] = useState(0);
    const [loading, setLoading] = useState(false);
    const [student, setStudent] = useState([]);
    const [mentor, setMentor] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    
    function handleBtnClickStudent(event) {
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "next") {
            if (userIndexStudent === student.length - 1) {
                setUserIndexStudent(0);
            } else {
                setUserIndexStudent(userIndexStudent + 1);
            }
            console.log(userIndexStudent);
        } else {
            if (userIndexStudent === 0) {
                setUserIndexStudent(student.length - 1);
            } else {
                setUserIndexStudent(userIndexStudent - 1);
            }
            console.log(userIndexStudent);
        }
    }

    function handleBtnClickMentor(event) {
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "next") {
            if (userIndexMentor === mentor.length - 1) {
                setUserIndexMentor(0);
            } else {
                setUserIndexMentor(userIndexMentor + 1);
            }
            console.log(userIndexMentor);
        } else {
            if (userIndexMentor === 0) {
                setUserIndexMentor(mentor.length - 1);
            } else {
                setUserIndexMentor(userIndexMentor - 1);
            }
            console.log(userIndexMentor);
        }
    }

    function getMentors(event) {
        if (event.target.value === "Node.js") {
            let data = "Nodejs";
            API.getMentors(data)
                .then((mentors) => {
                    let tempArr = [];
                    tempArr = mentors.data;
                setMentor(tempArr);
            }) 
        } else {
            API.getMentors(event.target.value)
            .then((mentors) => {
                let tempArr = [];
                tempArr = mentors.data;
                console.log(tempArr);
                setMentor(tempArr);
            }) 
        }
    }

    function getStudents(event) {
        if (event.target.value === "Node.js") {
            let data = "Nodejs";
            API.getStudents(data)
                .then((students) => {
                    let tempArr = [];
                tempArr = students.data;
                setStudent(tempArr);
            })
        } else {
            API.getStudents(event.target.value)
            .then((students) => {
                let tempArr = [];
                tempArr = students.data;
                console.log(tempArr);
                setStudent(tempArr);
            }) 
        }
    }

    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(users => {
                setUsers(users.data);
                setUser(users.data[0]);
                return users.data;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return (
        <div>
            {loading && (
                <Loading />
            )}
            {!loading && (

        <div className="matchingbox">
            <div className="row" id="matchingrow" style={{ width: "100%"}}>
                <div className="col-md-6" id="studentbox">
                    <div className="findStudentBox">
                        <h1 style={{ color: "White", marginTop: ".5em" }}> Find a Student! </h1>
                        <Form style={{ maxWidth: "300px"}}>
                            <Form.Group controlId="studentSelect">
                                <Form.Label style={{ color: "white" }}>Filter</Form.Label>
                                <Form.Control as="select" onChange= {getStudents}>
                                    <option>Choose option...</option>
                                    <option>JavaScript</option>
                                    <option>HTML</option>
                                    <option>CSS</option>
                                    <option>jQuery</option>
                                    <option>Node.js</option>
                                    <option>Express</option>
                                    <option>React</option>
                                    <option>MongoDB</option>
                                    <option>mySQL</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        {student.length > 0 && (
                            <div className="cardandArrowBox">
                            <ArrowLeftCircle className="arrowsize" data-value="back" onClick={handleBtnClickStudent} />
                            <StudentCard currentStudent= {student[userIndexStudent]} />
                            <ArrowRightCircle className="arrowsize" data-value="next" onClick={handleBtnClickStudent} />
                        </div>
                        )}
                        {!student.length > 0 && (
                            <h6>Select a language to search for Students.</h6>
                        )}
                    </div> 
                </div>

                <div className="col-md-6" id="mentorbox">
                    <div className="findMentorBox">
                        <h1 style={{ color: "#5680E9", marginTop: ".5em" }}>Find a Mentor!</h1>
                        <Form style={{ maxWidth: "300px"}}>
                            <Form.Group controlId="studentSelect">
                                <Form.Label style={{ color: "#8860D0" }}>Filter</Form.Label>
                                <Form.Control as="select"  onChange= {getMentors}>
                                    <option>Choose option...</option>
                                    <option>JavaScript</option>
                                    <option>HTML</option>
                                    <option>CSS</option>
                                    <option>jQuery</option>
                                    <option>Node.js</option>
                                    <option>Express</option>
                                    <option>React</option>
                                    <option>MongoDB</option>
                                    <option>mySQL</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        {mentor.length > 0 && (
                        <div className="cardandArrowBox">
                        <ArrowLeftCircle className="arrowsize" style={{ color: "D8D8D8" }} data-value="back" onClick={handleBtnClickMentor} />
                        <MentorCard currentMentor= {mentor[userIndexMentor]}/>
                        <ArrowRightCircle className="arrowsize" style={{ color: "D8D8D8" }} data-value="next" onClick={handleBtnClickMentor} />
                    </div>
                        )}
                        {!mentor.length > 0 && (
                            <h6>Select a language to search for Mentors.</h6>
                        )}
                    </div> 
                </div>
            </div>
        </div>
            )}
        </div>
    )
}
