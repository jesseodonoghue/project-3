import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
// import AUTH from '../../utils/AUTH';
import ProfilePic from '../../assets/defaultprofilepic.svg'
import Image from 'react-bootstrap/Image'
import './style.css'



function ProfileCard() {
  const [userObject, setUserObject] = useState({
    firstName: '',
    lastName: '',
    email: '',
    github: '',
    linkedin: '',
    // redirectTo: null
  });
//   const [redirectTo, setRedirectTo] = useState(null);

//   const handleChange = (event) => {
// 		setUserObject({
//       ...userObject,
// 			[event.target.name]: event.target.value
// 		});
// 	};
  
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		// TODO - validate!
// 		AUTH.signup({
//       firstName: userObject.firstName,
//       lastName: userObject.lastName,
//       email: userObject.email,
//       password: userObject.password
//     }).then(response => {
//       // console.log(response);
//       if (!response.data.errmsg) {
//         setRedirectTo('/');
//       } else {
//         console.log('duplicate');
//       }
//     });
//   };
  
//   if (redirectTo) {
//     return <Redirect to={{ pathname: redirectTo }} />
//   }
  
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
        {/* //// Profile Photo Card //// */}
        <h1 style={{ color: '#5680e9' }}>Profile Photo</h1>
        <Card className="profile-photo" style={{ background: '#5680e9'}}>
        </Card> 
            <div style={{ marginTop: "3em"}}>
                <h1 style={{ color: '#5680e9' }}>Personal</h1>
                <Card title="Profile settings">
                    <form style={{marginTop: 10}}>
                            <label htmlFor="firstName">First name: </label>
                        <Input
                            type="text"
                            name="firstName"
                            // value={userObject.firstName}
                            // onChange={handleChange}
                        />
                            <label htmlFor="lastName">Last name: </label>
                        <Input
                            type="text"
                            name="lastName"
                            // value={userObject.lastName}
                            // onChange={handleChange}
                        />
                            <label htmlFor="email">Email: </label>
                        <Input
                            type="text"
                            name="email"
                            // value={userObject.github}
                            // onChange={handleChange}
                        />
                            <label htmlFor="password">GitHub: </label>
                        <Input
                            type="text"
                            name="github"
                            // value={userObject.linkedin}
                            // onChange={handleChange}
                        />
                            <label htmlFor="confirmPassword">LinkedIn: </label>
                        <Input
                            type="password"
                            name="confirmPassword"
                            // value={userObject.confirmPassword}
                            // onChange={handleChange}
                        />
                        <FormBtn >Change Info</FormBtn>
                    </form>
                </Card>
            </div>
            
        {/* //// Password Change Form //// */}

        <div style={{ marginTop: "3em"}}>
                <h1 style={{ color: '#5680e9' }}>Change Password</h1>
            <Card title="Create an Account">
                <form style={{marginTop: 10}}>
                    <label htmlFor="firstName">Current Password </label>
                    <Input
                        type="text"
                        name="firstName"
                        // value={userObject.firstName}
                        // onChange={handleChange}
                    />
                    <label htmlFor="lastName">New Password </label>
                    <Input
                        type="text"
                        name="lastName"
                        // value={userObject.lastName}
                        // onChange={handleChange}
                    />
                    <label htmlFor="email">Confirm Password </label>
                    <Input
                        type="text"
                        name="email"
                        // value={userObject.email}
                        // onChange={handleChange}
                    />
                    <FormBtn style={{ color: '#5680e9' }}>Change Password</FormBtn>
                </form>
            </Card>
        </div>
    </div>
  )
=======
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

        <>
            {loading && (
                <p>Loading...</p>
            )}
            {!loading && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
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
                </div>
            )}

        </>
    )
>>>>>>> 4cf33d64b189fbb6f396b9b885b035d36bc85d61
}

export default ProfileCard;