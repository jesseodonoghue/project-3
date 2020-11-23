import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import './login.css';
import { ArrowLeftCircle } from 'react-bootstrap-icons';

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
      console.log(response);
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
    <div className="signupBody">
      <div className="signupCard">
              <h1 style={{color: "#5680E9", textAlign: "center"}}>Create an Account</h1>
              <form style={{marginTop: 10}}>
                <label className="purpletxt" htmlFor="firstName">First name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={userObject.firstName}
                  onChange={handleChange}
                />
                <label className="purpletxt" htmlFor="lastName">Last name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={userObject.lastName}
                  onChange={handleChange}
                />
                <label className="purpletxt" htmlFor="email">Email: </label>
                <Input
                  type="text"
                  name="email"
                  value={userObject.email}
                  onChange={handleChange}
                />
                <label className="purpletxt" htmlFor="password">Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={userObject.password}
                  onChange={handleChange}
                />
                <label className="purpletxt" htmlFor="confirmPassword">Confirm Password: </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={userObject.confirmPassword}
                  onChange={handleChange}
                />
                <Link to="/"><ArrowLeftCircle style={{ width: "30px", height: "30px"}}/></Link>
                <FormBtn onClick={handleSubmit}>Register</FormBtn>
              </form>
      </div>
    </div>
  )
}

export default SignupForm;
