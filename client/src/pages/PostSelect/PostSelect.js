import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import './PostSelect.css';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';
import Loading from '../../components/Loading/Loading';
import Form from 'react-bootstrap/Form';
import Moment from "moment";
import AUTH from "../../utils/AUTH";



export default function PostSelect(props) {

    // Issue to solve:
    // When you try to place the comment replies from the database, React error says
    // "React cannot read property 0 of undefined"
    
    const [user, setUser] = useState("");
    const [userPost, setUserPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState("");
    
    
    useEffect(() => {
            loadUser();
            loadUserPost();
    }, []);
    
    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                setUser(res.data.user);
                console.log(res.data.user);
                return res.data.user;
            })
            .then((currentUser) => {
                loadUserPost(currentUser);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    
    function loadUserPost() {
        setLoading(true);
        API.getSinglePost(props.location.state.postInfo._id)
            .then(res => {
                setUserPost(res.data[0]);
                // console.log(res.data[0]);
                return res.data;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    
    // Needs to validate if there is no comment on submit
    function submitComment() {
        const userPostId = userPost._id;
        const userId = user._id;
        // const commentBody = comment;
    
        const commentText = comment;
    
        API.addComment(userPostId, {
            replies: [{
                body: commentText,
                createdby: userId,
                likes: null
              }]
        })
        .then(res => {
            // loadUserPost();
            console.log(commentText);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            loadUserPost();
            loadUser();
            console.log(userPost.replies[0].body);
        })
    }
    
    function onInputChange(event) {
        let value = event.target.value;
        const name = event.target.name;
    
        setComment(value);
    }
    
        
        return (
            <>
                {loading && (
                    <Loading />
                )}
                {!loading && (
                <div className="box" style={{ height: "100%" }}>
                    <div className="postContainer">
                        <div className="postNameDate">
                            <div className="nameImg">
                                <div className="posterImg"></div>
                                <div>Poster's Name</div>
                            </div>
                            <div className="date">
                            {Moment().format('MMMM Do YYYY')}
                            </div>
                        </div>
                        <h1  className="postTitle">{userPost.title}</h1>
                        <div className="postCopyContainer">
                            <p>
                                {userPost.body}
                            </p>
                        </div>
                    </div>
                    <div className="favoriteBtn">   
                        <Button>Favorite Post</Button>
                    </div>
                    <div className="commentAs mlmr">
                        Comment as {user.firstName} {user.lastName}
                    </div>
                    <div className="postContainer" style={{ marginTop: "1em", marginBottom: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                        <div className="postCopyContainer">
                        <Form.Group controlId="commentTextArea" style={{width: "100%"}}>
                            <Form.Control name="comment" value={comment} onChange={onInputChange} as="textarea" rows={10} />
                        </Form.Group>
                        </div>
                    </div>
                    <div className="submitCommentBox mlmr">
                            <Button className="submitBtn" onClick={submitComment}>Submit Comment</Button>
                    </div>
                    <div className="postContainer">
                        <div className="commentBy">
                            Comment by UserName
                        </div>
                        <div className="time">
                            9:30pm
                        </div>
                        <p>
                        Comment goes here
                        </p>
                    </div>
                </div>
                )}
            </>
        )
    }
    


