import React from 'react'
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';

import './style.css';


export default function ProfileSetGen() {
    return (

        <div className="container-flex" style={{ height: "100%"}}>
            <Sidebar width={400} height={'100%'}>
                <Container>
                    <Col size="md-3">
                        <h4 style={{ color: 'white', marginTop: "2em" }}>SETTINGS</h4>
                    </Col>
                    <Col  className="text-right" size="md-4" style={{ marginTop: "3em", color: 'white'}}>
                        {/* using short syntax for React fragment with <></> */}
                        <> <h5>GENERAL</h5>
                            <hr/>
                            <Link className='nav-link' to='/profilesetgen'>
                                <h6 style={{ color: 'white', fontWeight: 'bold' }}>Personal Info</h6>
                            </Link>
                        </>
                        <><h5 style={{ marginTop: "1em"}}>NETWORKING</h5>
                            <hr/>
                            <Link className='nav-link' to='/profilesetnet'>
                                <h6 style={{ color: 'white' }}>Skills Page</h6>
                            </Link>
                        </>
                        </Col>
                </Container>
            </Sidebar>
            <div className='infoContainer' style={{ height: "100%", marginBottom: "3em", marginLeft: "1em"}}>
                <ProfileCard/>
            </div>
        </div>
    )
}