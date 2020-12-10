import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfilePic from '../../assets/defaultprofilepic.svg';
import './MentorCard.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PersonPlusFill, PersonDashFill } from 'react-bootstrap-icons';
import API from '../../utils/API';



export default function MentorCard( {currentMentor, currentUser} ) {

    const [user, setUser] = useState();

    function connect() {
        let tempObj = {
            learningFrom: []
        };
        let mentorObj = {
            mentoring: []
        };

        tempObj.learningFrom = currentUser.learningFrom;
        tempObj.learningFrom.push(currentMentor._id);
        mentorObj.mentoring = currentMentor.mentoring;
        mentorObj.mentoring.push(currentUser._id);

        API.updateProfile(currentUser._id, tempObj)
        .then(res => {
            setUser(res.data);
            API.updateProfile(currentMentor._id, mentorObj);
            return res.data;
        })
    }
    
    function disconnect() {
        let tempUserObj = {
            learningFrom: []
        };
        let tempMentorObj = {
            mentoring: []
        };

        tempUserObj.learningFrom = currentUser.learningFrom;

        const tempUserArray = tempUserObj.learningFrom;

        let userIndex =  tempUserArray.indexOf(currentMentor._id);

        // // Getting Mentor information
        tempMentorObj.mentoring = currentMentor.mentoring;

        const tempMentorArray = currentMentor.mentoring;

        let mentorIndex = tempMentorArray.indexOf(currentUser._id);

        // // Removing specific Ids for each array
        tempUserArray.splice(userIndex, 1);
        tempMentorArray.splice(mentorIndex, 1);

        tempUserObj.learningFrom = tempUserArray;
        tempMentorObj.mentoring = tempMentorArray;

        API.updateProfile(currentUser._id, tempUserObj)
        .then(res => {
            setUser(res.data);
            API.updateProfile(currentMentor._id, tempMentorObj)
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
        <Card id="mentorCardStyle" style={{color: "black", textAlign: "center", alignItems: "center" }}>
            {currentMentor.image === "" && (
                <Card.Img variant="top" src={ProfilePic} style={{ maxHeight: "200px", marginTop: "1em", padding: "20px"}} />
            )}
            {currentMentor.image !== "" && (
                <Card.Img variant="top" src={currentMentor.image} style={{ maxHeight: "200px", maxWidth: "200px", borderRadius: "50%", marginTop: "1em", padding: "20px"}} />
            )}
            <Card.Body>
                <Card.Title>
                    <div className="profileconnectbtnbox">
                        <h3>{currentMentor.firstName} {currentMentor.lastName}</h3>
                        {currentUser.learningFrom.indexOf(currentMentor._id) === -1 && (
                            <Button style={{marginLeft: "10px", marginBottom: ".5rem"}} variant="secondary" className="connectbtn" onClick={() => {connect()}} >
                                <PersonPlusFill style={{ width: "100%", height: "100%"}}/>
                            </Button>
                        )}
                        {currentUser.learningFrom.indexOf(currentMentor._id) !== -1 && (
                            <Button style={{marginLeft: "10px", marginBottom: ".5rem"}} variant="secondary" className="connectbtn" onClick={() => {disconnect()}} >
                                <PersonDashFill style={{ color: "#8860D0", width: "100%", height: "100%" }}/>
                            </Button>
                        )}
                    </div>
                </Card.Title>
                {/* <Card.Text> */}
                    {/* <div className="bulletsforCard">
                        {getSkills(currentMentor)}
                    </div> */}
                {/* </Card.Text> */}
            </Card.Body>
            <Link style={{width: "100%"}} to={{
                pathname: "/user",
                state: {
                    userInfo: currentMentor
                }
            }}>
                <Button variant="primary" className="profileBtn">Go to Profile</Button>
            </Link>
        </Card>
    )
}