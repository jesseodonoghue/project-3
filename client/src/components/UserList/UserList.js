import React from 'react';
import './UserList.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function UserList(props) {
    return (
        <li className="list-group-item" id="userList">
            <div className="postTitle">
             Post Title{props.children}
             <button className="userarrowbtn"><ArrowRightCircle style={{ color: "white" }}/></button>
            </div>
        </li>
    );
}