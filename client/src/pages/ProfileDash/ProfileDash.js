import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './profileDash.css';
import ListItem from '../../components/List/ListItem.js';
import '../../components/List/List.css';
import Modal from 'react-bootstrap/Modal';
import bgImg from '../../assets/profilebg.svg';

export default function ProfileDash() {
    //get routes and stuff here
    return (
        <div>
            <div className="box">
                <Jumbotron fluid style={{ height: "250px", marginBottom: "0px", position: "relative", width: "100%", backgroundImage: `url(${bgImg})`}}>
                    <div className="profileCard"style={{ zIndex: "1" }}>
                        <div className="profileContent">
                            <div className="profileImg"></div>
                            <h3>John Doe</h3>
                            <p>Bio about person</p>
                            <p>LinkedIn:</p>
                            <p>GitHub:</p>
                            <hr/>
                            <h3>Skills</h3>
                            <ul>
                                <li>Javascript</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                        </div>
                    </div>
                </Jumbotron>
                <div className="listContainerMain">
                    <div className="listContainerInner">
                        <h3 style={{ margin: "10px"}}>Saved Posts</h3>
                        <div className="listItems overflow-auto">
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                            <ListItem/>
                        </div>
                        <div className="createPostBar">Create Post +</div>
                    </div>
                </div>
            </div>

            {/* <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal> */}
            
        </div>
    )
}
