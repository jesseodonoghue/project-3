import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import './login.css';
import Logo from '../../assets/logo.svg';
import  loginValidation  from '../../components/Validation/validations';
import classnames from 'classnames';


function LoginForm({login}) {


  const [userObject, setUserObject] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const [redirectTo, setRedirectTo] = useState(null);

    function MouseOver(event) {
        event.target.style.background = '#5680E9';
      }

    function MouseOut(event) {
        event.target.style.background='#8860D0';
    }

	const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
		});
	};

  useEffect (() => {})
	const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = loginValidation(userObject); 

    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors)
      setErrors(validationErrors)
    } else {
      console.log("success")
  	login(userObject.email, userObject.password);
		setRedirectTo('/');
  }
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

                {errors.password 
                  ? <small className="text-danger">{errors.email}</small> 
                  : <label className="whitetxt" htmlFor="email">email: </label>
                  }
                  <label className="whitetxt" htmlFor="email">Email: </label>
                  <Input
                    type="text"
                    name="email"
                    value={userObject.email}
                    className={classnames('form-control', {'is-invalid': errors.email, 'is-valid': !errors.email})}
                    onChange={handleChange}
                  />
                  {errors.password 
                  ? <small className="text-danger">{errors.password}</small> 
                  : <label className="whitetxt" htmlFor="password">Password: </label>
                  }
                  <Input
                    type="password"
                    name="password"
                    value={userObject.password}
                    className={classnames('form-control', {'is-invalid': errors.password, 'is-valid': !errors.password})}
                    onChange={handleChange}
                  />
                  <FormBtn onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={handleSubmit}>Login</FormBtn>
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
