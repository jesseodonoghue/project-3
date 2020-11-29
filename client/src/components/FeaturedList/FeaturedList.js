import React from 'react';
import './FeaturedList.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';

export default function FeaturedList(props) {
    return (
        <li className="list-group-item" id="featuredList">
            <div className="postTitle">
            {props.title} {props.children}
            </div>
            <div className="nameandImgContainer">
                <div className="poster">
                    Poster's name{props.children}
                </div>
                <img src={ProfilePicL} className="posterImg"/>
            </div>
        </li>
    );
}