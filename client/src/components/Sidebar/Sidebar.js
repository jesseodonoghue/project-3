
import React from 'react';
import './Sidebar.css';


const Sidebar = ({width, height, children}) => {

    return (
        <div className='side-bar' id="color-grad" style={{ width: width, minHeight: height }}>
            {children}
        </div>
        
    );
};


export default Sidebar;

