import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import API from "../../utils/API";
import bgImg from '../../assets/profilebg.svg';
import './style.css'


function ProfileCard() {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    let formObject = {};
    let formPass = {};
    const formEl = useRef(null);


    useEffect(() => {
        loadUser();
        console.log(user);
    }, []);


    function loadUser() {
        setLoading(true);
        AUTH.getUser()
            .then(res => {
                setUser(res.data.user);
                return res.data.user;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        formObject = {...formObject, [name]: value};
        console.log(formObject);
    };

    function handlePassChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        formPass = {...formPass, [name]: value};
        console.log(formPass);
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!formObject.firstName) {
            formObject.firstName = user.firstName;
        }
        if (!formObject.lastName) {
            formObject.lastName = user.lastName;
        }
        if (!formObject.email) {
            formObject.email = user.email;
        }
        
        const userID = user._id;

        API.updateProfile(userID, formObject)
        .then(res => {
            formEl.current.reset();
            setUser(res.data);
            console.log(user);
        })
        .catch(err => console.log(err));
        
    };

    // function handlePassSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.title && formObject.body && formObject.tag && formObject.tag !== "Choose a tag..") {
    //         API.createPost({
    //             tag: formObject.tag,
    //             title: formObject.title,
    //             body: formObject.body,
    //             createdby: user._id
    //         })
    //         .then(res => {
    //             formEl.current.reset();
    //         })
    //         .catch(err => console.log(err));
    //     }
    // };

    return (
        <Container>
            {loading && (
                <p>Loading...</p>
            )}
            {!loading && (
                <Row>
                    <Col size="md-1"></Col>
                        <Col size="md-8">

                                {/* //// Profile Photo Card //// */}

                            <h3 style={{ color: '#5680e9' }}>Profile Photo</h3>
                            <Card className="profile-photo" style={{ background: '#5680e9'}}>
                            </Card> 
                            <div style={{ marginTop: "3em"}}>
                                <h3 style={{ color: '#5680e9' }}>Personal</h3>
                                <Card title="Profile settings">
                                    <form style={{marginTop: 10}} ref={formEl}>
                                            <label htmlFor="firstName">First name: </label>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            placeholder={user.firstName}
                                            onChange={handleInputChange}
                                        />
                                            <label htmlFor="lastName">Last name: </label>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            placeholder={user.lastName}
                                            onChange={handleInputChange}
                                        />
                                            <label htmlFor="email">Email: </label>
                                        <Input
                                            type="text"
                                            name="email"
                                            placeholder={user.email}
                                            onChange={handleInputChange}
                                        />
                                            <label htmlFor="github">GitHub: </label>
                                        <Input
                                            type="text"
                                            name="github"
                                            placeholder={user.github}
                                            onChange={handleInputChange}
                                        />
                                            <label htmlFor="linkedin">LinkedIn: </label>
                                        <Input
                                            type="text"
                                            name="linkedin"
                                            placeholder={user.linkedin}
                                            onChange={handleInputChange}
                                        />
                                        <FormBtn onClick={handleFormSubmit}>Change Info</FormBtn>
                                    </form>
                                </Card>
                            </div>
                                
                            {/* //// Password Change Form //// */}

                            <div style={{ marginTop: "3em"}}>
                                <h3 style={{ color: '#5680e9' }}>Change Password</h3>
                                <Card title="Create an Account">
                                    <form style={{marginTop: 10}}>
                                        <label htmlFor="password">Current Password </label>
                                        <Input
                                            type="password"
                                            name="currPass"
                                            onChange={handlePassChange}
                                        />
                                        <label htmlFor="newPass">New Password </label>
                                        <Input
                                            type="password"
                                            name="newPass"
                                            onChange={handlePassChange}
                                        />
                                        <label htmlFor="confPass">Confirm Password </label>
                                        <Input
                                            type="password"
                                            name="confPass"
                                            onChange={handlePassChange}
                                        />
                                        <FormBtn style={{ color: '#5680e9' }}>Change Password</FormBtn>
                                    </form>
                                </Card>
                            </div>
                        </Col>
                    <Col size="md-1"></Col>
                </Row>
            )}
        </Container>
    )
}

export default ProfileCard;