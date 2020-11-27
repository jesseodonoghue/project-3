import React from "react";
import './List.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';

export default function ListItem (props){
  return (
  <li className="list-group-item">
    <div className="postTitle">
    Post Title{props.children}
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
