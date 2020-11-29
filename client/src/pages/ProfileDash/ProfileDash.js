import React, { useState, useEffect, useRef } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './profileDash.css';
import ListItem from '../../components/List/ListItem.js';
import FollowListMentor from '../../components/FollowListMentor/FollowListMentor.js';
import FollowListStudent from '../../components/FollowListMentor/FollowListMentor.js';
import '../../components/List/List.css';
import Modal from 'react-bootstrap/Modal';
import bgImg from '../../assets/profilebg.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Paperclip } from 'react-bootstrap-icons';
import { BugFill } from 'react-bootstrap-icons';
import { Bug } from 'react-bootstrap-icons';
import { BookmarkHeartFill } from 'react-bootstrap-icons';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Loading from '../../components/Loading/Loading';



export default function ProfileDash() {
    //get routes and stuff here

    // User information is not being pulled :(
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [skillsArr, setSkillsArr] = useState([]);
    let formObject = {};
    const formEl = useRef(null);

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

    function handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        formObject = {...formObject, [name]: value};
        console.log(formObject);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.body && formObject.tag && formObject.tag !== "Choose a tag..") {
            API.createPost({
                tag: formObject.tag,
                title: formObject.title,
                body: formObject.body,
                createdby: user._id
            })
            .then(res => {
                formEl.current.reset();
                setModalShow(false);
            })
            .catch(err => console.log(err));
        }
    };

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
                <Form ref={formEl}>
                    <Form.Group controlId="tagSelect">
                        <Form.Label>Select Tag</Form.Label>
                        <Form.Control as="select" name="tag" onChange={handleInputChange} >
                        <option>Choose a tag..</option>
                        <option>Javascript</option>
                        <option>JQuery</option>
                        <option>Ajax</option>
                        <option>Mongo</option>
                        <option>React</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="postTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="post" placeholder="Post Title" name="title" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="postContent">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control as="textarea" rows={5} name="body" onChange={handleInputChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button>
                    <Paperclip />
                    Attach File
                </Button>
                
                <Button onClick={handleFormSubmit}>Submit Post</Button>
            </Modal.Footer>
        </Modal>
        );
    }

    //states for modal  
    const [modalShow, setModalShow] = React.useState(false);
    

    return (
        <div>
            {loading && (
                <Loading />
            )}
            {!loading && (
                <div className="box">
                    <Jumbotron fluid style={{ minHeight: "250px", marginBottom: "0px", position: "relative", width: "100%", backgroundSize: "cover", backgroundImage: `url(${bgImg})`}}>
                    </Jumbotron>
                    <div className="listContainerMain">
                        <div className="row" style={{ width: "100%"}}>
                            <div className="col-md-5" id="cardplacement">
                                <div className="profileCard"style={{ }}>
                                    <div className="profileContent">
                                    {user.image === "" && (
                                        <img src={ProfilePicL} className="profileImg"/>
                                    )}
                                    {user.image !== "" && (
                                        <img src={user.image} className="profileImg"/>
                                    )}
                                        {/* <img src={ProfilePicL} className="profileImg"/> */}
                                        <h3>{user.firstName} {user.lastName}</h3>
                                        <p style={{ wordWrap: "break-word" }}>{user.bio}</p>
                                        <p style={{ wordWrap: "break-word" }}>LinkedIn: {user.linkedin}</p>
                                        <p style={{ wordWrap: "break-word" }}>GitHub: {user.github}</p>
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
                            </div>
                            <div className="col-md-7" id="postsplacement">
                                <div className="listContainerInner">
                                    <h3 style={{ margin: "10px", display: "flex", alignItems: "center"}}><BookmarkHeartFill style={{ marginRight: "10px"}} /> Saved Posts</h3>
                                    <div className="listItems overflow-auto">
                                        <ListItem/>
                                        <ListItem/>
                                        <ListItem/>
                                        <ListItem/>
                                        <ListItem/>
                                        <ListItem/>
                                    </div>
                                </div>
                                <Button className="createPostBar" id="createPostBtn" onClick={() => setModalShow(true)} >Create New Post +</Button>
                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />

                               <div className="row">
                                   <div className="col-md-6">
                                        <div className="listContainerInner" style={{ marginBottom: "2em", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                                <h3 style={{ margin: "10px", display: "flex", alignItems: "center"}}><BugFill style={{ marginRight: "10px"}}/>Your Mentors</h3>
                                                <div className="listItems overflow-auto">
                                                    <FollowListMentor/>
                                                    <FollowListMentor/>
                                                    <FollowListMentor/>
                                                    <FollowListMentor/>
                                                    <FollowListMentor/>
                                                    <FollowListMentor/>
                                                </div>
                                        </div>
                                    </div>    
                                    <div className="col-md-6">
                                        <div className="listContainerInner" style={{ marginBottom: "2em", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                                <h3 style={{ margin: "10px", display: "flex", alignItems: "center"}}><Bug style={{ marginRight: "10px"}}/>Your Students</h3>
                                                <div className="listItems overflow-auto">
                                                    <FollowListStudent/>
                                                    <FollowListStudent/>
                                                    <FollowListStudent/>
                                                    <FollowListStudent/>
                                                    <FollowListStudent/>
                                                    <FollowListStudent/>
                                                </div>
                                        </div>
                                    </div>    
                                </div> 


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}
