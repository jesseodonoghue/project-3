import React from 'react';
import './Loading.css';
import BugGif from '../../assets/animatedbug.gif';


export default function Loading() {
    return (
        <div className="loadingbox">
            <div className="row">
                <div className="col-md-12">
                    <img src={BugGif} style={{ maxWidth: "400px", maxHeight: "400px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Loading...</h1>
                </div>
            </div>
        </div>
    )
}
