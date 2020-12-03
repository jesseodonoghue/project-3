import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './profileDash.css';
import ListItem from '../../components/List/ListItem.js';
import FollowListMentor from '../../components/FollowListMentor/FollowListMentor.js';
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
    const [fullUser, setFullUser] = useState({});
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
                // console.log(res.data.user);
                return res.data.user;
            })
            .then((userData) => {
                // console.log(userData);
                setSkillsArr(getSkills(userData));
                // console.log(skillsArr);
                return userData;
            })
            .then(async (userData) => {
                await getSingleUser(userData._id);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    async function getSingleUser(userID) {
        await API.getSingleUser(userID)
        .then(async res => {
            // console.log("Full User is:");
            console.log(res.data);
            await setFullUser(res.data);
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
                {/* <Button>
                    <Paperclip />
                    Attach File
                </Button> */}
                
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
                <div className="box" style={{ height: "auto"}}>
                    <Jumbotron fluid style={{ minHeight: "250px", marginBottom: "0px", position: "relative", width: "100%", backgroundSize: "cover", backgroundImage: `url(${bgImg})`}}>
                    </Jumbotron>
                    <div className="listContainerMain" style={{ height: "auto"}}>
                        <div className="row" style={{ width: "100%"}}>
                            <div className="col-md-5" id="cardplacement">
                                <div className="profileCard"style={{ }}>
                                    <div className="profileContent" style={{alignItems: "flex-start"}}>
                                    {user.image === "" && (
                                        <img src={ProfilePicL} className="profileImg"/>
                                    )}
                                    {user.image !== "" && (
                                        <img src={user.image} className="profileImg"/>
                                    )}
                                        {/* <img src={ProfilePicL} className="profileImg"/> */}
                                        <h3>{user.firstName} {user.lastName}</h3>
                                        <p style={{ wordWrap: "break-word" }}>{user.bio}</p>
                                        <p style={{ wordWrap: "break-word" }}><strong>LinkedIn:</strong> <a href={user.linkedin} target="blank">{user.linkedin}</a></p>
                                        <p style={{ wordWrap: "break-word" }}><strong>GitHub:</strong> <a href={user.github} target="blank">{user.github}</a></p>
                                        <hr style={{ marginTop: "15px"}}/>
                                        <h3 style={{ marginTop: "15px"}}>Skills</h3>
                                        {skillsArr.length ? (
                                            <ul>
                                                {skillsArr.map((skill, i) => (
                                                    <li key={i}>{skill}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                        <h4 style={{paddingLeft: "15px"}}>No skills added yet</h4>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7" id="postsplacement">
                                <div className="listContainerInner">
                                    <h3 style={{ margin: "10px", display: "flex", alignItems: "center"}}><BookmarkHeartFill style={{ marginRight: "10px"}} /> My Posts</h3>
                                    <div className="listItems overflow-auto">
                                        {(fullUser && fullUser.posts) && (
                                            fullUser.posts.length > 0 ? (
                                                fullUser.posts.map((post, index) => (
                                                    <Link key={index} to={{
                                                        pathname: "/postselect",
                                                        state: {
                                                            postInfo: post
                                                        }
                                                    }}>
                                                        <ListItem key={index} post={post} author={fullUser} />
                                                    </Link>
                                                ))
                                            ) : (
                                                <h4 style={{paddingLeft: "15px"}}>No posts yet</h4>
                                            )
                                        )}
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
                                                {(fullUser && fullUser.learningFrom) && (
                                                    fullUser.learningFrom.length > 0 ? (
                                                        fullUser.learningFrom.map((user, index) => (
                                                            <FollowListMentor key={index} mentor={user}/>
                                                        ))
                                                    ) : (
                                                        <h4 style={{paddingLeft: "15px"}}>No mentors yet.</h4>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="col-md-6">
                                        <div className="listContainerInner" style={{ marginBottom: "2em", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                                            <h3 style={{ margin: "10px", display: "flex", alignItems: "center"}}><Bug style={{ marginRight: "10px"}}/>Your Students</h3>
                                            <div className="listItems overflow-auto">
                                                {(fullUser && fullUser.mentoring) && (
                                                    fullUser.mentoring.length > 0 ? (
                                                        fullUser.mentoring.map((user, index) => (
                                                            <FollowListMentor key={index} mentor={user}/>
                                                        ))

                                                    ) : (
                                                        <h4 style={{paddingLeft: "15px"}}>No students yet.</h4>
                                                    )
                                                )}
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
