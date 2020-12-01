import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import './posts.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FeaturedList from '../../components/FeaturedList/FeaturedList.js';
import UserList from '../../components/UserList/UserList.js';
import Form from 'react-bootstrap/Form';
import AUTH from "../../utils/AUTH";
import API from "../../utils/API";
import Loading from '../../components/Loading/Loading';


export default function Posts() {

    const [user, setUser] = useState("");
    const [userPosts, setUserPosts] = useState([]);
    const [filteredUserPosts, setFilteredUserPosts] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTermFeatured, setSearchTermFeatured] = useState("");
    const [filteredFeaturedPosts, setFilteredFeaturedPosts] = useState([]);


    const [loading, setLoading] = useState(false);

    let postArr = [];
    let featuredPostArr = [];

    // Need to add validation if any posts have been created for a user
    useEffect(() => {
        loadUser();
        loadFeaturedPosts();
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
            });
    }

    function loadFeaturedPosts() {
        setLoading(true);
        API.getAllPosts()
            .then(res => {
                featuredPostArr = res.data;
                console.log(res.data);
            })
            .then(() => {
                setFeaturedPosts(featuredPostArr);
                setFilteredFeaturedPosts(featuredPostArr);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
                console.log(featuredPosts);
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

    function onInputChangeFeatured(event) {

        const value = event.target.value;
        const name = event.target.name;

        setSearchTermFeatured(value)

        const searchTermFeatured = value.toLowerCase();

        const filteredFeaturedPosts = featuredPosts.filter(data => data.title.toLowerCase().startsWith(searchTermFeatured));
        
        setFilteredFeaturedPosts(filteredFeaturedPosts);
    }


    return (
        <>
            {loading && (
                <Loading />
            )}
            {!loading && (
                <div className="container-flex">
                    <div className="yourPostsContainer col-md-5" style={{ flexDirection: "column"}}>
                        <Form>
                            <Form.Group controlId="userPosts">
                                <Form.Label style={{ color: "white" }}>Search</Form.Label>
                                <Form.Control name="searchTerm" value={searchTerm} onChange={onInputChange} type="search" placeholder="Enter search" />
                            </Form.Group>
                        </Form>
                        <h3 style={{ marginTop: "1em", color: "white"}}>Your Posts</h3>
                        <div className="listItems overflow-auto">
                            {userPosts.length > 0 && (

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
                            {!userPosts.length > 0 && (
                                <h5 style={{ color: "white"}}>No user posts available. Create a post on the dashboard page.</h5>
                            )}
                        </div>
                    </div>

                    <div className="featuredContainer col-md-7">
                        <Form>
                            <Form.Group controlId="featuredPosts">
                                <Form.Label>Search</Form.Label>
                                <Form.Control name="searchTermFeatured" type="search" value={searchTermFeatured} onChange={onInputChangeFeatured} placeholder="Enter search" />
                            </Form.Group>
                        </Form>
                        <h3 style={{ marginTop: "1em" }}>Featured Posts</h3>
                        <div className="listItems overflow-auto">

                                {filteredFeaturedPosts.map((postInfo, index) => (
                                    <Link key={index} to={{
                                        pathname: "/postselect",
                                        state: {
                                            postInfo: postInfo
                                        }
                                        }}>
                                    <FeaturedList key={index} title={postInfo.title} />
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            )} 
        </>
    )
}