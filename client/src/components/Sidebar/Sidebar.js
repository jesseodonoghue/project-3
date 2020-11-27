import React from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export default function Sidebar() {

    return (
        <div className='side-bar' id="color-grad">
            <div className="row" style={{margin: "0px", flexDirection: "column"}}>
                <div className="col-md-12">
                    <h4 style={{ color: 'white', marginTop: "2em", marginLeft: "2em" }}>SETTINGS</h4>
                </div>
                <div className="text-right col-md-12" style={{ marginTop: "3em", color: 'white'}}>
                    {/* using short syntax for React fragment with <></> */}
                    <h5>GENERAL</h5>
                        <hr/>
                        <Link className='nav-link' to='/profilesetgen'>
                            <h5 style={{ color: 'white', fontWeight: 'bold' }}>Personal Info</h5>
                        </Link>
                    
                    <h5 style={{ marginTop: "1em"}}>NETWORKING</h5>
                    <hr/>
                    <Link className='nav-link' to='/profilesetnet'>
                        <h6 style={{ color: 'white' }}>Skills Page</h6>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};


