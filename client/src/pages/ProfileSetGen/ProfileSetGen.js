import React from 'react'
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';

import './style.css';


export default function ProfileSetGen() {
    return (
       
            <div className="container-flex">
                <Sidebar width={300} height={'100vh'}>
                        <Col size="md-3">
                            <h4 style={{ color: 'white',  marginTop: '1em' }}>SETTINGS</h4>
                        </Col>
                        <Col  className="text-right" size="md-4" style={{ marginTop: "3em", color: 'white'}}>
                            {/* using short syntax for React fragment with <></> */}
                            <> <h5>GENERAL</h5>
                                <hr/>
                                <h6 style={{ fontWeight: 'bold' }}>Personal Info • </h6>
                            </>
                            <><h5 style={{ marginTop: "2em"}}>NETWORKING</h5>
                                <hr/>
                                <Link className='nav-link' to='/profilesetnet'>
                                <h6 style={{ color: 'white'}}>Skills Page</h6>
                                </Link>
                            </>
                         </Col>
                    
                </Sidebar>
                <div className='infoContainer'>
                    <ProfileCard/>
                </div>
            </div>
    )   
}