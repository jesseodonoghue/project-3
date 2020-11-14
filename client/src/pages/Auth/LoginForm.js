import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';

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
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Login to React Reading List">
              <form style={{marginTop: 10}}>
                <label htmlFor="email">email: </label>
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
                <Link to="/signup">Register</Link>
                <FormBtn onClick={handleSubmit}>Login</FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    )
  }
}

export default LoginForm;
