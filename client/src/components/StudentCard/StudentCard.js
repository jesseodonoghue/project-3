import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfilePic from '../../assets/defaultprofilepic.svg';
import './StudentCard.css';
import { PersonPlusFill } from 'react-bootstrap-icons';



export default function StudentCard({currentStudent}) {

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
        <Card id="studentCardStyle" style={{ color: "black", textAlign: "center" }}>
            <Card.Img variant="top" src={ProfilePic} style={{ maxHeight: "230px", marginTop: "1em", padding: "20px"}} />
            <Card.Body>
                <Card.Title>
                    <div className="profileconnectbtnbox">
                        <h3>{currentStudent.firstName} {currentStudent.lastName}</h3>
                        <Button variant="secondary" className="connectbtn">
                            <PersonPlusFill/>
                        </Button>
                    </div>
                </Card.Title>
                {/* <Card.Text> */}
                    <div>
                     {getSkills(currentStudent)}
                    </div>
                {/* </Card.Text> */}
            </Card.Body>
            <Button variant="primary" className="profileBtn">Go to Profile</Button>
        </Card>
    )
}