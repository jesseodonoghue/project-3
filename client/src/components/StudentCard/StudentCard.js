import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfilePic from '../../assets/defaultprofilepic.svg';
import './StudentCard.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PersonPlusFill, PersonDashFill } from 'react-bootstrap-icons';
import API from '../../utils/API';



export default function StudentCard({currentStudent, currentUser}) {

    const [user, setUser] = useState();

    function connect() {
        let tempObj = {
            mentoring: []
        };
        let studentObj = {
            learningFrom: []
        };

        tempObj.mentoring = currentUser.mentoring;
        tempObj.mentoring.push(currentStudent._id);
        studentObj.learningFrom = currentStudent.learningFrom;
        studentObj.learningFrom.push(currentUser._id);

        API.updateProfile(currentUser._id, tempObj)
        .then(res => {
            setUser(res.data);
            API.updateProfile(currentStudent._id, studentObj);
            return res.data;
        })
    }

    function disconnect() {
        let tempUserObj = {
            mentoring: []
        };
        let tempStudentObj = {
            learningFrom: []
        };


        // Getting User information
        tempUserObj.mentoring = currentUser.mentoring;

        const tempUserArray = tempUserObj.mentoring;

        let userIndex =  tempUserArray.indexOf(currentStudent._id);

        // // Getting Student information
        tempStudentObj.learningFrom = currentStudent.learningFrom;

        const tempStudentArray = currentStudent.learningFrom;

        let studentIndex = tempStudentArray.indexOf(currentUser._id);


        // // Removing specific Ids for each array
        tempUserArray.splice(userIndex, 1);
        tempStudentArray.splice(studentIndex, 1);

        tempUserObj.mentoring = tempUserArray;
        tempStudentObj.learningFrom = tempStudentArray;


        API.updateProfile(currentUser._id, tempUserObj)
        .then(res => {
            setUser(res.data);
            API.updateProfile(currentStudent._id, tempStudentObj)
            return res.data;
        })
    }


    function getSkills(user) {
        const tempArr = [];

        if(user.jsMentor === true) {
            tempArr.push("JavaScript");
        }
        if(user.htmlMentor === true) {
            tempArr.push("HTML");
        } 
        if(user.cssMentor === true) {
            tempArr.push("CSS");
        }
        if(user.nodejsMentor === true) {
            tempArr.push("Node.js");
        }
        if(user.expressMentor === true) {
            tempArr.push("Express");
        }
        if(user.reactMentor === true) {
            tempArr.push("React");
        }
        if(user.mongodbMentor === true) {
            tempArr.push("MongoDB");
        }
        if(user.mysqlMentor === true) {
            tempArr.push("mySQL");
        }

        // console.log(tempArr);
        return (
            <ul>
                {tempArr.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
            </ul>
        )
    }

    return (
        <Card id="studentCardStyle" style={{ color: "black", textAlign: "center", alignItems: "center" }}>
            {currentStudent.image === "" && (
                <Card.Img variant="top" src={ProfilePic} style={{ maxHeight: "200px", marginTop: "1em", padding: "20px"}} />
            )}
            {currentStudent.image !== "" && (
                <Card.Img variant="top" src={currentStudent.image} style={{ maxHeight: "200px", maxWidth: "200px", borderRadius: "50%", marginTop: "1em", padding: "20px"}} />
            )}
            
            <Card.Body>
                <Card.Title>
                    <div className="profileconnectbtnbox">                        
                        <h3>{currentStudent.firstName} {currentStudent.lastName}</h3>
                        {currentUser.mentoring.indexOf(currentStudent._id) === -1 && (
                            <Button style={{marginLeft: "10px", marginBottom: ".5rem"}} variant="secondary" className="connectbtn" onClick={() => {connect()}} >
                                <PersonPlusFill style={{ width: "100%", height: "100%"}}/>
                            </Button>
                        )}
                        {currentUser.mentoring.indexOf(currentStudent._id) !== -1 && (
                            <Button style={{marginLeft: "10px", marginBottom: ".5rem"}} variant="secondary" className="connectbtn" onClick={() => {disconnect()}}>
                                <PersonDashFill style={{ color: "#C93636", width: "100%", height: "100%" }}/>
                            </Button>
                        )}
                    </div>
                </Card.Title>
                {/* <Card.Text> */}
                    {/* <div className="bulletsforCard">
                        {getSkills(currentStudent)}
                    </div> */}
                {/* </Card.Text> */}
            </Card.Body>
            <Link style={{width: "100%"}} to={{
                pathname: "/user",
                state: {
                    userInfo: currentStudent
                }
            }}>
                <Button variant="primary" className="profileBtn">Go to Profile</Button>
            </Link>
        </Card>
    )
}