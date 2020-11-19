import React from 'react'
import Sidebar from '../../components/Sidebar';
import Profile from '../../pages/ProfileSetGen';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import './style.css';


export default function ProfileSetGen() {
    return (
       
        <Router>
            <div className="container-flex">
                <Sidebar width={450} height={'100vh'}>
                <Container>
                    <div className="md-3">
                        <h1 className="setting-heading">Settings</h1>
                    </div>
                    <div>
                        <Row>
                            <h4>GENERAL</h4>
                        </Row>
                        <Row>
                            <h6>Personal Info</h6>
                        </Row> 
                                
                        <Row>
                            <h4>NETWORKING</h4>
                        </Row>
                        <Row>       
                            <h6>Skills</h6>
                        </Row>
                    </div>
                    </Container>
                </Sidebar>
                <div className='infoContainer col-md-9'>
                    <ProfileCard/>
                </div>
            </div>
        </Router>
            
        
    )
}


// import React from 'react'
// import Sidebar from '../../components/Sidebar';
// import Profile from '../../pages/ProfileSetGen';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import {Container, Row, Col } from 'react-bootstrap';
// import ProfileCard from '../../components/ProfileCard';


// export default function ProfileSetGen() {
//     return (
       
//         <Router>
            
//             <Sidebar width={450} height={'100vh'}>
//             <Container>
//                 <Col className="md-3">
//                 <h1 className="setting-heading">Settings</h1>
//                 </Col>
//                 <Col className="md-5">
//                     <Row>
//                         <h4>GENERAL</h4>
//                     </Row>
//                     <Row>
//                         <h6>Personal Info</h6>
//                     </Row> 
                            
//                     <Row>
//                         <h4>NETWORKING</h4>
//                     </Row>
//                     <Row>       
//                         <h6>Skills</h6>
//                     </Row>
//                  </Col>
//                 </Container>
//             </Sidebar>
//             <Container>
//                 <ProfileCard/>
//             </Container>
            
//         </Router>
            
        
//     )
// }
