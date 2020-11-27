import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import './Matching.css';
import StudentCard from '../../components/StudentCard/StudentCard';
import MentorCard from '../../components/MentorCard/MentorCard';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";




export default function Matching() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [userIndex, setUserIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUser();
    }, []);


    function nextUser(userIndex) {
        // Ensure that the user index stays within our range of users
        if (userIndex >= users.length) {
        userIndex = 0;
        }
        setUser(users[userIndex]);
        setUserIndex(userIndex);
    }

    function previousUser(userIndex) {
        // Ensure that the user index stays within our range of users
        if (userIndex < 0) {
        userIndex = users.length - 1;
        }
        setUser(users[userIndex]);
        setUserIndex(userIndex);
    }

    function handleBtnClick(event) {
        const btnName = event.target.getAttribute("data-value");
        if (btnName === "next") {
            const newUserIndex = userIndex + 1;
            nextUser(newUserIndex);
        } else {
            const newUserIndex = userIndex - 1;
            previousUser(newUserIndex);
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
                <p>Loading...</p>
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
                                <Form.Control as="select">
                                    <option>Choose option...</option>
                                    <option>Javascript</option>
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
                        <div className="cardandArrowBox">
                            <ArrowLeftCircle className="arrowsize" data-value="back" onClick={handleBtnClick} />
                            <StudentCard />
                            <ArrowRightCircle className="arrowsize" data-value="next" onClick={handleBtnClick} />
                        </div>
                    </div> 
                </div>

                <div className="col-md-6" id="mentorbox">
                    <div className="findMentorBox">
                        <h1 style={{ color: "#5680E9", marginTop: ".5em" }}>Find a Mentor!</h1>
                        <Form style={{ maxWidth: "300px"}}>
                            <Form.Group controlId="studentSelect">
                                <Form.Label style={{ color: "#8860D0" }}>Filter</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose option...</option>
                                    <option>Javascript</option>
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
                        <div className="cardandArrowBox">
                            <ArrowLeftCircle className="arrowsize" style={{ color: "D8D8D8" }} data-value="back" onClick={handleBtnClick} />
                            <MentorCard />
                            <ArrowRightCircle className="arrowsize" style={{ color: "D8D8D8" }} data-value="next" onClick={handleBtnClick} />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
            )}
        </div>
    )
}
