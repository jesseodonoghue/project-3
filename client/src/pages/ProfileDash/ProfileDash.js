import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './profileDash.css';
import ListItem from '../../components/List/ListItem.js';
import '../../components/List/List.css';
import Modal from 'react-bootstrap/Modal';
import bgImg from '../../assets/profilebg.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Paperclip } from 'react-bootstrap-icons';
import ProfilePic from '../../assets/defaultprofilepic.svg';
import AUTH from "../../utils/AUTH";


export default function ProfileDash() {
    //get routes and stuff here

    // User information is not being pulled :(
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [skillsArr, setSkillsArr] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);


    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                setUser(res.data.user);
                console.log(res.data.user);
                return res.data.user;
            })
            .then((userData) => {
                // console.log(userData);
                setSkillsArr(getSkills(userData));
                // console.log(skillsArr);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
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
        return tempArr;
    }

   

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Create New Post
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="tagSelect">
                        <Form.Label>Select Tag</Form.Label>
                        <Form.Control as="select">
                        <option>Javascript</option>
                        <option>JQuery</option>
                        <option>Ajax</option>
                        <option>Mongo</option>
                        <option>React</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="postTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="post" placeholder="Post Title" />
                    </Form.Group>

                    <Form.Group controlId="postContent">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button>
                    <Paperclip />
                    Attach File
                </Button>
                
                <Button onClick={props.onHide}>Submit Post</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    //states for modal  
    const [modalShow, setModalShow] = React.useState(false);
      

    return (
        <div>
            {loading && (
                <p>Loading...</p>
            )}
            {!loading && (
                <div className="box">
                    <Jumbotron fluid style={{ height: "250px", marginBottom: "0px", position: "relative", width: "100%", backgroundImage: `url(${bgImg})`}}>
                        <div className="profileCard"style={{ zIndex: "1" }}>
                            <div className="profileContent">
                                <div className="profileImg"></div>
                                <h3>{user.firstName} {user.lastName}</h3>
                                <p>{user.bio}</p>
                                <p>LinkedIn: {user.linkedin}</p>
                                <p>GitHub: {user.github}</p>
                                <hr/>
                                <h3>Skills</h3>
                                {skillsArr.length ? (
                                    <ul>
                                        {skillsArr.map((skill, i) => (
                                            <li key={i}>{skill}</li>
                                        ))}
                                    </ul>
                                ) : (
                                <p>No skills added yet</p>
                                )}
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
                            <Button className="createPostBar" id="createPostBtn" onClick={() => setModalShow(true)} >Create New Post +</Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}
