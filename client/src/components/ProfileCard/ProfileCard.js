import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
// import AUTH from '../../utils/AUTH';
import bgImg from '../../assets/profilebg.svg';
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
    <Container>
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
                        <h3 style={{ color: '#5680e9' }}>Change Password</h3>
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
            </Col>
        <Col size="md-1"></Col>
      </Row>
    </Container>
  )
}

export default ProfileCard;