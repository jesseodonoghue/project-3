import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import './PostSelect.css';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';
import AUTH from "../../utils/AUTH";
import Loading from '../../components/Loading/Loading';
import Form from 'react-bootstrap/Form';
import Moment from "moment";
import PostReply from "../../components/PostReply/PostReply";
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';


export default function PostSelect(props) {

    // Issue to solve:
    // When you try to place the comment replies from the database, React error says
    // "React cannot read property 0 of undefined"
    
    const [user, setUser] = useState("");
    const [userPost, setUserPost] = useState({});
    const [postCreator, setPostCreator] = useState({});
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState("");
    const [postReplyList, setPostReplyList] = useState([]);
    
    
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
                setPostReplyList(res.data[0].replies);
                return res.data[0];
            })
            .then((res) => {
                API.getSingleUser(res.createdby._id)
                .then((res) => {
                    console.log(res.data);
                    setPostCreator(res.data)
                })
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const [validated, setValidated] = useState(false);
    
    // Needs to validate if there is no comment on submit
    const submitComment = (event) => {
        
        setLoading(true);
        const userPostId = userPost._id;
        const userId = user._id;
        // const commentBody = comment;
    
        const commentText = comment;
        const postReplies = {
            replies: userPost.replies
        }
    
        // postReplies.replies.push({
        //     body: commentText,
        //     createdby: userId,
        //     likes: null
        // });
        console.log(postReplies);

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setLoading(false);
            
        } else {
            
            postReplies.replies.push({
                body: commentText,
                createdby: userId,
                likes: null

            });
            
            
            API.addComment(userPostId, postReplies)
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
                // loadUser();
                console.log(userPost);
                
                setPostReplyList(userPost.replies);
                setComment("");
                setLoading(false);
                
            })
            window.location.reload();
        }
         
        setValidated(true);
    }


    function addFavorite (event) {
        event.preventDefault();
        let tempObj = {
            savedPosts: user.savedPosts
        };
        tempObj.savedPosts.push(props.location.state.postInfo._id);

        API.updateProfile(user._id, tempObj)
        .then (res => {
            setUser(res.data);
            console.log(res.data);
            return res.data;
        })
    }

    function removeFavorite (event) {
        event.preventDefault();
        let tempObj = {
            savedPosts: []
        };

        for (let i = 0; i < user.savedPosts.length; i++) {
            if (user.savedPosts[i] === props.location.state.postInfo._id) {
                continue;
            } else {
                tempObj.savedPosts.push(user.savedPosts[i]);
            }
        }
        
        API.updateProfile(user._id, tempObj)
        .then (res => {
            setUser(res.data);
            console.log(res.data);
            return res.data;
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
                            {postCreator && (
                                <div className="nameImg">
                                    <div className="posterImg"><img style={{ maxWidth: "25px", maxHeight: "25px", borderRadius: "50%"}}src={postCreator.image || ProfilePicL}></img></div>
                                    <div>{postCreator.firstName} {postCreator.lastName}</div>
                                    <div>{console.log(postCreator)}</div>
                                </div>
                            )}
                            <div className="date">
                            {Moment(userPost.date).format('MMMM Do YYYY')}
                            </div>
                        </div>
                        <h1  className="postTitle">{userPost.title}</h1>
                        <div className="postCopyContainer">
                            <p>
                                {userPost.body}
                            </p>
                        </div>
                    </div>
                    {(user && !user.savedPosts.includes(props.location.state.postInfo._id)) && (
                        <div className="favoriteBtn">   
                            <Button onClick={addFavorite}>Favorite Post</Button>
                        </div>
                    )}
                    {(user && user.savedPosts.includes(props.location.state.postInfo._id)) && (
                        <div className="favoriteBtn">   
                            <Button onClick={removeFavorite}>Remove Favorite</Button>
                        </div>
                    )}
                    <div className="commentAs mlmr">
                        Comment as {user.firstName} {user.lastName}
                    </div>
                    <div className="postContainer" style={{ marginTop: "1em", marginBottom: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                        <div className="postCopyContainer">
                            <Form noValidate validated={validated} onSubmit={submitComment}>
                                <Form.Group controlId="validationCustom01" style={{width: "100%"}}>
                                    <Form.Control 
                                    required
                                    name="comment" 
                                    type="text"
                                    value={comment} 
                                    placeholder="Start typing here..."
                                    onChange={onInputChange} as="textarea" rows={10} />
                                    <Form.Control.Feedback type="invalid">
                                        Please leave a comment before submitting.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="submitCommentBox mlmr">
                            <Button className="submitBtn" type="submit" >Submit Comment</Button>
                            
                             </div>
                            </Form>
                        </div>
                        
                    </div>
                   
                    {!loading && (
                        // <p>{userPost.replies}</p>
                        postReplyList.map((reply, index) => (
                            <PostReply key={index} value={reply}/>
                        ))
                    )}
                </div>
                )}
            </>
        )
    }
    


