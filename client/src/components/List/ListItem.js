import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './List.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';

export default function ListItem (props){

  const post = props.post;
  const author = props.author;
  
  return (
    <div>
      {(post && author) && (
        <li className="list-group-item">
          <div className="postTitle">
          {post.title}
          </div>
          <div className="nameandImgContainer">
            <div className="poster">
              {author.firstName} {author.lastName}
            </div>
            <img src={author.image || ProfilePicL} className="posterImg"/>
          </div>
        </li>
      )}
    </div>
  );
}
