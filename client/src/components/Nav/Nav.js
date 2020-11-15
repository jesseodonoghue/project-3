import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
// import { Col } from '../Grid';
import './Nav.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

// we can import the bootstrap nav module here, then delete Link and Col from above

const navBar = (props) => {


  return (

    // we would put the nav module here and delete this stuff, then put in our own Link pages (Connections, Posts, Dashboard, Settings(this one has sub links))

    <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Link className="nav-link" to="./connections" >Connections</Link> 
          <Link className="nav-link" to="./posts" >Posts</Link>
          <Link className="nav-link" to="./dashboard" >Dashboard</Link>
          <NavDropdown title="Settings" id="collasible-nav-dropdown">
            <NavDropdown.Item href="./profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="#" className="logout" onClick={props.logout}>Logout</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="./">DBUGME</Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default navBar;