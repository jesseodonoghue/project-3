import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import './login.css';
import Logo from '../../assets/logo.svg';


function LoginForm({login}) {
  const [userObject, setUserObject] = useState({
    email: '',
    password: ''
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
		login(userObject.email, userObject.password);
		setRedirectTo('/');
	};

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  } else {
    return (
      <div className="login_bg">
        <Container>
          <div className="row">
            <div className="col-md-4">
              <img src={Logo} style={{ width: "100%" }}/>
              <p className="mt-3" style={{ fontSize: "16px"}}>
              Need some help coding? Whether you’re a fledging developer or have years of practice, DBUGME is here to help! Match with a mentor, participate in posts and get coding!
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-5">
              <div className="loginCard">
                <form style={{ width: "100%"}}>
                  <label className="whitetxt" htmlFor="email">Email: </label>
                  <Input
                    type="text"
                    name="email"
                    value={userObject.email}
                    onChange={handleChange}
                  />
                  <label className="whitetxt" htmlFor="password">Password: </label>
                  <Input
                    type="password"
                    name="password"
                    value={userObject.password}
                    onChange={handleChange}
                  />
                  <FormBtn onClick={handleSubmit}>Login</FormBtn>
                </form>
              </div>
              <div className="row">
                <div className="center">
                  <p className="mt-5" style={{ color: "white" }}>
                    Don't have an account? <strong><Link to="/signup" style={{ color: "white" }}>Sign Up</Link></strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default LoginForm;
