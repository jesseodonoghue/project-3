import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfilePic from '../../assets/defaultprofilepic.svg';
import './StudentCard.css';
import { PersonPlusFill } from 'react-bootstrap-icons';



export default function StudentCard() {
    return (
        <Card id="studentCardStyle" style={{ color: "black", textAlign: "center" }}>
            <Card.Img variant="top" src={ProfilePic} style={{ maxHeight: "230px", marginTop: "1em", padding: "20px"}} />
            <Card.Body>
                <Card.Title>
                    <div className="profileconnectbtnbox">
                        FirstName LastName  
                        <Button variant="secondary" className="connectbtn">
                            <PersonPlusFill/>
                        </Button>
                    </div>
                </Card.Title>
                <Card.Text>
                    Notable Skill
                </Card.Text>
            </Card.Body>
            <Button variant="primary" className="profileBtn">Go to Profile</Button>
        </Card>
    )
}