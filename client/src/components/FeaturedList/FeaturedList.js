import React from 'react';
import './FeaturedList.css';

export default function FeaturedList(props) {
    return (
        <li className="list-group-item" id="featuredList">
            <div className="postTitle">
            Post Title{props.children}
            </div>
            <div className="nameandImgContainer">
                <div className="poster">
                    Poster's name{props.children}
                </div>
                <div className="posterImg"/>
            </div>
        </li>
    );
}