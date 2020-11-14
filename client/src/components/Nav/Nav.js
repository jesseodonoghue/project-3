import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import './Nav.css';
// we can import the bootstrap nav module here, then delete Link and Col from above

const Nav = (props) => {

  
  return (

    // we would put the nav module here and delete this stuff, then put in our own Link pages (Connections, Posts, Dashboard, Settings(this one has sub links))
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Col size="md-6 sm-6">
        <Link to="/" className="navbar-brand">DBUGME</Link>
      </Col>
      <Col size="md-6 sm-6">
        <div className="float-right">
        <Link to="#" className="logout" onClick={props.logout}>Logout</Link>
        </div>
      </Col>
    </nav>
  )
};

export default Nav;
