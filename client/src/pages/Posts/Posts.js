import React from 'react'
import './posts.css';
import ListItem from '../../components/List/ListItem.js';
import '../../components/List/List.css';
import Form from 'react-bootstrap/Form'

export default function Posts() {
    return (
        <div className="container-flex">
            <div className="yourPostsContainer col-md-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="search" placeholder="Enter search" />
                    </Form.Group>
                </Form>
            </div>
            <div className="featuredContainer col-md-7">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="search" placeholder="Enter search" />
                    </Form.Group>
                </Form>
                <div className="listItems overflow-auto">
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
            </div>
            
        </div>
    )
}
