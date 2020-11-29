import React from "react";
import './FollowListMentor.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export default function FollowListMentor (props){
  return (
  <li className="list-group-item">
    <div className="nameandImgContainer">
      <img src={ProfilePicL} className="posterImg"/>
      <div className="poster">
      Poster's name{props.children}
      </div>
      <ArrowRightCircle />
    </div>
  </li>
  );
}
