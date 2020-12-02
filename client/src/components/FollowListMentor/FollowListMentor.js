import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './FollowListMentor.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export default function FollowListMentor (props){

  const mentor = props.mentor;

  return (

    <div>
      {mentor && (
          <li className="list-group-item">
            <div className="nameandImgContainer">
              <img src={mentor.image || ProfilePicL} className="posterImg"/>
              <div className="poster">
                {mentor.firstName} {mentor.lastName}
              </div>
              <Link to={{
                pathname: "/user",
                state: {
                    userInfo: mentor
                }
              }}>
                <ArrowRightCircle />
              </Link>
            </div>
          </li>
      )}  
    </div>
  );
}
