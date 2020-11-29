import React from 'react';
import Sidebar from '../../components/Sidebar';
import ProfileCard from '../../components/ProfileCard';
import './style.css';

export default function ProfileSetGen() {
    return (
        <div className="container-flex" style={{ height: "100%", overflowX: "hidden"}}>
            <div className="row" style={{ width: "100%", margin: "0px"}}>
                <div className="col-md-3" id="sidebarContainer" style={{ padding: "0px"}}>
                    <Sidebar/>
                </div>    
                <div className="col-md-9" id="formContainer">
                    <div className='infoContainer' style={{ height: "100%", paddingLeft: "0px"}}>
                        <ProfileCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}