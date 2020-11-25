import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Col } from '../Grid';
import './Nav.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Connections from '../../pages/Matching'; 
import Posts from '../../pages/Posts'; 
import Dashboard from '../../pages/ProfileDash'; 
import Profile from '../../pages/ProfileSetGen';
import PostSelect from '../../pages/PostSelect';
import ProfileNet from '../../pages/ProfileSetNet';

// we can import the bootstrap nav module here, then delete Link and Col from above

const navBar = (props) => {


  return (

    // we would put the nav module here and delete this stuff, then put in our own Link pages (Connections, Posts, Dashboard, Settings(this one has sub links))
   <>
      <Navbar className="color-nav" id="nav-grad" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/matching" >Connections</Link>
            <Link className="nav-link" to="/posts" >Posts</Link>
            <Link className="nav-link" to="/dashboard" >Dashboard</Link>
            <NavDropdown title="Settings" id="collasible-nav-dropdown">
              <NavDropdown.Item id="ProfileTitle" href="/profilesetgen">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#" className="logout" onClick={props.logout}>Logout</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href="/">DBUGME</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <Route path="/matching" exact component={Connections} />
    <Route path="/posts" exact component={Posts} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/profilesetgen" exact component={Profile} />
    <Route path="/postselect" exact component={PostSelect} />
    <Route path='/profilesetnet' exact component={ProfileNet} />
  </>
  );
};

export default navBar;