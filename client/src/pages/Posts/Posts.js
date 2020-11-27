import React, { useState, useEffect, useRef } from 'react'
import './posts.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FeaturedList from '../../components/FeaturedList/FeaturedList.js';
import UserList from '../../components/UserList/UserList.js';
import Form from 'react-bootstrap/Form';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";


export default function Posts() {

const [userPosts, setUserPosts] = useState([]);
const [filteredUserPosts, setFilteredUserPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(false);


useEffect(() => {
    loadUserPosts();
}, []);

function loadUserPosts() {
    setLoading(true);
    API.getUserPosts()
        .then(res => {
            setUserPosts(res.data);
            setFilteredUserPosts(res.data);
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

function onInputChange(event) {
    const value = event.target.value;
    const name = event.target.name

    setSearchTerm(value)

    const searchTerm = value.toLowerCase();

    const filteredUserPosts = userPosts.filter(data => data.title.toLowerCase().startsWith(searchTerm));
    
    setFilteredUserPosts(filteredUserPosts);
}

    return (
        <div className="container-flex" style={{ overflowX: "hidden", height: "auto", maxWidth: "100%"}}>
            <div className="row" style={{ width: "100%", margin: "0px"}}>
                <div className="col-md-5 col-sm-12" style={{width: "100%", padding: "0px"}} id="postboxes">
                    <div className="yourPostsContainer" style={{ flexDirection: "column"}}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{ color: "white" }}>Search</Form.Label>
                                <Form.Control name="searchTerm" value={searchTerm} onChange={onInputChange} type="search" placeholder="Enter search" />
                            </Form.Group>
                        </Form>
                        <h3 style={{ marginTop: "1em", color: "white"}}>Your Posts</h3>
                        <div className="listItems overflow-auto">
                            {filteredUserPosts.map(postInfo => (
                                <UserList title={postInfo.title} />
                                // Error in console: Each child in a list
                                // should have a unique "key" prop.
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="col-md-7 col-sm-12" id="featuredboxes">
                    <div className="featuredContainer">
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
            </div>
            
        </div>
    )
}

{/* <Link className="nav-link" to="/matching" >Connections</Link> */}