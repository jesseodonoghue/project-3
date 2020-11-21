import React from 'react'
import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
<<<<<<< HEAD

=======
>>>>>>> 4cf33d64b189fbb6f396b9b885b035d36bc85d61
import './style.css';


export default function ProfileSetGen() {
<<<<<<< HEAD
    return (    
        <div className="container-flex">
            <Sidebar width={450} height={'170vh'}>
                <Container>
                    <Col size="md-3">
                        <h4 style={{ color: 'white' }}>SETTINGS</h4>
=======
    return (

        <div className="container-flex" style={{ height: "100%"}}>
            <Sidebar width={400} height={'100%'}>
                <Container>
                    <Col size="md-3">
                        <h4 style={{ color: 'white', marginTop: "2em" }}>SETTINGS</h4>
>>>>>>> aa535ff6a825924a6ea121b3dfb73c2e726e0d67
                    </Col>
                    <Col  className="text-right" size="md-4" style={{ marginTop: "3em", color: 'white'}}>
                        {/* using short syntax for React fragment with <></> */}
                        <> <h5>GENERAL</h5>
                            <hr/>
<<<<<<< HEAD
                            <h6>Personal Info</h6>
=======
                            <Link className='nav-link' to='/profilesetgen'>
                                <h6 style={{ color: 'white', fontWeight: 'bold' }}>Personal Info</h6>
                            </Link>
>>>>>>> aa535ff6a825924a6ea121b3dfb73c2e726e0d67
                        </>
                        <><h5 style={{ marginTop: "1em"}}>NETWORKING</h5>
                            <hr/>
                            <Link className='nav-link' to='/profilesetnet'>
<<<<<<< HEAD
                            <h6>Skills Page</h6>
=======
                                <h6 style={{ color: 'white' }}>Skills Page</h6>
>>>>>>> aa535ff6a825924a6ea121b3dfb73c2e726e0d67
                            </Link>
                        </>
                        </Col>
                </Container>
            </Sidebar>
<<<<<<< HEAD
            <div className='infoContainer col-md-9'>
=======
            <div className='infoContainer' style={{ height: "100%", marginBottom: "3em", marginLeft: "1em"}}>
>>>>>>> aa535ff6a825924a6ea121b3dfb73c2e726e0d67
                <ProfileCard/>
            </div>
        </div>
    )
}