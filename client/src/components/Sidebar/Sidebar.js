import React from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const profile = document.getElementById('personalInfoLink');
const skills = document.getElementById('#killsLink');

// visually validates nav link selection
// function navSelectProfile () {
//     profile.classList.add('selected');
//     skills.classList.remove('selected');
// }

// function navSelectSkills () {
//     skills.classList.add('selected');
//     profile.classList.remove('selected');
// }

export default function Sidebar() {

    return (
        <div className='side-bar' id="color-grad">
            <div className="row" style={{ margin: "0px", flexDirection: "column", paddingRight: "10px" }}>
                <div className="col-md-12" style={{ paddingBottom: "15px" }}>
                    <h4 style={{ color: 'white', marginTop: "2em", marginLeft: "2em", textAlign: "left" }}>SETTINGS</h4>
                </div>
                <div className="col-md-12" id="sidebarNav">
                    <ul>
                        <h5 style={{ paddingLeft: ".5rem", marginLeft: "2em" }}>GENERAL</h5>
                        <hr />
                        <a>
                            <NavLink to='/profilesetgen' activeClassName="active" style={{ marginLeft: "3em", paddingRight: "0px" }}>Personal Info</NavLink>
                            <h5 style={{ marginTop: "1em", marginLeft: "2em", paddingLeft: ".5rem" }}>NETWORKING</h5>
                            <hr />
                            <NavLink to='/profilesetnet' activeClassName="active" style={{ marginLeft: "3em", paddingRight: "0px" }}>Skills Page</NavLink>
                        </a>
                    </ul>
                </div>
            </div>
        </div>

    );
};


