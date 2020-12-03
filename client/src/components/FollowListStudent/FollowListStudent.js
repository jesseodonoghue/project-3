import React from "react";
import './FollowListStudent.css';
import ProfilePicL from '../../assets/defaultprofilepiclarge.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export default function FollowListStudent (props){

  const student = props.student;

  return (

    <div>
      {student && (
        <li className="list-group-item">
          <div className="nameandImgContainer">
            <img src={student.image || ProfilePicL} className="posterImg"/>
            <div className="poster">
              {student.firstName} {student.lastName}
            </div>
            <ArrowRightCircle style={{ color: "5680E9" }} />
          </div>
        </li>
      )}
    </div>
  );
}
