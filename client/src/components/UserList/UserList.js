import React from 'react';
import './UserList.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export default function UserList(props) {
    return (
        <li className="list-group-item" id="userList">
            <div className="postTitle" style={{ color: "white" }}>
             {props.title}  {props.children}
             <ArrowRightCircle style={{ color: "white" }}/>
            </div>
        </li>
    );
}