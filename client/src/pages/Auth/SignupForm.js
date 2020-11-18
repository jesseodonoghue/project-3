import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import './login.css';

function SignupForm() {
  const [userObject, setUserObject] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    redirectTo: null
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
		});
	};
  
	const handleSubmit = (event) => {
		event.preventDefault();
		// TODO - validate!
		AUTH.signup({
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      email: userObject.email,
      password: userObject.password
    }).then(response => {
      // console.log(response);
      if (!response.data.errmsg) {
        setRedirectTo('/');
      } else {
        console.log('duplicate');
      }
    });
  };
  
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  }
  
  return (
    <Container className="register"> 
      <h1>Register page</h1>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <Card title="Create an Account">
            <form style={{marginTop: 10}}>
              <label htmlFor="firstName">First name: </label>
              <Input
                type="text"
                name="firstName"
                value={userObject.firstName}
                onChange={handleChange}
              />
              <label htmlFor="lastName">Last name: </label>
              <Input
                type="text"
                name="lastName"
                value={userObject.lastName}
                onChange={handleChange}
              />
              <label htmlFor="email">Email: </label>
              <Input
                type="text"
                name="email"
                value={userObject.email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password: </label>
              <Input
                type="password"
                name="password"
                value={userObject.password}
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <Input
                type="password"
                name="confirmPassword"
                value={userObject.confirmPassword}
                onChange={handleChange}
              />
              <Link to="/">Login</Link>
              <FormBtn onClick={handleSubmit}>Register</FormBtn>
            </form>
          </Card>
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  )
}

export default SignupForm;
