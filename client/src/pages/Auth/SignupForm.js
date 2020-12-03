import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';
import './login.css';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import validate from '../../components/Validation/validations';



function SignupForm() {
  const [userObject, setUserObject] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    redirectTo: null
  });

  const [errors, setErrors] = useState({});

  const [redirectTo, setRedirectTo] = useState(null);


    const handleChange = (event) => {
		setUserObject({
      ...userObject,
			[event.target.name]: event.target.value
    })

  };

  function MouseOver(event) {
    event.target.style.background = '#5680E9';
  }

  function MouseOut(event) {
    event.target.style.background='#8860D0';
  }

useEffect (() => {})  
	const handleSubmit = (event) => {
    event.preventDefault();

    // TODO - validate!
   const validationErrors = validate(userObject); 

   if (Object.keys(validationErrors).length > 0) {
     console.log("Invalid form")
     setErrors(validationErrors)
   } else {
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
   }
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />
  }
  
  return (
    <div className="signupBody">
      <div className="signupCard">
              <h1 style={{color: "#5680E9", textAlign: "center"}}>Create an Account</h1>
              <form style={{marginTop: 10}}>

              {errors.firstName 
                 ? <small className="text-danger">{errors.firstName}</small> 
                 : <label className="purpletxt" htmlFor="firstName">First name: </label>
                 }
                <Input
                  type="text"
                  name="firstName"
                  value={userObject.firstName}
                  className={classnames('form-control', {'is-invalid': errors.firstName, 'is-valid': !errors.firstName})}
                  onChange={handleChange}
                />
                 {errors.lastName 
                 ? <small className="text-danger">{errors.lastName}</small> 
                 : <label className="purpletxt" htmlFor="lastName">Last name: </label>
                 }
                <Input
                  type="text" 
                  name="lastName"
                  value={userObject.lastName}
                  className={classnames('form-control', {'is-invalid': errors.lastName, 'is-valid': !errors.lastName})}
                  onChange={handleChange}
                />
                 {errors.email 
                 ? <small className="text-danger">{errors.email}</small> 
                 : <label className="purpletxt" htmlFor="email">Email: </label>
                }
                <Input
                  type="text"
                  name="email"
                  value={userObject.email}
                  className={classnames('form-control', {'is-invalid': errors.email, 'is-valid': !errors.email})}
                  onChange={handleChange}
                />
                 {errors.password 
                 ? <small className="text-danger">{errors.password}</small> 
                 : <label className="purpletxt" htmlFor="password">Password: </label>
                }
                <Input
                  type="password"
                  name="password"
                  value={userObject.password}
                  className={classnames('form-control', {'is-invalid': errors.password, 'is-valid': !errors.password})}
                  onChange={handleChange}
                />
                {errors.confirmPassword 
                ? <small className="text-danger">{errors.confirmPassword}</small> 
                :<label className="purpletxt" htmlFor="confirmPassword">Confirm Password: </label>
                }
                <Input
                  type="password"
                  name="confirmPassword"
                  value={userObject.confirmPassword}
                  className={classnames('form-control', {'is-invalid': errors.confirmPassword, 'is-valid': !errors.confirmPassword})}
                  onChange={handleChange}
                />
                <Link to="/"><ArrowLeftCircle style={{ width: "30px", height: "30px"}}/></Link>
                <FormBtn onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={ handleSubmit}>Register</FormBtn>
              </form>
              
      </div>
    </div>

  )
}

export default SignupForm;
