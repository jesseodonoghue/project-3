import React, { useState, useEffect, useRef, useContext, createContext } from 'react'
import './posts.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FeaturedList from '../../components/FeaturedList/FeaturedList.js';
import UserList from '../../components/UserList/UserList.js';
import Form from 'react-bootstrap/Form';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";


export default function Posts() {

const [user, setUser] = useState("");
const [userPosts, setUserPosts] = useState([]);
const [filteredUserPosts, setFilteredUserPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(false);

let postArr = [];


// Need to add validation if any posts have been created for a user
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
        .then((currentUser) => {
            loadUserPosts(currentUser);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

function loadUserPosts(currentUser) {
    setLoading(true);
    console.log(currentUser);
    API.getUserPosts(currentUser._id)
        .then(res => {
            postArr = res.data.posts;
            // setUserPosts(postArr);
            // setFilteredUserPosts(postArr);
            return res.data.posts;
        })
        .then(() => {
            setUserPosts(postArr);
            setFilteredUserPosts(postArr);
            console.log(postArr);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
            console.log(postArr[0].title);
        });
}

function onInputChange(event) {

    const value = event.target.value;
    const name = event.target.name;

    setSearchTerm(value)

    const searchTerm = value.toLowerCase();

    const filteredUserPosts = userPosts.filter(data => data.title.toLowerCase().startsWith(searchTerm));
    
    setFilteredUserPosts(filteredUserPosts);
}

    return (
        <div className="container-flex">
            <div className="yourPostsContainer col-md-5" style={{ flexDirection: "column"}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ color: "white" }}>Search</Form.Label>
                        <Form.Control name="searchTerm" value={searchTerm} onChange={onInputChange} type="search" placeholder="Enter search" />
                    </Form.Group>
                </Form>
                <h3 style={{ marginTop: "1em", color: "white"}}>Your Posts</h3>
                <div className="listItems overflow-auto">
                    {loading && (
                        <p>Loading...</p>
                    )}
                    {!loading && (
                        // <p>{console.log(userPosts)}</p>
                        filteredUserPosts.map((postInfo, index) => (
                            <Link key={index} to={{
                                pathname: "/postselect",
                                state: {
                                    postInfo: postInfo
                                }
                                }}>
                            <UserList key={index} title={postInfo.title} />
                            </Link>
                        ))
                    )} 
                </div>
            </div>

            <div className="featuredContainer col-md-7">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="search" placeholder="Enter search" />
                    </Form.Group>
                </Form>
                <h3 style={{ marginTop: "1em" }}>Featured Posts</h3>
                <div className="listItems overflow-auto">
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                    <FeaturedList/>
                </div>
            </div>
            
        </div>
    )
}