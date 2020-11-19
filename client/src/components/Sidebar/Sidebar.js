
import React from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';


const Sidebar = ({width, height, children}) => {

    return (
        <div className='side-bar' id="color-grad" style={{ width: width, minHeight: height }}>
            {children}
        </div>
        
    );
};


export default Sidebar;


// const Sidebar = ({width, height, children}) => {

//     return (
//         <div className='side-bar' id="color-grad" style={{ width: width, minHeight: height }}>
//             {children}
//         </div>
        
//     );
// };


// export default Sidebar;

