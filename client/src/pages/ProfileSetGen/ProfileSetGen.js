import React from 'react';
import Sidebar from '../../components/Sidebar';
import ProfileCard from '../../components/ProfileCard';
import './style.css';


export default function ProfileSetGen() {
    return (
        <div className="container-flex" style={{ height: "100%"}}>
            <div className="row" style={{ width: "100%"}}>
                <div className="col-md-5">
                    <Sidebar/>
                </div>    
                <div className="col-md-7">
                    <div className='infoContainer' style={{ height: "100%", marginBottom: "3em", marginLeft: "1em"}}>
                        <ProfileCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}