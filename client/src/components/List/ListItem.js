import React from "react";
import './List.css';

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
      <div className="posterImg"/>
    </div>
  </li>
  );
}
