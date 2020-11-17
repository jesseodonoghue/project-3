import React from 'react'
import './posts.css';
import FeaturedList from '../../components/FeaturedList/FeaturedList.js';
import UserList from '../../components/UserList/UserList.js';
import Form from 'react-bootstrap/Form';


export default function Posts() {
    return (
        <div className="container-flex">
            <div className="yourPostsContainer col-md-5" style={{ flexDirection: "column"}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="search" placeholder="Enter search" />
                    </Form.Group>
                </Form>
                <h3 style={{ marginTop: "1em"}}>Your Posts</h3>
                <div className="listItems overflow-auto">
                    <UserList>
                    </UserList>
                    <UserList />
                    <UserList />
                    <UserList />
                    <UserList />
                </div>
            </div>

            <div className="featuredContainer col-md-7">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="search" placeholder="Enter search" />
                    </Form.Group>
                </Form>
                <h3 style={{ marginTop: "1em"}}>Featured Posts</h3>
                <div className="listItems overflow-auto">
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
