import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn, TextArea } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import API from "../../utils/API";
import ProfilePic from '../../assets/defaultprofilepic.svg'
import Image from 'react-bootstrap/Image'
import './style.css'
import { ShopWindow } from 'react-bootstrap-icons';
import Notification from '../Notification/index';

function ProfileCard() {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    let formObject = {};
    let formPass = {};
    const formEl = useRef(null);
    const formPassEl = useRef(null);

    //Toast Alert Hook
    const [show, setShow] = useState(false);
    

    useEffect(() => {
        loadUser();
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
            setShow(true);
        })
        .catch(err => console.log(err));
        
        
    };

    function handlePassSubmit(event) {
        event.preventDefault();

        if (!formPass.currPass) {
            formPass.firstName = user.firstName;
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

    return (

        <>
            {loading && (
                <p>Loading...</p>
            )}
            {!loading && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
                    {/* //// Profile Photo Card //// */}
                    <h3 style={{ color: '#5680E9' }}>Profile Photo</h3>
                    <Card className="profile-photo" style={{ background: '#5680e9'}}>
                        <Image src={ProfilePic} alt="ProfilePic" fluid/>
                        <FormBtn style={{ color: "#5680E9", marginTop: ".5em" }}>Edit/Update Profile Picture</FormBtn>
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
                                        <label htmlFor="bio">Bio: </label>
                                    <TextArea
                                        type="text"
                                        name="bio"
                                        placeholder={user.bio}
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

                                    <FormBtn onClick={handleFormSubmit}>Save Info</FormBtn>
                                </form>
                                
                                    <Notification style={{
                                        top: 300
                                    }}
                                        action={() => setShow(true)}
                                        close={() => setShow(false)}
                                        show={show}
                                        delay={3000}
                                    />
                            </Card>
                        </div>
                        
                    {/* //// Password Change Form //// */}

                    <div style={{ marginTop: "3em"}}>
                            <h3 style={{ color: '#5680e9' }}>Change Password</h3>
                        <Card title="Create an Account">
                            <form style={{marginTop: 10}} ref={formPassEl}>
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
                                <FormBtn style={{ color: '#5680e9' }} onClick={handlePassSubmit}>Change Password</FormBtn>
                            </form>
                        </Card>
                    </div>
                </div>
            )}

        </>
    )
}

export default ProfileCard;